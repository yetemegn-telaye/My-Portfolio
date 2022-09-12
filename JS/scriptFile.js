const hamburgerBtn = document.querySelector('#toggle-btn');
const toggleMenu = document.querySelector('#menu');
const menuList = document.querySelectorAll('.menuItem');
const closeBtn = document.querySelector('.close');

hamburgerBtn.addEventListener('click', () => {
  toggleMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  toggleMenu.style.display = 'none';
});

menuList.forEach((item) => {
  item.addEventListener('click', () => {
    toggleMenu.style.display = 'none';
  });
});
