import menueData from './js/menu.json';
import menueTpl from './templates/list-render.hbs';
console.log('menueTpl :>> ', menueTpl);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const KEY = 'theme';

const refs = {
  menu: document.querySelector('.js-menu'),
  switcher: document.getElementById('theme-switch-toggle')
}

refs.menu.insertAdjacentHTML('beforeend', menueTpl(menueData));
refs.switcher.addEventListener('change', changeThemeAndSetLocalSrorage);

function changeThemeAndSetLocalSrorage(e) {
  if (e.target.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK)
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT)
  }
  localStorage.setItem('theme', document.body.className)
}


const localStorageVerify = () => {
  if (!localStorage.getItem(KEY) || localStorage.getItem(KEY) === `${Theme.LIGHT}`) {
    document.body.classList.add(Theme.LIGHT);
    refs.switcher.checked = false;
  }
  else {
    document.body.classList.add(localStorage.getItem(KEY))  
    refs.switcher.checked = true;
  }
} 
localStorageVerify();