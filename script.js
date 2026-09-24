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

const formatToolLabels = {
    ko: {
        groups: ['날짜', '요일·시간', '상대 시간'],
        hints: {
            yearFull: '연도 (4자리)', yearShort: '연도 (2자리)',
            monthNumber: '월 (숫자)', monthShort: '월 이름 (축약)', monthFull: '월 이름 (전체)',
            dayPadded: '일 (두 자리)', dayPlain: '일 (앞자리 0 없음)',
            weekdayShort: '요일 (축약)', weekdayFull: '요일 (전체)',
            hour24: '시 (24시간제)', hour12: '시 (12시간제)',
            minute: '분', second: '초', period: '오전/오후',
            relative: '상대 시간', hover: '호버 시 상대 시간 표시'
        }
    },
    en: {
        groups: ['Date', 'Weekday & time', 'Relative time'],
        hints: {
            yearFull: 'Year (4 digits)', yearShort: 'Year (2 digits)',
            monthNumber: 'Month (number)', monthShort: 'Month name (short)', monthFull: 'Month name (full)',
            dayPadded: 'Day (2 digits)', dayPlain: 'Day (no leading zero)',
            weekdayShort: 'Weekday (short)', weekdayFull: 'Weekday (full)',
            hour24: 'Hour (24-hour)', hour12: 'Hour (12-hour)',
            minute: 'Minute', second: 'Second', period: 'AM/PM',
            relative: 'Relative time', hover: 'Show relative time on hover'
        }
    },
    ja: {
        groups: ['日付', '曜日・時刻', '相対時間'],
        hints: {
            yearFull: '年（4桁）', yearShort: '年（2桁）',
            monthNumber: '月（数字）', monthShort: '月名（省略形）', monthFull: '月名（完全形）',
            dayPadded: '日（2桁）', dayPlain: '日（先頭の0なし）',
            weekdayShort: '曜日（省略形）', weekdayFull: '曜日（完全形）',
            hour24: '時（24時間制）', hour12: '時（12時間制）',
            minute: '分', second: '秒', period: '午前／午後',
            relative: '相対時間', hover: 'ホバー時に相対時間を表示'
        }
    },
    'zh-CN': {
        groups: ['日期', '星期与时间', '相对时间'],
        hints: {
            yearFull: '年份（4位）', yearShort: '年份（2位）',
            monthNumber: '月份（数字）', monthShort: '月份名称（缩写）', monthFull: '月份名称（全称）',
            dayPadded: '日期（2位）', dayPlain: '日期（不补零）',
            weekdayShort: '星期（缩写）', weekdayFull: '星期（全称）',
            hour24: '小时（24小时制）', hour12: '小时（12小时制）',
            minute: '分钟', second: '秒', period: '上午／下午',
            relative: '相对时间', hover: '悬停时显示相对时间'
        }
    },
    da: {
        groups: ['Dato', 'Ugedag og tid', 'Relativ tid'],
        hints: {
            yearFull: 'År (4 cifre)', yearShort: 'År (2 cifre)',
            monthNumber: 'Måned (tal)', monthShort: 'Månedsnavn (kort)', monthFull: 'Månedsnavn (fuldt)',
            dayPadded: 'Dag (2 cifre)', dayPlain: 'Dag (uden indledende nul)',
            weekdayShort: 'Ugedag (kort)', weekdayFull: 'Ugedag (fuld)',
            hour24: 'Time (24-timers ur)', hour12: 'Time (12-timers ur)',
            minute: 'Minut', second: 'Sekund', period: 'AM/PM',
            relative: 'Relativ tid', hover: 'Vis relativ tid ved museoverføring'
        }
    },
    de: {
        groups: ['Datum', 'Wochentag und Uhrzeit', 'Relative Zeit'],
        hints: {
            yearFull: 'Jahr (4 Stellen)', yearShort: 'Jahr (2 Stellen)',
            monthNumber: 'Monat (Zahl)', monthShort: 'Monatsname (kurz)', monthFull: 'Monatsname (vollständig)',
            dayPadded: 'Tag (2 Stellen)', dayPlain: 'Tag (ohne führende Null)',
            weekdayShort: 'Wochentag (kurz)', weekdayFull: 'Wochentag (vollständig)',
            hour24: 'Stunde (24-Stunden-Format)', hour12: 'Stunde (12-Stunden-Format)',
            minute: 'Minute', second: 'Sekunde', period: 'AM/PM',
            relative: 'Relative Zeit', hover: 'Relative Zeit beim Darüberfahren anzeigen'
        }
    },
    es: {
        groups: ['Fecha', 'Día y hora', 'Tiempo relativo'],
        hints: {
            yearFull: 'Año (4 dígitos)', yearShort: 'Año (2 dígitos)',
            monthNumber: 'Mes (número)', monthShort: 'Nombre del mes (abreviado)', monthFull: 'Nombre del mes (completo)',
            dayPadded: 'Día (2 dígitos)', dayPlain: 'Día (sin cero inicial)',
            weekdayShort: 'Día de la semana (abreviado)', weekdayFull: 'Día de la semana (completo)',
            hour24: 'Hora (formato de 24 horas)', hour12: 'Hora (formato de 12 horas)',
            minute: 'Minuto', second: 'Segundo', period: 'AM/PM',
            relative: 'Tiempo relativo', hover: 'Mostrar tiempo relativo al pasar el cursor'
        }
    },
    fr: {
        groups: ['Date', 'Jour et heure', 'Temps relatif'],
        hints: {
            yearFull: 'Année (4 chiffres)', yearShort: 'Année (2 chiffres)',
            monthNumber: 'Mois (nombre)', monthShort: 'Nom du mois (abrégé)', monthFull: 'Nom du mois (complet)',
            dayPadded: 'Jour (2 chiffres)', dayPlain: 'Jour (sans zéro initial)',
            weekdayShort: 'Jour de la semaine (abrégé)', weekdayFull: 'Jour de la semaine (complet)',
            hour24: 'Heure (format 24 h)', hour12: 'Heure (format 12 h)',
            minute: 'Minute', second: 'Seconde', period: 'AM/PM',
            relative: 'Temps relatif', hover: 'Afficher le temps relatif au survol'
        }
    },
    it: {
        groups: ['Data', 'Giorno e ora', 'Tempo relativo'],
        hints: {
            yearFull: 'Anno (4 cifre)', yearShort: 'Anno (2 cifre)',
            monthNumber: 'Mese (numero)', monthShort: 'Nome del mese (abbreviato)', monthFull: 'Nome del mese (completo)',
            dayPadded: 'Giorno (2 cifre)', dayPlain: 'Giorno (senza zero iniziale)',
            weekdayShort: 'Giorno della settimana (abbreviato)', weekdayFull: 'Giorno della settimana (completo)',
            hour24: 'Ora (formato 24 ore)', hour12: 'Ora (formato 12 ore)',
            minute: 'Minuto', second: 'Secondo', period: 'AM/PM',
            relative: 'Tempo relativo', hover: 'Mostra il tempo relativo al passaggio del cursore'
        }
    },
    pl: {
        groups: ['Data', 'Dzień tygodnia i czas', 'Czas względny'],
        hints: {
            yearFull: 'Rok (4 cyfry)', yearShort: 'Rok (2 cyfry)',
            monthNumber: 'Miesiąc (liczba)', monthShort: 'Nazwa miesiąca (skrócona)', monthFull: 'Nazwa miesiąca (pełna)',
            dayPadded: 'Dzień (2 cyfry)', dayPlain: 'Dzień (bez zera na początku)',
            weekdayShort: 'Dzień tygodnia (skrócony)', weekdayFull: 'Dzień tygodnia (pełny)',
            hour24: 'Godzina (format 24-godzinny)', hour12: 'Godzina (format 12-godzinny)',
            minute: 'Minuta', second: 'Sekunda', period: 'AM/PM',
            relative: 'Czas względny', hover: 'Pokaż czas względny po najechaniu'
        }
    },
    ru: {
        groups: ['Дата', 'День недели и время', 'Относительное время'],
        hints: {
            yearFull: 'Год (4 цифры)', yearShort: 'Год (2 цифры)',
            monthNumber: 'Месяц (число)', monthShort: 'Название месяца (сокращённое)', monthFull: 'Название месяца (полное)',
            dayPadded: 'День (2 цифры)', dayPlain: 'День (без ведущего нуля)',
            weekdayShort: 'День недели (сокращённый)', weekdayFull: 'День недели (полный)',
            hour24: 'Час (24-часовой формат)', hour12: 'Час (12-часовой формат)',
            minute: 'Минута', second: 'Секунда', period: 'AM/PM',
            relative: 'Относительное время', hover: 'Показывать относительное время при наведении'
        }
    },
    sr: {
        groups: ['Датум', 'Дан у недељи и време', 'Релативно време'],
        hints: {
            yearFull: 'Година (4 цифре)', yearShort: 'Година (2 цифре)',
            monthNumber: 'Месец (број)', monthShort: 'Назив месеца (скраћен)', monthFull: 'Назив месеца (пун)',
            dayPadded: 'Дан (2 цифре)', dayPlain: 'Дан (без водеће нуле)',
            weekdayShort: 'Дан у недељи (скраћен)', weekdayFull: 'Дан у недељи (пун)',
            hour24: 'Сат (24-часовни формат)', hour12: 'Сат (12-часовни формат)',
            minute: 'Минут', second: 'Секунда', period: 'AM/PM',
            relative: 'Релативно време', hover: 'Прикажи релативно време при преласку показивачем'
        }
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
    formatTools: document.getElementById('format-tools'),
    result: document.getElementById('result-code'),
    preview: document.getElementById('preview-text'),
    error: document.getElementById('error'),
    language: document.getElementById('language'),
    copy: document.getElementById('copy'),
    toast: document.getElementById('toast')
};

let language = 'en';
let hasFormatSelection = false;

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
    els.format.oninput = () => {
        update();
        syncHoverButton();
    };
    els.format.addEventListener('focus', () => { hasFormatSelection = true; });
    els.formatTools.onclick = event => {
        const button = event.target.closest('button[data-token]');
        if (button) insertFormatToken(button.dataset.token);
    };
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
    const toolLabels = formatToolLabels[next];
    for (const [index, id] of ['date-tokens-label', 'time-tokens-label', 'relative-tokens-label'].entries()) {
        document.getElementById(id).textContent = toolLabels.groups[index];
    }
    for (const button of els.formatTools.querySelectorAll('button[data-token]')) {
        const description = toolLabels.hints[button.dataset.key];
        button.title = description;
        button.setAttribute('aria-label', `${description} (${button.dataset.token})`);
    }
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

function syncHoverButton() {
    const button = els.formatTools.querySelector('[data-token="|agohover"]');
    button.setAttribute('aria-pressed', String(els.format.value.includes('|agohover')));
}

function insertFormatToken(token) {
    const value = els.format.value;
    if (token === '|agohover') {
        const enabled = value.includes(token);
        els.format.value = value.replaceAll(token, '') + (enabled ? '' : token);
        els.format.setSelectionRange(els.format.value.length, els.format.value.length);
    } else {
        let start = hasFormatSelection ? els.format.selectionStart : value.length;
        let end = hasFormatSelection ? els.format.selectionEnd : value.length;
        const hoverStart = value.indexOf('|agohover');
        if (start === end && hoverStart !== -1 && start >= hoverStart) {
            start = end = hoverStart;
        }
        els.format.setRangeText(token, start, end, 'end');
    }
    els.format.focus();
    els.format.dispatchEvent(new Event('input', { bubbles: true }));
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
