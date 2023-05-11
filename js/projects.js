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

  //future projects: Gitlet: Java; Trading Software: C++
let projects = [
    {
      name:"Pixel Paintboard",
      description:"A paintboard app where you can easily create your very own pixel art and upload it is a PNG to your local device.",
      image: "./assets/pixel.png",
      language: "React, SCSS",
    },
    {
      name:"Music Artist Recommender",
      description:"Program that takes datasets from Last.FM (https://grouplens.org/datasets/hetrec-2011/) and implements collaborative filtering, a machine learning tool, utlizing the Implicit library to recommend new artists to users listed in the dataset.",
      image: "./assets/music.png",
      language: "Python",
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


const project = document.createElement('div');
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
let t;

function changeProject(pressed){
    let pos = document.getElementById('project-container').offsetWidth;
    clearInterval(t);
    if(pressed == 'left'){
      project.style.animationName = "left";
      if(currentProjIndex != 0)
        currentProjIndex--;
      else
        currentProjIndex = projects.length -1;
    }
    else
    {
      project.style.animationName = "right";
      if(currentProjIndex != projects.length-1)
        currentProjIndex++;  
      else
        currentProjIndex = 0;    
    }
    
    name.innerHTML = projects[currentProjIndex].name;
    img.src = projects[currentProjIndex].image;
    desc.innerHTML = projects[currentProjIndex].description;
    lang.innerHTML = projects[currentProjIndex].language;
    setTimeout(() => {  project.style.animationName = "none"; }, 1000);
  }