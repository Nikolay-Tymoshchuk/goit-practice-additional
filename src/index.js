import menuData from './js/menu.json'
import menueTpl from './templates/list-render.hbs'

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const test = document.querySelector('#theme-switch-toggle');
console.log('object :>> ', test);

test.addEventListener('change', onChange);
function onChange(e) {
	
}