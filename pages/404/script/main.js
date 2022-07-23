let secondBackground = document.querySelector(".background-two");

window.onmousemove = function backgroundMove(e) {
  let x = e.clientX;
  let y = e.clientY;
  return (
    (secondBackground.style.backgroundPositionX= `${x/5}px`),
    (secondBackground.style.backgroundPositionY =`${y/5}px`)
  );
};
