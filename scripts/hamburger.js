//hamburger menu
const menuButton = document.querySelector('#menu');
const navLinks = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    menuButton.classList.toggle('open');
});