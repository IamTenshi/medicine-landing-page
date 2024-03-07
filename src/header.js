const hamburguerMenu = document.getElementById('hamburguer-menu');
const Menu = document.getElementById('menu');

hamburguerMenu.addEventListener('click', () => {
  Menu.classList.toggle('hidden');
});