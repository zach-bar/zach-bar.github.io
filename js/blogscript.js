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
      date: "March 30, 2023",
      type: "Tech Thoughts",
      post: "With the advent of Artificial Intelligence officially under way, showing itself to the general public through chatbots now developed by Microsoft, Google, and Apple, it is important to acknowledge the forefather of this new awakening. ChatGPT, a language model created by OpenAI to understand and generate natural language. A computer program that is designed to simulate human conversation and provide helpful responses to a wide range of queries and topics, ChatGPT is capable of processing large amounts of data, analyzing complex patterns, and generating accurate and relevant responses in real-time. Its abilities include understanding various languages, conducting research, providing recommendations, and performing various tasks like scheduling appointments, setting reminders, and answering general knowledge questions. It can even generate a description of itself, which I surely did NOT do. <br> <img src='./assets/chatgptss.png' width:70% height: 50%> <br> As you can see, I totally lied. The description it gave me, I copied word for word, only leaving out a few unnecessary adages and making some structural changes. With this in mind, I think it'll be pretty easy to detect that its AI-written, right? <br> <img src='./assets/gptzeross.png' width:70% height: 70%> <br> <h2>Wrong!</h2> <br> And this is totally understandable. At the end of the day, all Machine Learning comes down to is a set of algorithms that can learn from data, identify patterns, and make predictions or decisions based on those patterns. With systems built on this, it is very difficult to predict truly what is and what isn't artificially crafted. Even though this is all true, as my above experiment has proven (which I also got on my first attempt), academic instructors across the globe have taken it into their own hands to hold their students accountable over the misleading and uninformed results of a website with lack of verifiable credit. Not only has this epidemic undermined the integrity of students, but it has also allowed professors to become more hyper-vigilant and presumptuous in addressing plagiarism.",
    },
    {
      title: "How To Make Your Own JavaScript Game",
      image: "./assets/gaming.png",
      date: "April 10, 2023",
      type: "Tutorials",
      post: "Nothing here yet!",
    }
  ]
  let blogContainer = document.getElementById('blogs-container');
  let blogColumn = document.getElementById('blogs-column');
  for (let i = blogs.length-1; i >= 0; i--){
    let blog = document.createElement('div');
    blog.onclick = function(){showBlog(i)};
    blog.classList.add('blog');
    blog.id = 'blog' + i;
    blogColumn.appendChild(blog);
    let blogImg = document.createElement('img');
    blogImg.src=blogs[i].image;
    blog.appendChild(blogImg);
    let blogName = document.createElement('h2');
    blogName.innerHTML = blogs[i].title;
    blog.appendChild(blogName);
    let blogDate = document.createElement('h3');
    blogDate.innerHTML=blogs[i].date;
    blog.appendChild(blogDate);
  }



function showBlog(index){
  blogColumn.style.display = 'none';
  let blogpost = document.createElement('div');
  blogpost.id = 'blogpost';
  blogContainer.appendChild(blogpost);
  let backButton = document.createElement('button');
  backButton.innerHTML = "<i class='fa-solid fa-backward'></i>Back";
  backButton.onclick = function(){ changeBack()};
  blogpost.appendChild(backButton);
  let blogName = document.createElement('h1');
  blogName.innerHTML = blogs[index].title;
  blogpost.appendChild(blogName);
  let blogImg = document.createElement('img');
  blogImg.src=blogs[index].image;
  blogpost.appendChild(blogImg);
  let blogtext =document.createElement('p');
  blogtext.innerHTML = blogs[index].post;
  blogpost.appendChild(blogtext);
  let blogDate = document.createElement('h3');
  blogDate.innerHTML=blogs[index].date;
  blogpost.appendChild(blogDate);
}

function changeBack(){
  blogpost.style.display = 'none';
  blogColumn.style.display = 'flex';
}

// let navbar = document.getElementById('navbar');

