// variables
let colorPaletContainor = document.querySelector(".color-palet");
let body = document.querySelector("body");
let bodyBackgroundColor = body.style.backgroundColor;
let colorPaletContainorChidren = colorPaletContainor.children;
// Events
[...colorPaletContainorChidren].forEach((item) => {
  item.addEventListener(
    "click",
    () => {
      colorPaletBackgroundChanger(...args);
    },
    { once: true }
  );
});

// functions
function colorPaletBackgroundChanger(color) {
  let lastBodyBackgroundColor = body.style.backgroundColor;

  return (
    (body.style.backgroundColor = color),
    (colorPaletContainor.style.backgroundColor = lastBodyBackgroundColor)
  );
}
