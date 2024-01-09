function myFunction() {
    var dropdown = document.getElementById("myDropdown");
    var links = dropdown.getElementsByTagName("a");
    var delay = 10; // Delay in milliseconds for the first link to appear
  
    // Apply fading animation to each link with a delay
  for (var i = 0; i < links.length; i++) {
    links[i].style.opacity = 0;
    links[i].style.transition = "opacity 0.2s"; // Specify the transition property and duration
    setTimeout((function(link) {
      return function() {
        link.style.opacity = 1;
      };
    })(links[i]), delay);
    delay += 20; // Increase the delay for each subsequent link
  }
  
  
    // Toggle the dropdown visibility
    dropdown.classList.toggle("show");
  }
  