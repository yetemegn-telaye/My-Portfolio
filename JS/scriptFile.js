const hamburgerBtn = document.querySelector('#toggle-btn');
let toggleMenu = document.querySelector('#menu');
hamburgerBtn.addEventListener('click', function (){
    toggleMenu.style.display = "block";
});

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click',function(){
    toggleMenu.style.display = "none";
})
