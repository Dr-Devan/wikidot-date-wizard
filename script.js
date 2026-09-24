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
    },
    'zh-CN': {
        title: 'Wikidot 日期生成器', language: '语言', date: '日期与时间',
        year: '年', month: '月', day: '日', hour: '小时', minute: '分钟', now: '现在',
        format: '格式字符串', preview: '预览', code: 'Wikidot 代码', copy: '复制代码',
        invalidDate: '此时间在当前时区不存在。',
        invalidFormat: 'Wikidot 的 format 属性不能包含双引号。',
        beforeEpoch: 'Wikidot 不显示 1970 年之前的日期。',
        unavailable: '无法加载 Wikidot 预览。',
        copied: '已复制。', copyError: '复制失败。',
        monthName: n => `${n}月`
    },
    da: {
        title: 'Wikidot datogenerator', language: 'Sprog', date: 'Dato og klokkeslæt',
        year: 'År', month: 'Måned', day: 'Dag', hour: 'Time', minute: 'Minut', now: 'Nu',
        format: 'Formatstreng', preview: 'Forhåndsvisning', code: 'Wikidot-kode', copy: 'Kopiér kode',
        invalidDate: 'Dette tidspunkt findes ikke i din tidszone.',
        invalidFormat: 'Anførselstegn kan ikke bruges i Wikidots format-attribut.',
        beforeEpoch: 'Wikidot viser ikke datoer før 1970.',
        unavailable: 'Wikidot-forhåndsvisningen kunne ikke indlæses.',
        copied: 'Kopieret.', copyError: 'Kopiering mislykkedes.',
        monthName: n => shortMonth('da', n)
    },
    de: {
        title: 'Wikidot-Datumsgenerator', language: 'Sprache', date: 'Datum und Uhrzeit',
        year: 'Jahr', month: 'Monat', day: 'Tag', hour: 'Stunde', minute: 'Minute', now: 'Jetzt',
        format: 'Formatzeichenfolge', preview: 'Vorschau', code: 'Wikidot-Code', copy: 'Code kopieren',
        invalidDate: 'Diese Uhrzeit existiert in Ihrer Zeitzone nicht.',
        invalidFormat: 'Anführungszeichen sind im Wikidot-Formatattribut nicht erlaubt.',
        beforeEpoch: 'Wikidot zeigt keine Daten vor 1970 an.',
        unavailable: 'Die Wikidot-Vorschau konnte nicht geladen werden.',
        copied: 'Kopiert.', copyError: 'Kopieren fehlgeschlagen.',
        monthName: n => shortMonth('de', n)
    },
    es: {
        title: 'Generador de fechas de Wikidot', language: 'Idioma', date: 'Fecha y hora',
        year: 'Año', month: 'Mes', day: 'Día', hour: 'Hora', minute: 'Minuto', now: 'Ahora',
        format: 'Cadena de formato', preview: 'Vista previa', code: 'Código Wikidot', copy: 'Copiar código',
        invalidDate: 'Esta hora no existe en tu zona horaria.',
        invalidFormat: 'El atributo format de Wikidot no admite comillas dobles.',
        beforeEpoch: 'Wikidot no muestra fechas anteriores a 1970.',
        unavailable: 'No se pudo cargar la vista previa de Wikidot.',
        copied: 'Copiado.', copyError: 'No se pudo copiar.',
        monthName: n => shortMonth('es', n)
    },
    fr: {
        title: 'Générateur de dates Wikidot', language: 'Langue', date: 'Date et heure',
        year: 'Année', month: 'Mois', day: 'Jour', hour: 'Heure', minute: 'Minute', now: 'Maintenant',
        format: 'Chaîne de format', preview: 'Aperçu', code: 'Code Wikidot', copy: 'Copier le code',
        invalidDate: 'Cette heure n’existe pas dans votre fuseau horaire.',
        invalidFormat: 'L’attribut format de Wikidot ne peut pas contenir de guillemets doubles.',
        beforeEpoch: 'Wikidot n’affiche pas les dates antérieures à 1970.',
        unavailable: 'Impossible de charger l’aperçu Wikidot.',
        copied: 'Copié.', copyError: 'Échec de la copie.',
        monthName: n => shortMonth('fr', n)
    },
    it: {
        title: 'Generatore di date Wikidot', language: 'Lingua', date: 'Data e ora',
        year: 'Anno', month: 'Mese', day: 'Giorno', hour: 'Ora', minute: 'Minuto', now: 'Adesso',
        format: 'Stringa di formato', preview: 'Anteprima', code: 'Codice Wikidot', copy: 'Copia codice',
        invalidDate: 'Questo orario non esiste nel tuo fuso orario.',
        invalidFormat: 'L’attributo format di Wikidot non può contenere virgolette doppie.',
        beforeEpoch: 'Wikidot non mostra le date precedenti al 1970.',
        unavailable: 'Impossibile caricare l’anteprima di Wikidot.',
        copied: 'Copiato.', copyError: 'Copia non riuscita.',
        monthName: n => shortMonth('it', n)
    },
    pl: {
        title: 'Generator dat Wikidot', language: 'Język', date: 'Data i godzina',
        year: 'Rok', month: 'Miesiąc', day: 'Dzień', hour: 'Godzina', minute: 'Minuta', now: 'Teraz',
        format: 'Format daty', preview: 'Podgląd', code: 'Kod Wikidot', copy: 'Kopiuj kod',
        invalidDate: 'Ta godzina nie istnieje w Twojej strefie czasowej.',
        invalidFormat: 'Atrybut format w Wikidot nie może zawierać cudzysłowów.',
        beforeEpoch: 'Wikidot nie wyświetla dat sprzed 1970 roku.',
        unavailable: 'Nie udało się wczytać podglądu Wikidot.',
        copied: 'Skopiowano.', copyError: 'Nie udało się skopiować.',
        monthName: n => shortMonth('pl', n)
    },
    ru: {
        title: 'Генератор дат Wikidot', language: 'Язык', date: 'Дата и время',
        year: 'Год', month: 'Месяц', day: 'День', hour: 'Час', minute: 'Минута', now: 'Сейчас',
        format: 'Строка формата', preview: 'Предпросмотр', code: 'Код Wikidot', copy: 'Скопировать код',
        invalidDate: 'Такого времени нет в вашем часовом поясе.',
        invalidFormat: 'Атрибут format в Wikidot не допускает двойных кавычек.',
        beforeEpoch: 'Wikidot не отображает даты до 1970 года.',
        unavailable: 'Не удалось загрузить предпросмотр Wikidot.',
        copied: 'Скопировано.', copyError: 'Не удалось скопировать.',
        monthName: n => shortMonth('ru', n)
    },
    sr: {
        title: 'Wikidot генератор датума', language: 'Језик', date: 'Датум и време',
        year: 'Година', month: 'Месец', day: 'Дан', hour: 'Сат', minute: 'Минут', now: 'Сада',
        format: 'Формат датума', preview: 'Преглед', code: 'Wikidot код', copy: 'Копирај код',
        invalidDate: 'Ово време не постоји у вашој временској зони.',
        invalidFormat: 'Wikidot атрибут format не може да садржи двоструке наводнике.',
        beforeEpoch: 'Wikidot не приказује датуме пре 1970. године.',
        unavailable: 'Није могуће учитати Wikidot преглед.',
        copied: 'Копирано.', copyError: 'Копирање није успело.',
        monthName: n => shortMonth('sr-Cyrl', n)
    }
};

