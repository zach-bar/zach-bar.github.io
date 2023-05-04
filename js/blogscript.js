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
      title: "ChatGPT, <br> The Revolutionary Scapegoat",
      image: "./assets/chatgpt.webp",
      date: "March 25, 2023",
      type: "Tech Thoughts",
      post: "<span class='indent'>With the advent of Artificial Intelligence officially under way, showing itself to the general public through chatbots now developed by Microsoft, Google, and Apple, it is important to acknowledge the forefather of this new awakening: ChatGPT, a language model created by OpenAI to understand and generate natural language. A computer program that is designed to simulate human conversation and provide helpful responses to a wide range of queries and topics, ChatGPT is capable of processing large amounts of data, analyzing complex patterns, and generating accurate and relevant responses in real-time. Its abilities include understanding various languages, conducting research, providing recommendations, and performing various tasks like scheduling appointments, setting reminders, and answering general knowledge questions. It can even generate a description of itself, which I surely did NOT copy into this post.</span> <br> <img src='./assets/chatgptss.png' width:70% height: 50%> <br> <span class='indent'>As you can see, I totally lied. The description it gave me, I copied word for word, only leaving out a few unnecessary adages and making some structural changes. With this in mind, I think it'll be pretty easy to detect that its AI-written, right?</span> <br> <img src='./assets/gptzeross.png' width:70% height: 70%> <br> <h2>Wrong!</h2> <br> <span  class='indent'>And this is totally understandable. At the end of the day, all Machine Learning comes down to is a set of algorithms that can learn from data, identify patterns, and make predictions or decisions based on those patterns. With systems built on this, it is very difficult to predict truly what is and what isn't artificially crafted. Even though this is all true, as my above experiment has proven (which I got on my first attempt), academic instructors across the globe have taken it into their own hands to hold their students accountable over the misleading and uninformed results of a website with lack of verifiable credit. Not only has this epidemic undermined the integrity of students, but it has also allowed professors to become more hyper-vigilant and presumptuous in addressing plagiarism. </span> <br> <span class='indent'>This series of unfortunate events has characterized the scholars of our generation. The spoiling of the youth by the enrichment of technology and the growth of online resources has plagued the minds of previous generations. Alumni envy students now more than ever, but the truth is that it has actually left us paranoid, distraught, and cutthroat, fretful both of having our careers dismantled by AI and meeting growing expectations every new year. The students being accused are regularly high achievers assumed to not be capable of their achievements, resulting with those who try the hardest suffering the most.</span> <br> <span  class='indent'>The truth of the matter is, technology is growing, and we can either grow with it or let it keep us from growing. With everything being so new, it'd be unlikely for anyone, even an expert in AI, to be able to tell the difference. It is up to us to decide whether we'd like to hold onto our integrity or use the resources bestowed upon us, but either way, we're screwed. </span> <br> <i> Zach Bar </i> ",
    },
    {
      title: "How To Make Your Own JavaScript Game",
      image: "./assets/gaming.png",
      date: "May 20, 2023",
      type: "Tutorials",
      post: "Nothing yet. Check back on 5/20!"
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

