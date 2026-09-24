// Based on the Date Wizard by ErichSteinboeck (2008), CC BY-SA 2.5.
// This adaptation is licensed under CC BY-SA 4.0 International.

const translations = {
    ko: {
        title: 'Wikidot 날짜 생성기', language: '언어', date: '날짜와 시간',
        year: '연도', month: '월', day: '일', hour: '시', minute: '분', now: '현재',
        format: '표시 형식', preview: '미리보기', code: 'Wikidot 코드', copy: '코드 복사',
        invalidDate: '이 시간은 현재 시간대에 존재하지 않습니다.',
        invalidFormat: 'Wikidot의 format 속성에는 큰따옴표를 사용할 수 없습니다.',
        beforeEpoch: 'Wikidot은 1970년 이전 날짜를 표시하지 않습니다.',
        unavailable: 'Wikidot 미리보기를 불러올 수 없습니다.',
        copied: '복사했습니다.', copyError: '복사에 실패했습니다.',
        monthName: n => `${n}월`
    },
    en: {
        title: 'Wikidot Date Generator', language: 'Language', date: 'Date & time',
        year: 'Year', month: 'Month', day: 'Day', hour: 'Hour', minute: 'Minute', now: 'Now',
        format: 'Format string', preview: 'Preview', code: 'Wikidot code', copy: 'Copy code',
        invalidDate: 'This time does not exist in your time zone.',
        invalidFormat: 'Double quotes cannot be used in the Wikidot format attribute.',
        beforeEpoch: 'Wikidot does not display dates before 1970.',
        unavailable: 'Could not load the Wikidot preview.',
        copied: 'Copied.', copyError: 'Copy failed.',
        monthName: n => new Date(2024, n - 1, 1).toLocaleString('en', { month: 'short' })
    },
    ja: {
        title: 'Wikidot 日付ジェネレーター', language: '言語', date: '日付と時刻',
        year: '年', month: '月', day: '日', hour: '時', minute: '分', now: '現在',
        format: '表示形式', preview: 'プレビュー', code: 'Wikidot コード', copy: 'コードをコピー',
        invalidDate: 'この日時は現在のタイムゾーンに存在しません。',
        invalidFormat: 'Wikidot の format 属性に二重引用符は使用できません。',
        beforeEpoch: 'Wikidot は1970年より前の日付を表示できません。',
        unavailable: 'Wikidot のプレビューを読み込めませんでした。',
        copied: 'コピーしました。', copyError: 'コピーに失敗しました。',
        monthName: n => `${n}月`
    }
};

const relativeTimeWords = {
    ko: {
        ago: '전', till: '후', day: '일', days: '일',
        hour: '시간', hours: '시간', minute: '분', minutes: '분',
        second: '초', seconds: '초'
    },
    ja: {
        ago: '前', till: '後', day: '日', days: '日',
        hour: '時間', hours: '時間', minute: '分', minutes: '分',
        second: '秒', seconds: '秒'
    }
};

const els = {
    year: document.getElementById('year'),
    month: document.getElementById('month'),
    day: document.getElementById('day'),
    hour: document.getElementById('hour'),
    minute: document.getElementById('minute'),
    format: document.getElementById('format'),
    result: document.getElementById('result-code'),
    preview: document.getElementById('preview-text'),
    error: document.getElementById('error'),
    language: document.getElementById('language'),
    copy: document.getElementById('copy'),
    toast: document.getElementById('toast')
};

let language = 'en';

function init() {
    for (let i = 1900; i <= 2100; i++) els.year.add(new Option(i, i));
    for (let i = 1; i <= 12; i++) els.month.add(new Option(i, i - 1));
    for (let i = 0; i < 24; i++) els.hour.add(new Option(String(i).padStart(2, '0'), i));
    for (let i = 0; i < 60; i++) els.minute.add(new Option(String(i).padStart(2, '0'), i));

    els.year.onchange = els.month.onchange = () => {
        updateDays();
        update();
    };
    els.day.onchange = els.hour.onchange = els.minute.onchange = update;
    els.format.oninput = update;
    document.getElementById('now').onclick = setNow;
    els.copy.onclick = copyToClipboard;
    els.language.onchange = () => setLanguage(els.language.value);

    setNow();
    let preferred = navigator.language.toLowerCase().split('-')[0];
    try { preferred = localStorage.getItem('wikidot-date-language') || preferred; } catch { /* Storage may be disabled. */ }
    setLanguage(translations[preferred] ? preferred : 'en');
}

