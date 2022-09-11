// Navbar fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedTop = header.offsetTop;

  if(window.scrollY > fixedTop) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
}
// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});