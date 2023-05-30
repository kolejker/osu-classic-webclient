function moveCircle() {
  var circle = document.getElementById("circle");
  var options = document.getElementById("main-menu");
  if (options.style.display === "none") {
    options.style.display = "block";
    setTimeout(function() {
      options.style.opacity = "1"; 
    }, 10);
    circle.classList.add("circle-shifted");
  } else {
    options.style.opacity = "0"; 
    setTimeout(function() {
      options.style.display = "none";
    }, 200); 
    circle.classList.remove("circle-shifted");
  }
}

  

  const playButton = document.getElementById("play");
  const playMenu = document.getElementById("play-menu");
  const backButton = document.getElementById("back");
  
  playButton.addEventListener("click", function() {
    document.getElementById("main-menu").style.display = "none";
    playMenu.style.display = "flex";
  });
  
  backButton.addEventListener("click", function() {
    playMenu.style.display = "none";
    document.getElementById("main-menu").style.display = "flex";
  });
  
  function goPlay() {
    setTimeout(function() {
      window.location.href = "play/index.html";
    }, 700);
  }
  

  function goOptions() {
    setTimeout(() => {
      window.location.href = "options/index.html";
    }, 700);
  }

  function goBack() {
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 700);
  }
const circle = document.getElementById('circle');
const tips = document.getElementById('tips');


circle.addEventListener('click', function() {

  tips.classList.add('fade-out');
});

document.addEventListener('mousemove', function(event) {
  var cursor = document.getElementById('cursor');
  cursor.style.left = event.clientX + 'px';
  cursor.style.top = event.clientY + 'px';
});