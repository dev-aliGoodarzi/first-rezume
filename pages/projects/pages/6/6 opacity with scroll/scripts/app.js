let headerImg = document.querySelector("#header-background-img");
window.addEventListener("scroll", () => {
  headerImg.style.opacity = 1 - window.scrollY / window.innerHeight;
});

console.log(1 - window.scrollY / window.innerHeight);
