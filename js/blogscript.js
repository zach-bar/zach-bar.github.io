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

 




blogs = [
    {
      title: "How To Make Your Own JavaScript Game",
      image: "./assets/gaming.png",
      date: "June 20, 2023",
      type: "Tutorials",
      post: "Nothing yet. Check back on 6/20!"
    }
  ]
  let blogContainer = document.getElementById('blogs-container');
  let blogColumn = document.getElementById('blogs-column');
  for (let i = blogs.length-1; i >= 0; i--){
    let blog = document.createElement('div');
    blog.classList.add('blog');
    blog.id = 'blog' + i;
    blogColumn.appendChild(blog);
    let click = document.createElement('div');
    click.addEventListener("click", function(){showBlog(i)});
    blog.appendChild(click);
    let blogImg = document.createElement('img');
    blogImg.src=blogs[i].image;
    click.appendChild(blogImg);
    let blogName = document.createElement('h2');
    blogName.innerHTML = blogs[i].title;
    click.appendChild(blogName);
    let blogDate = document.createElement('h3');
    blogDate.innerHTML=blogs[i].date;
    click.appendChild(blogDate);
    let blogType = document.createElement('button');
    blogType.innerHTML = blogs[i].type;
    blogType.addEventListener("click", function(){
      for (let i = 0; i < blogs.length; i++){
        let newBlog = document.getElementById('blog' + i);
        if (newBlog.lastChild != blogType)
          blogColumn.removeChild(newBlog);
      }
      window.scrollTo({top: 0});
      let header = document.getElementById('typed');
      header.innerHTML = blogType.innerHTML;
      header.style.fontStyle = "italic";
    });
    blog.appendChild(blogType);
  }



function showBlog(index){
  window.scrollTo({top: 0})
  blogColumn.style.display = 'none';
  let blogpost = document.createElement('div');
  blogpost.id = 'blogpost';
  blogContainer.appendChild(blogpost);
  let backButton = document.createElement('button');
  backButton.innerHTML = "<i class='fa-solid fa-backward'></i>Back";
  backButton.addEventListener("click", function(){changeBack()});
  blogpost.appendChild(backButton);
  let blogName = document.createElement('h1');
  blogName.innerHTML = blogs[index].title;
  blogpost.appendChild(blogName);
  let blogImg = document.createElement('img');
  blogImg.src=blogs[index].image;
  blogpost.appendChild(blogImg);
  let blogtext =document.createElement('p');
  blogtext.innerHTML = blogs[index].post;
  blogtext.align = 'center';

  blogpost.appendChild(blogtext);
  let blogDate = document.createElement('h3');
  blogDate.innerHTML=blogs[index].date;
  blogpost.appendChild(blogDate);
}

function changeBack(){
  blogpost.style.display = 'none';
  blogColumn.style.display = 'flex';
}

let gameBlog = document.getElementById("blog1");
gameBlog.onclick = function(){
  let blogGame = document.getElementById("blogGame");
  let context = blogGame.getContext("2d");
  context.beginPath();
  context.moveTo(0, 180)
  context.lineTo(600, 180);
  context.stroke();
  let dinoStill = new Image();
  dinoStill.src = "./assets/dino-still.png";
  dinoStill.onload = function(){
    context.beginPath();
    context.drawImage(dinoStill, 20, 135, 70, 80); 
  }
  let cactus1 = new Image();
  cactus1.src = "./assets/cactus1.png";
  cactus1.onload = function(){
    context.beginPath();
    context.drawImage(cactus1, 450, 135, 40, 60); 
  }
  let birdWingDown = new Image();
  birdWingDown.src = "./assets/bird-wingdown.png";
  birdWingDown.onload = function(){
    context.beginPath();
    context.drawImage(birdWingDown, 500, 45, 60, 60); 
  }
  let cloud = new Image();
  cloud.src = "./assets/cloud.png";
  cloud.onload = function(){
    context.beginPath();
    context.drawImage(cloud, 180, 30, 50, 30); 
  }
}

