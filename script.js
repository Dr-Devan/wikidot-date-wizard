// Based on the Date Wizard by ErichSteinboeck (2008), CC BY-SA 2.5.
// This adaptation is licensed under CC BY-SA 4.0 International.

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
    copy: document.getElementById('copy'),
    toast: document.getElementById('toast')
};

function init() {
    for (let i = 1900; i <= 2100; i++) els.year.add(new Option(i, i));
    for (let i = 1; i <= 12; i++) els.month.add(new Option(i + '월', i - 1));
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

    setNow();
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

function updatePreview(timestamp, format) {
    // Wikidot marks a processed node in jQuery data. Create a fresh node for each update.
    const date = document.createElement('span');
    date.className = 'odate';
    date.textContent = format ? `${timestamp}|${format}` : String(timestamp);
    els.preview.replaceChildren(date);

    if (window.OZONE?.utils?.formatOdate) {
        OZONE.request.timestamp = Math.floor(Date.now() / 1000);
        OZONE.request.date = new Date();
        OZONE.utils.formatOdate(date);
    } else {
        els.preview.textContent = 'Wikidot 미리보기를 불러올 수 없습니다.';
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
    const invalidDate = date.getFullYear() !== year || date.getMonth() !== month ||
        date.getDate() !== day || date.getHours() !== hour || date.getMinutes() !== minute;

    if (invalidDate || format.includes('"')) {
        els.error.textContent = invalidDate
            ? '이 시간은 현재 시간대에 존재하지 않습니다.'
            : 'Wikidot의 format 속성에는 큰따옴표를 사용할 수 없습니다.';
        els.result.textContent = '';
        els.preview.replaceChildren();
        els.copy.disabled = true;
        return;
    }

    const timestamp = Math.floor(date.getTime() / 1000);
    els.error.textContent = timestamp < 0 ? 'Wikidot은 1970년 이전 날짜를 표시하지 않습니다.' : '';
    els.result.textContent = format
        ? `[[date ${timestamp} format="${format}"]]`
        : `[[date ${timestamp}]]`;
    els.copy.disabled = false;
    if (timestamp < 0) {
        els.preview.replaceChildren();
    } else {
        updatePreview(timestamp, format);
    }
}

async function copyToClipboard() {
    try {
        await navigator.clipboard.writeText(els.result.textContent);
        els.toast.textContent = 'COPIED!';
    } catch {
        els.toast.textContent = '복사에 실패했습니다.';
    }
    els.toast.style.display = 'block';
    setTimeout(() => { els.toast.style.display = 'none'; }, 2000);
}

init();
