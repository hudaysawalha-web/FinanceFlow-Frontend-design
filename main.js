const themetoggle = document.querySelector("#theme-toggle");
const html = document.documentElement;


function applyTheme(theme) {
    if (theme == 'green') {
        html.classList.add('green');
        document.getElementById('theme-icon').innerHTML = '<i class="fa-solid fa-brush text-2xl text-blue "></i>';
    } else {
        html.classList.remove('green');
        document.getElementById('theme-icon').innerHTML = '<i class="fa-solid fa-brush text-2xl text-blue "></i>';
    }
}

themetoggle.addEventListener('click', () => {
    const newTheme = html.classList.contains('green') ? 'blue' : 'green';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
})

const savedTheme = localStorage.getItem('theme') || 'blue';
applyTheme(savedTheme);

const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-mobile-menu-list]');

menuToggle.addEventListener('click', () => {

menu.classList.toggle('hidden');
    document.getElementById('menu-icon').innerHTML = menu.classList.contains('hidden')
        ? '<img src="/assets/images/menu.svg" alt="menu">'
        : '<img src="/assets/images/x menu.svg" alt="close">';

});


