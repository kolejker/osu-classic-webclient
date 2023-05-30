function fadeInLoader() {
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  setTimeout(() => { loader.style.height = "0"; }, 250);
}

window.addEventListener("load", fadeInLoader);