function shortMonth(locale, month) {
    return new Intl.DateTimeFormat(locale, { month: 'short' }).format(new Date(2024, month - 1, 1));
}

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
    },
    'zh-CN': {
        ago: '前', till: '后', day: '天', days: '天',
        hour: '小时', hours: '小时', minute: '分钟', minutes: '分钟',
        second: '秒', seconds: '秒'
    },
    da: {
        ago: 'siden', till: 'senere', day: 'dag', days: 'dage',
        hour: 'time', hours: 'timer', minute: 'minut', minutes: 'minutter',
        second: 'sekund', seconds: 'sekunder'
    },
    de: {
        ago: 'zuvor', till: 'später', day: 'Tag', days: 'Tage',
        hour: 'Stunde', hours: 'Stunden', minute: 'Minute', minutes: 'Minuten',
        second: 'Sekunde', seconds: 'Sekunden'
    },
    es: {
        ago: 'atrás', till: 'después', day: 'día', days: 'días',
        hour: 'hora', hours: 'horas', minute: 'minuto', minutes: 'minutos',
        second: 'segundo', seconds: 'segundos'
    },
    fr: {
        ago: 'auparavant', till: 'plus tard', day: 'jour', days: 'jours',
        hour: 'heure', hours: 'heures', minute: 'minute', minutes: 'minutes',
        second: 'seconde', seconds: 'secondes'
    },
    it: {
        ago: 'fa', till: 'più tardi', day: 'giorno', days: 'giorni',
        hour: 'ora', hours: 'ore', minute: 'minuto', minutes: 'minuti',
        second: 'secondo', seconds: 'secondi'
    },
    pl: {
        ago: 'temu', till: 'później', day: 'dzień', days: 'dni',
        hour: 'godzina', hours: 'godziny', minute: 'minuta', minutes: 'minuty',
        second: 'sekunda', seconds: 'sekundy'
    },
    ru: {
        ago: 'назад', till: 'позже', day: 'день', days: 'дней',
        hour: 'час', hours: 'часов', minute: 'минута', minutes: 'минут',
        second: 'секунда', seconds: 'секунд'
    },
    sr: {
        ago: 'раније', till: 'касније', day: 'дан', days: 'дана',
        hour: 'сат', hours: 'сати', minute: 'минут', minutes: 'минута',
        second: 'секунда', seconds: 'секунди'
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
    const browserLanguage = navigator.language.toLowerCase();
    let preferred = browserLanguage.startsWith('zh') && !/^zh-(tw|hk|mo|hant)/.test(browserLanguage)
        ? 'zh-CN' : browserLanguage.split('-')[0];
    try { preferred = localStorage.getItem('wikidot-date-language') || preferred; } catch { /* Storage may be disabled. */ }
    setLanguage(translations[preferred] ? preferred : 'en');
}

function setLanguage(next) {
    language = next;
    els.language.value = next;
    document.documentElement.lang = next;
    const t = translations[next];
    document.title = t.title;
    const labels = {
        title: t.title, 'language-label': t.language, 'date-label': t.date,
        'format-label': t.format, 'preview-label': t.preview,
        'code-label': t.code, 'copy-label': t.copy, 'now-label': t.now
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
