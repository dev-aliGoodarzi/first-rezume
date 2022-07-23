window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  let windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  let nowScroll = (offsetY / windowHeight) * 100;
  document.getElementById("top-nav-progress").style.width =
    Math.round(nowScroll) + "%";
  document.getElementById("top-nav-progress").style.textAlign = "right";
  document.getElementById("top-nav-progress").innerText =
    document.getElementById("top-nav-progress").style.width;
});
