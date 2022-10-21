const headerMenu = document.querySelector('.header__menu');
const headerBars = document.querySelector('.header__bars');

headerBars.addEventListener('click', function (e) {
  headerMenu.classList.add('is-active');
});

document.addEventListener('click', function (e) {
  if (!headerMenu.contains(e.target) && !e.target.matches('.header__bars')) {
    headerMenu.classList.remove('is-active');
  }
});
