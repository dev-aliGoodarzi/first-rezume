// variables
let settingsBtn = document.querySelector("#my-btn");
let rotate = 0;
let LeftContainor = document.querySelector(".left");
let mainContainor = document.querySelector("#main2");
let hamburgerMenu = document.querySelector("#hamburger-menu");
let rightSidebarContainor = document.querySelector("#main3 .content");
let complatedProjects = 0
let happyCustomers = 0
let hoursInDay = 0
let yearOfWork = 0
//az clean code vas in estefade shod choon mikham br ro pak konm

// Intervals
setInterval(() => {
  settingsBtn.style.transform = `rotate(${rotate}deg)`;
  rotate += 150;
  if (rotate > 150) {
    rotate = 0;
  } else {
    return;
  }
}, 200);
//
// intervals
// events
settingsBtn.addEventListener("click", () => {
  LeftContainor.classList.toggle("hide");
  mainContainor.classList.toggle("full");
});
//
hamburgerMenu.addEventListener("click", () => {
  rightSidebarContainor.classList.toggle("side-bar-hiding");
});
//

//intervals
(window.scrollY > 300) || (window.innerWidth > "966" && window.scrollY === 0) ? window.addEventListener("DOMContentLoaded", (e) => {
  const yearsInworkInterval = setInterval(() => {
    document.getElementById("years-of-work-mark").innerHTML = `+ 0.${yearOfWork}`
    if (yearOfWork === 8) {
      return clearInterval(this)
    }
    else {
      yearOfWork++
    }
    //
  }, 300)
  //

  const complatedProjectsInterval = setInterval(() => {
    document.getElementById("complated-projects-mark").innerHTML = `+ ${complatedProjects}`
    if (complatedProjects === 20) {
      return clearInterval(this)
    }
    else {
      complatedProjects++
    }
    //
  }, 100)
  //
  const hoursPerDayInterval = setInterval(() => {
    document.getElementById("hours-work-in-day-mark").innerHTML = `+ ${hoursInDay}hr`
    if (hoursInDay === 4) {
      return clearInterval(this)
    }
    else {
      hoursInDay++
    }
    //
  }, 200)
  //
  const happyCustomersInterval = setInterval(() => {
    document.getElementById("happy-customers-mark").innerHTML = `+ ${happyCustomers}`
    if (happyCustomers === 7) {
      return clearInterval(this)
    }
    else {
      happyCustomers++
    }
    //
  }, 500)
})
  : null
//
//intervals
// document controling
document.querySelectorAll(".order-btn").forEach(item => {
  item.addEventListener("click", () => {
    window.open("https://a-goodarzi.ir");
  })
})