function setLanguage(next) {
    language = next;
    els.language.value = next;
    document.documentElement.lang = next;
    const t = translations[next];
    const labels = {
        title: t.title, 'language-label': t.language, 'date-label': t.date,
        'format-label': t.format, 'preview-label': t.preview,
        'code-label': t.code, 'copy-label': t.copy, now: t.now
    };
    for (const [id, value] of Object.entries(labels)) document.getElementById(id).textContent = value;
    for (const field of ['year', 'month', 'day', 'hour', 'minute']) {
        els[field].setAttribute('aria-label', t[field]);
    }
    els.language.setAttribute('aria-label', t.language);
    for (let i = 0; i < 12; i++) els.month.options[i].textContent = t.monthName(i + 1);
    if (window.OZONE?.loc?.addMessages) {
        if (relativeTimeWords[next]) OZONE.loc.addMessages(relativeTimeWords[next], next);
        OZONE.lang = next;
    }
    try { localStorage.setItem('wikidot-date-language', next); } catch { /* Storage may be disabled. */ }
    update();
}

function setNow() {
    const now = new Date();
    els.year.value = now.getFullYear();
    els.month.value = now.getMonth();
    updateDays();
    els.day.value = now.getDate();
    els.hour.value = now.getHours();
    els.minute.value = now.getMinutes();
    update();
}

function updateDays() {
    const lastDay = new Date(Number(els.year.value), Number(els.month.value) + 1, 0).getDate();
    const selectedDay = Number(els.day.value) || 1;
    els.day.replaceChildren();
    for (let i = 1; i <= lastDay; i++) els.day.add(new Option(i, i));
    els.day.value = Math.min(selectedDay, lastDay);
}

function clearPreview() {
    els.preview.firstElementChild?.hovertip?.remove();
    els.preview.replaceChildren();
}

function updatePreview(timestamp, format) {
    // Wikidot marks a processed node in jQuery data. Create a fresh node for each update.
    const date = document.createElement('span');
    date.className = 'odate';
    date.textContent = format ? `${timestamp}|${format}` : String(timestamp);
    clearPreview();
    els.preview.append(date);

    if (window.OZONE?.utils?.formatOdate) {
        OZONE.request.timestamp = Math.floor(Date.now() / 1000);
        OZONE.request.date = new Date();
        OZONE.utils.formatOdate(date);
    } else {
        els.preview.textContent = translations[language].unavailable;
    }
}

function update() {
    const year = Number(els.year.value);
    const month = Number(els.month.value);
    const day = Number(els.day.value);
    const hour = Number(els.hour.value);
    const minute = Number(els.minute.value);
    const date = new Date(year, month, day, hour, minute);
    const format = els.format.value;
    const t = translations[language];
    const invalidDate = date.getFullYear() !== year || date.getMonth() !== month ||
        date.getDate() !== day || date.getHours() !== hour || date.getMinutes() !== minute;

    if (invalidDate || format.includes('"')) {
        els.error.textContent = invalidDate
            ? t.invalidDate : t.invalidFormat;
        els.result.textContent = '';
        clearPreview();
        els.copy.disabled = true;
        return;
    }

    const timestamp = Math.floor(date.getTime() / 1000);
    els.error.textContent = timestamp < 0 ? t.beforeEpoch : '';
    els.result.textContent = format
        ? `[[date ${timestamp} format="${format}"]]`
        : `[[date ${timestamp}]]`;
    els.copy.disabled = false;
    if (timestamp < 0) {
        clearPreview();
    } else {
        updatePreview(timestamp, format);
    }
}

async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(els.result.textContent);
        els.toast.textContent = translations[language].copied;
    } catch {
        els.toast.textContent = translations[language].copyError;
    }
    els.toast.style.display = 'block';
    setTimeout(() => { els.toast.style.display = 'none'; }, 2000);
}

init();
