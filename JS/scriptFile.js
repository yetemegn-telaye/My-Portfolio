const hamburgerBtn = document.querySelector('#toggle-btn');
const toggleMenu = document.querySelector('#menu');
const menuList = document.querySelectorAll('.menuItem');
const workContainer = document.querySelector('.work-card-container');

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', () => {
      toggleMenu.style.display = 'none';
   });

const projectDetails = [
  {
    projTitle: 'Data Dashboard Healthcare',
    projDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry',
    projImage: "url('images/works-images/card-item2-img.svg')",
    projTechnologies: [
      'Html',
      'Bootstrap',
      'Ruby',
    ],
    projLink: 'http://localhost:5501/',
    projSource: 'https://github.com/yetemegn-telaye/My-Portfolio',
  },
  {
    projTitle: 'Website Protfolio',
    projDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry',
    projImage: "url('images/works-images/card-item3-img.svg')",
    projTechnologies: [
      'Html',
      'Bootstrap',
      'Ruby',
    ],
    projLink: 'http://localhost:5501/',
    projSource: 'https://github.com/yetemegn-telaye/My-Portfolio',
  },

  {
    projTitle: 'Profesional Art Printing Data More',
    projDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry',
    projImage: "url('images/works-images/card-item4-img.svg')",
    projTechnologies: [
      'Html',
      'Bootstrap',
      'Ruby',
    ],
    projLink: 'http://localhost:5501/',
    projSource: 'https://github.com/yetemegn-telaye/My-Portfolio',
  },

  {
    projTitle: 'Data Dashboard Healthcare',
    projDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry',
    projImage: "url('images/works-images/card-item2-img.svg')",
    projTechnologies: [
      'Html',
      'Bootstrap',
      'Ruby',
    ],
    projLink: 'http://localhost:5501/',
    projSource: 'https://github.com/yetemegn-telaye/My-Portfolio',
  },

  {
    projTitle: 'Website Protfolio',
    projDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry',
    projImage: "url('images/works-images/card-item3-img.svg')",
    projTechnologies: [
      'Html',
      'Bootstrap',
      'Ruby',
    ],
    projLink: 'http://localhost:5501/',
    projSource: 'https://github.com/yetemegn-telaye/My-Portfolio',
  },
];

let workCard = '';

hamburgerBtn.addEventListener('click', () => {
  toggleMenu.style.display = 'block';
});

menuList.forEach((item) => {
  item.addEventListener('click', () => {
    toggleMenu.style.display = 'none';
  });
});

// Dynamically creating work cards for the work container
function displayWorkCard(data) {
  data.forEach((project)=>{
    workCard += `
    <div class="work-card-item" style="background-image: ${project.projImage}">
      <h3>${project.projTitle}</h3>
      <p>${project.projDescription}</p>
      <button class="common-btn">See Project</button>
    </div>

    `;
    workContainer.innerHTML= workCard;
   
  })
}
displayWorkCard(projectDetails);


// Email validation
const form = document.querySelector('#contactForm');
const errorMsg = document.querySelector('#error-msg');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = form.elements.email;
  const lowerEmailInput = emailInput.value.toLowerCase();

  if (emailInput.value === lowerEmailInput) {
    form.submit();
  } else {
    errorMsg.innerHTML = '<p>Please enter only in lower case format</p>';
    errorMsg.style.display = 'block';
  }
});

// Preserve form data
const contactInputs = document.querySelectorAll('.contactInput');
const storeContact = {};

for (let i = 0; i < contactInputs.length; i += 1) {
  contactInputs[i].addEventListener('change', (event) => {
    storeContact[contactInputs[i].name] = event.target.value;
    localStorage.setItem('contactData', JSON.stringify(storeContact));
  });
}

const preservedContact = JSON.parse(localStorage.getItem('contactData'));

contactInputs.forEach((inpt) => {
  if (inpt.name === 'name') {
    inpt.value = preservedContact.name;
  } else if (inpt.name === 'email') {
    inpt.value = preservedContact.email;
  } else if (inpt.name === 'message') {
    inpt.value = preservedContact.message;
  }
});