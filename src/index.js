import menuData from './js/menu.json';
import menueTpl from './templates/list-render.hbs';


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menu: document.querySelector('.js-menu'),
  switcher: document.getElementById('theme-switch-toggle')
}

refs.switcher.addEventListener('change', changeTheme);
function changeTheme(e) {
  e.target.checked ? document.body.classList.add(Theme.DARK) : document.body.classList.remove(Theme.DARK)
}

refs.menu.insertAdjacentHTML('beforeend', menueTpl(menuData));