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
    