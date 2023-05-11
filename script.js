function moveCircle() {
    var circle = document.getElementById("circle");
    var options = document.getElementById("options");
    if (options.style.display === "none") {
      options.style.display = "block";
      circle.classList.add("circle-shifted");
    } else {
      options.style.display = "none";
      circle.classList.remove("circle-shifted");
    }
  }
  