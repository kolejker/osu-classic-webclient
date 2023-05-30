function fadeInLoader() {
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  setTimeout(() => { loader.style.height = "0"; }, 500);
}

function fadeOutLoader() {
  const loader = document.getElementById("loader");
  loader.style.height = "initial";
  setTimeout(() => { loader.style.opacity = 1; }, 100);
}

window.addEventListener("load", fadeInLoader);
