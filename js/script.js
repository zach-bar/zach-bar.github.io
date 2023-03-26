function show(shown, hidden) {
  document.getElementById(shown).style.display='block';
  document.getElementById(hidden).style.display='none';
  return false;
}
function toggleMenu(x) {
    x.classList.toggle("change");
  }

  function changeText(text, b)
  {
    if (b)
      var display = document.getElementById('lang-display');
    if (!b)
      var display = document.getElementById('tool-display');
    display.innerHTML = "";
    display.innerHTML = text;
  }

const nav = document.querySelector("#navbar");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
    if (lastScrollY > window.scrollY){
        nav.classList.remove("nav--hidden");
    }
    else if (window.scrollY > 500){
        nav.classList.add("nav--hidden");
    }
    else {
        nav.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
});

var typed = new Typed("#mml", {
  strings: ["Web", "iOS", "Game", "Software"],
  typeSpeed: 150,
  backSpeed: 150,
  fadeOutDelay: 1000,
  startDelay: 1000,
  loop: true,
  fadeOut: true,
  showCursor: false
  })

let projects = [
    {
      name:"Discrete Structures",
      description:"Program that takes two propositional inputs, with a boolean value for both. The program then outputs a list of statements with propositions and connectives. Once user chooses statement from list, boolean values of each proposition is placed in the necessary function, and the truth value of said statement is output to user.",
      image: "./assets/discretestructures.png",
      language: "C++",
    },
   {
      name:"Advanced Tic-Tac-Toe",
      description:"A multiplayer tic-tac-toe game that works with multiple players by adding 1 to the grid size for every additional player (i.e. 4 players means 5 columns/rows). Players can choose the value to input into the grid.",
      image: "./assets/tictactoe.png",
      language: "Java",
    },
   {
      name:"Inquiry for Counselor",
      description:"Program that sifts through a file of counselor emails and names that asks a user to input a question to ask a counselor, and to choose the counselor by name. The question will then be sent to the counselor by the email address of the user, or the question will be answered if a response is found within the questions/answers file.",
      image: "./assets/question.png",
      language: "C++",
    },
   {
      name:"Photo Encryption",
      description:"Program encrypts a key into a photo within the same folder as the program file, and prints key out when it is asked for.",
      image: "./assets/encrypt.png",
      language: "Python",
    },
   {
      name:"My Website",
      description:"What you're witnessing right now is my official portfolio website, where I combine HTML, CSS, and Javascript to build a fun experience for anyone who stumbled upon it, using my knowledge of UX design. I also used Javscript Object Notation (JSON) to build the project page, which you're looking at right now!",
      image: "./assets/website.png",
      language: "HTML, CSS, Javascript",
    }
];

let projectColumn = document.getElementById('project-container');


let project = document.createElement('div');
project.classList.add('slide');
project.id = 'project';
projectColumn.appendChild(project);
let name = document.createElement('h2');
name.innerHTML = projects[0].name;
project.appendChild(name);
let img = document.createElement('img');
img.src=projects[0].image;
project.appendChild(img);
let desc = document.createElement('p');
desc.innerHTML=projects[0].description;
project.appendChild(desc);
let lang = document.createElement('h3');
lang.innerHTML=projects[0].language;
project.appendChild(lang);


let currentProjIndex = 0;
let i = 0;
function changeProject(pressed){
    if(pressed == 'left'){
      if(currentProjIndex != 0)
        currentProjIndex--;
      else
        currentProjIndex = projects.length -1;
    }
    else
    {
      //user pushed right arrow
      if(currentProjIndex != projects.length-1)
        currentProjIndex++;  
      else
        currentProjIndex = 0;    
    }
    name.innerHTML = projects[currentProjIndex].name;
    img.src = projects[currentProjIndex].image;
    desc.innerHTML = projects[currentProjIndex].description;
    lang.innerHTML = projects[currentProjIndex].language;
  }

let certificates = [
  {
    name: "JavaScript",
    img: "./assets/sololearn.avif",
    desc: "Course Certificate",
    date: "October 2022",
  },
  {
    name: "HTML",
    img: "./assets/sololearn.avif",
    desc: "Course Certificate",
    date: "October 2022",
  },
  {
    name: "SQL",
    img: "./assets/sololearn.avif",
    desc: "Course Certificate",
    date: "October 2022",
  },
  {
    name: "CSS",
    img: "./assets/sololearn.avif",
    desc: "Course Certificate",
    date: "March 2023",
  },
  {
    name: "Swift",
    img: "./assets/sololearn.avif",
    desc: "Course Certificate",
    date: "March 2023",
  },
]

let certColumn = document.getElementById('cert-container');


let cert = document.createElement('div');
cert.id = 'certificate';
certColumn.appendChild(cert);
let certImg = document.createElement('img');
certImg.src=certificates[0].img;
cert.appendChild(certImg);
let certName = document.createElement('h2');
certName.innerHTML = certificates[0].name;
cert.appendChild(certName);
let certDesc = document.createElement('p');
certDesc.innerHTML=certificates[0].desc;
cert.appendChild(certDesc);
let date = document.createElement('h3');
date.innerHTML=certificates[0].date;
cert.appendChild(date);

function changeCert(index){
  certImg.src = certificates[index].img;
  certName.innerHTML = certificates[index].name;
  certDesc.innerHTML = certificates[index].desc;
  date.innerHTML = certificates[index].date;
}



