const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');
const snsButtons = document.querySelector('.sns-links');

const clickMenu = () => {
  menu.classList.toggle('active');
  snsButtons.classList.toggle('active');
};

toggleMenu.addEventListener('click', clickMenu);
