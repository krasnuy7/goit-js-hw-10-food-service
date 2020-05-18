import data from './menu.json';
import cardShow from './templates/card.hbs';

const markup = cardShow(data);
document.querySelector('.js-menu').innerHTML = markup;
let checkbox = document.querySelector('input.js-switch-input');

let body = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function changeMainPage() {
  if (checkbox.checked === true) {
    localStorage.setItem('checkbox', Theme.DARK);
    body.classList.add('dark-theme');
  } else {
    localStorage.removeItem('checkbox');
    body.classList.remove('dark-theme');
  }
}
if (localStorage.getItem('checkbox') === Theme.DARK) {
  body.classList.add('dark-theme');
  checkbox.checked = true;
}

checkbox.addEventListener('click', changeMainPage);
