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

let about_pics = [
  "./assets/img1.jpg",
  "./assets/img2.jpg",
  "./assets/img3.jpg",
  "./assets/img4.jpg",
  "./assets/img5.jpg",
  "./assets/img6.JPG",
  "./assets/img7.jpg",
  "./assets/img8.JPG",
  "./assets/img9.jpg",
]
let about = document.getElementById("self-description");
let pic = document.createElement('img');
pic.id = "self-desc-pic";
pic.src = about_pics[0];
about.appendChild(pic);
var counter = 1;
var timer;
pic.onmouseover= stopShow();
pic.onmouseout= runShow();               
function changeImage(){
  pic.style.animationName = "blink";
  pic.src = about_pics[counter];
  counter++;
  if (counter == about_pics.length){
      counter=0;
  }
  setTimeout(() => {  pic.style.animationName = "none"; }, 1000);
  timer = setTimeout("changeImage()", 2500);
}
function stopShow(){
    clearTimeout(timer);
}
function runShow(){
    changeImage();
}
                    


//future projects: Pixel Canvas: TypeScript, ReactJS ; Gitlet: Java; Trading Software: C++
let projects = [
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

let certificates = [
  {
    name: "JavaScript",
    img: "./assets/sololearn.avif",
    desc: "Course Certificate",
    date: "October 2022",
    ref: "./assets/jscert.png",
  },
  {
    name: "HTML",
    img: "./assets/sololearn.avif",
    desc: "Course Certificate",
    date: "October 2022",
    ref: "./assets/htmlcert.png",
  },
  {
    name: "SQL",
    img: "./assets/sololearn.avif",
    desc: "Course Certificate",
    date: "October 2022",
    ref: "./assets/sqlcert.png",
  },
  {
    name: "CSS",
    img: "./assets/sololearn.avif",
    desc: "Course Certificate",
    date: "March 2023",
    ref: "./assets/csscert.png",
  },
  {
    name: "JavaScript Intermediate",
    img: "./assets/sololearn.avif",
    desc: "Course Certificate",
    date: "March 2023",
    ref: './assets/jsintermediatecert.png',
  },
]

let certColumn = document.getElementById('cert-container');


let cert = document.createElement('div');
cert.classList.add('cert-slide');
cert.id = 'certificate';
certColumn.appendChild(cert);
let front = document.createElement('div');
front.classList.add('front');
cert.appendChild(front);
let back = document.createElement('div');
back.classList.add('back');
cert.appendChild(back);
let frontImg = document.createElement('img');
frontImg.id = 'frontImg';
frontImg.src=certificates[0].img;
front.appendChild(frontImg);
let certName = document.createElement('h2');
certName.innerHTML = certificates[0].name;
front.appendChild(certName);
let certDesc = document.createElement('p');
certDesc.innerHTML=certificates[0].desc;
front.appendChild(certDesc);
let date = document.createElement('h3');
date.innerHTML=certificates[0].date;
front.appendChild(date);
let backImg = document.createElement('img');
backImg.id = 'backImg';
backImg.src = certificates[0].ref;
back.appendChild(backImg);


function changeCert(index){
  cert.style.animationName = "certAnimate";
  // cert.onclick = `location.href=${certificates[index].ref}`;
  frontImg.src = certificates[index].img;
  certName.innerHTML = certificates[index].name;
  certDesc.innerHTML = certificates[index].desc;
  date.innerHTML = certificates[index].date;
  backImg.src = certificates[index].ref;
  setTimeout(() => {  cert.style.animationName = "none"; }, 1000);
}



