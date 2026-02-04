const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', function (e) {
    e.preventDefault();
    sideMenu.classList.toggle('open');
});

closeMenu.addEventListener('click', function (e) {
    e.preventDefault();
    sideMenu.classList.remove('open');
});

