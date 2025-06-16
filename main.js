
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
        your: "Сиздин"
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
        your: "Ваши"
    }
};


// Countdown timer
function updateCountdown() {
    // Set default language to Kyrgyz
    let currentLang = 'ky';

    // Get language buttons
    const langButtons = document.querySelectorAll('.lang-btn');

    // Function to change language
    function changeLanguage(lang) {
        currentLang = lang;

        // Update active button
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }

    // Add click event to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            changeLanguage(this.dataset.lang);
        });
    });


    const weddingDate = new Date('September 14, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0');
}

// Update every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Scroll animations
function checkVisibility() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
}

// Initial check
checkVisibility();

// Check on scroll
window.addEventListener('scroll', checkVisibility);

// Trigger animations for first section immediately
document.querySelector('.hero').classList.add('visible');
