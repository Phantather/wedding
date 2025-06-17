const translations = {
    ky: {
        invitation_title: "Урматтуу коноктор!",
        invitation_text1: "Биздин жашообузда эң маанилүү жана салтанаттуу иш-чара - ",
        wedding_text: "үйлөнүү тоюбуз боло тургандыгын жарыялоого кубанычтабыз!",
        invitation_text2: "Бул өзгөчө күнү биз сиз менен жүрөк козгоорлук окуяны бөлүшүү үчүн сүйүктүү жана жакын адамдарыбыздын курчоосунда болгубуз келет!",
        calendar_title: "Биздин майрамдын датасы",
        september: "Сентябрь 2025",
        sunday: "Жекшемби",
        countdown_title: "Үйлөнүү тойубузга чейин:",
        days: "күн",
        hours: "саат",
        minutes: "мүнөт",
        seconds: "секунд",
        location_title: "Той өтө турчу жер",
        start_time: "Башталышы: 17:00",
        how_to_get: "Жол багыт",
        welcome_text: "Биздин майрамда<br>сизди көргүбүз келет!",
        your: "Сиздерди урматтоо менен,",
        music_on: "Музыканы өчүрүү",
        music_off: "Музыканы күйгүзүү",
        and: "жана",
        argen: "Аарген",
        nurzhamal: "Нуржамал",
        names: "Аарген - Нуржамал",
        restaurant: "\"Хан-Тенгри\" Ресторан",
        address: "Нарын шаары, Жусупов көчөсү, 2/6",
        pn: "Дүй",
        vt: "Шей",
        sr: "Шар",
        ch: "Бей",
        pt: "Жум",
        sb: "Ише",
        vk: "Жек"
    },
    ru: {
        invitation_title: "Дорогие гости!",
        invitation_text1: "Мы рады сообщить, что в нашей жизни состоится самое главное и торжественное событие -",
        wedding_text: "день нашей свадьбы!",
        invitation_text2: "В этот особенный день мы хотим оказаться в окружении дорогих и близких нам людей!",
        calendar_title: "Дата нашего торжества",
        september: "Сентябрь 2025",
        sunday: "Воскресенье",
        countdown_title: "До нашей свадьбы осталось:",
        days: "дней",
        hours: "часов",
        minutes: "минут",
        seconds: "секунд",
        location_title: "Место проведения",
        start_time: "Начало в 17:00",
        how_to_get: "Как добраться",
        welcome_text: "Будем рады видеть вас<br>на нашем празднике!",
        your: "С уважением,",
        music_on: "Выключить музыку",
        music_off: "Включить музыку",
        and: "и",
        argen: "Аарген",
        nurzhamal: "Нуржамал",
        names: "Аарген - Нуржамал",
        restaurant: "Ресторан \"Хан-Тенгри",
        address: "г. Нарын, ул. Жусупова, 2/6",
        pn: "ПН",
        vt: "ВТ",
        sr: "СР",
        ch: "ЧТ",
        pt: "ПТ",
        sb: "СБ",
        vk: "ВС"
    },
    deu: {
        invitation_title: "Liebe Gäste!",
        invitation_text1: "Wir freuen uns, Euch mitteilen zu dürfen, dass in unserem Leben ein ganz besonderes und feierliches Ereignis bevorsteht -",
        wedding_text: "unser Hochzeitstag!",
        invitation_text2: "An diesem besonderen Tag möchten wir von unseren liebsten und wichtigsten Menschen umgeben sein!",
        calendar_title: "Datum unserer Feier",
        september: "September 2025",
        sunday: "Sonntag",
        countdown_title: "Noch so viele Tage bis zu unserer Hochzeit:",
        days: "Tage",
        hours: "Stunden",
        minutes: "Minuten",
        seconds: "Sekunden",
        location_title: "Veranstaltungsort",
        start_time: "Beginn um 17:00 Uhr",
        how_to_get: "Wegbeschreibung",
        welcome_text: "Eure Anwesenheit an unserem Hochzeitstag würde<br>würde uns sehr glücklich machen!",
        your: "Mit Liebe und Vorfreude,",
        music_on: "Musik stoppen",
        music_off: "Musik abspielen",
        and: "&",
        argen: "Argen",
        nurzhamal: "Nurzhamal",
        names: "Argen & Nurzhamal",
        restaurant: "Restaurant „Khan-Tengri“",
        address: "Stadt Naryn, Dschusupow-Straße 2/6",
        pn: "Mo",
        vt: "Di",
        sr: "Mi",
        ch: "Do",
        pt: "Fr",
        sb: "Sa",
        vk: "So"
    }
};

// Глобальные переменные
let currentLang = 'ru';
let musicPlaying = false;
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicStatus = document.getElementById('musicStatus');

function autoScrollSections(interval = 4000) {
    const sections = Array.from(document.querySelectorAll('section'));
    let current = 0;

    setInterval(() => {
        current = (current + 1) % sections.length;
        sections[current].scrollIntoView({ behavior: 'smooth' });
    }, interval);
}


// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    initMusic();
    initCountdown();
    initScrollAnimations();

    // startMusic()

    // autoScrollSections(10000);
});

// Функция для автоматического запуска музыки
function startMusic() {
    bgMusic.volume = 0.3; // Устанавливаем комфортную громкость
    const playPromise = bgMusic.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            // Если автовоспроизведение заблокировано, показываем кнопку
            musicPlaying = false;
            updateMusicStatus();
            console.log("Автовоспроизведение заблокировано. Пользователь должен взаимодействовать со страницей.");
        });
    }
}

// Функция инициализации музыки
function initMusic() {
    musicToggle.addEventListener('click', toggleMusic);
    updateMusicStatus();
}


// Функция инициализации языка
function initLanguage() {
    // Проверяем localStorage
    const savedLang = localStorage.getItem('wedding_lang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
    }
    changeLanguage(currentLang);

    const langSelect = document.getElementById('langSelect');
    langSelect.value = currentLang;
    langSelect.addEventListener('change', function() {
        changeLanguage(this.value);
        localStorage.setItem('wedding_lang', this.value); // Сохраняем выбор
    });
}

// Функция смены языка
function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    updateMusicStatus();
}

// Функция переключения музыки
function toggleMusic() {
    musicPlaying = !musicPlaying;

    if (musicPlaying) {
        bgMusic.play().catch(e => console.log("Автовоспроизведение заблокировано:", e));
        musicToggle.classList.add('playing'); // Добавляем класс для анимации
    } else {
        bgMusic.pause();
        musicToggle.classList.remove('playing'); // Убираем класс анимации
    }

    updateMusicStatus();
}

// В функции tryAutoPlay обновите успешный случай:
playPromise.then(() => {
    musicPlaying = true;
    musicToggle.classList.add('playing'); // Добавляем анимацию
    updateMusicStatus();
})

// Функция обновления статуса музыки
function updateMusicStatus() {
    musicStatus.textContent = musicPlaying
        ? translations[currentLang].music_on
        : translations[currentLang].music_off;
}

// Функция инициализации таймера
function initCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Функция обновления таймера
function updateCountdown() {
    const weddingDate = new Date('September 14, 2025 17:00:00').getTime(); // Установлено 17:00
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Если дата уже прошла
    if (distance < 0) {
        document.getElementById('countdown').innerHTML = translations[currentLang].wedding_text;
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
}
// Функция инициализации анимаций при скролле
function initScrollAnimations() {
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
    document.querySelector('.hero').classList.add('visible');
}

function checkVisibility() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible'); // Сброс анимации при уходе секции вверх
        }
    });
}
