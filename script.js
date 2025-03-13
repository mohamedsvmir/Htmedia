function toggleMenu() {
    document.getElementById('sidebar').classList.toggle('open');
}

function toggleLanguage() {
    let elements = document.querySelectorAll('[data-en]');
    let langBtn = document.getElementById('lang-toggle');
    let currentLang = langBtn.innerText;

    if (currentLang === 'EN') {
        langBtn.innerText = 'AR';
        elements.forEach(el => el.innerText = el.getAttribute('data-ar'));
    } else {
        langBtn.innerText = 'EN';
        elements.forEach(el => el.innerText = el.getAttribute('data-en'));
    }
}