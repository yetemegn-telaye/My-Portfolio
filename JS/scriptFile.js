const hamburgerBtn = document.querySelector('#toggle-btn');
const toggleMenu = document.querySelector('#menu');
const menuList = document.querySelectorAll('.menuItem');
const closeBtn = document.querySelectorAll('.close');
const projectBtn = document.querySelectorAll('.project-detail');
const projectPopup = document.querySelector('#project');

hamburgerBtn.addEventListener('click', () => {
  toggleMenu.style.display = 'block';
});

closeBtn.forEach(close=>{
  
close.addEventListener('click', () => {
  toggleMenu.style.display = 'none';
  projectPopup.style.display='none'
})
});

menuList.forEach((item) => {
  item.addEventListener('click', () => {
    toggleMenu.style.display = 'none';
  });
});
projectBtn.forEach(project=>{
  project.addEventListener('click',()=>{
    projectPopup.style.display='block';
  });
})
