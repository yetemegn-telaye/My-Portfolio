const hamburgerBtn = document.querySelector('#toggle-btn');
const toggleMenu = document.querySelector('#menu');
const menuList = document.querySelectorAll('.menuItem');
const closeBtn = document.querySelectorAll('.close');
const projectPopup = document.querySelector('#project');
const workContainer = document.querySelector('.work-card-container');

const projectDetails = [
  {
    projTitle: 'Multi-Post Stories',
    projDescription: ' A daily selection of privately personalized reads; no accountsor sign-ups required. has been the industrys standard dummytext ever since the 1500s, when an unknown printer took astandard dummy text.',
    projImage: "",
    projImageMobile: "url('images/works-images/card-item3-img.svg')",
    projTechnologies: [
      'Css',
      'html',
      'bootstrap',
      'Ruby'
  ],
    projLink: 'http://localhost:5501/',
    projSource: 'https://github.com/yetemegn-telaye/My-Portfolio'
   },
 {
  projTitle: 'Data Dashboard',
  projDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry',
  projImage: "url('images/works-images/active-card.svg')",
  projImageMobile: "url('images/works-images/card-item3-img.svg')",
  projTechnologies: [
    'html',
    'bootstrap',
    'Ruby'
],
  projLink: 'http://localhost:5501/',
  projSource: 'https://github.com/yetemegn-telaye/My-Portfolio'
 },

 {
  projTitle: 'Data Dashboard Healthcare',
  projDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry',
  projImage: "url('images/works-images/card-item2-img.svg')",
  projTechnologies: [
    'Html',
    'Bootstrap',
    'Ruby'
],
  projLink: 'http://localhost:5501/',
  projSource: 'https://github.com/yetemegn-telaye/My-Portfolio'
 },
 {
  projTitle: 'Website Protfolio',
  projDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry',
  projImage: "url('images/works-images/card-item3-img.svg')",
  projTechnologies: [
    'Html',
    'Bootstrap',
    'Ruby'
],
  projLink: 'http://localhost:5501/',
  projSource: 'https://github.com/yetemegn-telaye/My-Portfolio'
 },

 {
  projTitle: 'Profesional Art Printing Data More',
  projDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry',
  projImage: "url('images/works-images/card-item4-img.svg')",
  projTechnologies: [
    'Html',
    'Bootstrap',
    'Ruby'
],
  projLink: 'http://localhost:5501/',
  projSource: 'https://github.com/yetemegn-telaye/My-Portfolio'
 },

 {
  projTitle: 'Data Dashboard Healthcare',
  projDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry',
  projImage: "url('images/works-images/card-item2-img.svg')",
  projTechnologies: [
    'Html',
    'Bootstrap',
    'Ruby'
],
  projLink: 'http://localhost:5501/',
  projSource: 'https://github.com/yetemegn-telaye/My-Portfolio'
 },

 {
  projTitle: 'Website Protfolio',
  projDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry',
  projImage: "url('images/works-images/card-item3-img.svg')",
  projTechnologies: [
    'Html',
    'Bootstrap',
    'Ruby'
],
  projLink: 'http://localhost:5501/',
  projSource: 'https://github.com/yetemegn-telaye/My-Portfolio'
 }
];


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


projectDetails.forEach((project,index)=>{
  let divWorkCard = document.createElement('div');
  let divFirstCard = document.createElement('div');
  let divFirstCardDesc=document.createElement('div');
  let divFirstCardImg= document.createElement('div');
  let x= window.matchMedia("(min-width: 768px)");
 

  let ul = document.createElement('ul');
  ul.className='card-tags';
  let h3 = document.createElement('h3');
  let p= document.createElement('p');
  let button = document.createElement('button');
  let list = button.classList;

  divFirstCardImg.id='first-card-img';
  divFirstCardDesc.className='first-card-desc';
  
  h3.textContent=project.projTitle;
  p.textContent=project.projDescription;
  
  button.textContent="See Project";

  

  if(index==0){
    divFirstCard.className='first-card';
    list.add('common-btn');
    workContainer.appendChild(divFirstCard);
    divFirstCard.appendChild(divFirstCardImg);
    divFirstCard.appendChild(divFirstCardDesc);
    divFirstCardDesc.appendChild(h3);
    divFirstCardDesc.appendChild(p);

    project.projTechnologies.forEach(techItem => {
      let li= document.createElement('li');
      li.textContent=techItem;
      ul.appendChild(li);
    });
    divFirstCardDesc.appendChild(ul);
    divFirstCardDesc.appendChild(button);
  }
  else if(index==1){
    if(x.matches){
     divWorkCard.id='active-card';
     divWorkCard.style.backgroundImage=project.projImage;
     workContainer.appendChild(divWorkCard);
     list.add('project-btn');
     divWorkCard.appendChild(button);
    }
    else{
      divWorkCard.className='work-card-item';
      divWorkCard.style.backgroundImage=project.projImageMobile;
      workContainer.appendChild(divWorkCard);
      divWorkCard.appendChild(h3);
      divWorkCard.appendChild(p);
      divWorkCard.appendChild(ul);
      list.add('project-btn');
      divWorkCard.appendChild(button);
    }  
  }
  else{
    divWorkCard.className='work-card-item'; 
    divWorkCard.style.backgroundImage= project.projImage;

    project.projTechnologies.forEach(techItem => {
      let li= document.createElement('li');
      li.textContent=techItem;
      ul.appendChild(li);
    });
  
    workContainer.appendChild(divWorkCard);
    
    divWorkCard.appendChild(h3);
    divWorkCard.appendChild(p);
    divWorkCard.appendChild(ul);
    list.add('project-btn');
    divWorkCard.appendChild(button);

  }
   
  
});

const projectBtn = document.querySelectorAll('.project-btn');

projectBtn.forEach(project=>{
  project.addEventListener('click',()=>{
    projectPopup.style.display='block';
  })
});



