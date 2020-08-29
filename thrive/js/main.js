// бургер

let burger = document.getElementById("burger");
let nav = document.getElementById("nav");
let navLink = document.getElementsByClassName("nav__link");
console.log(navLink);

burger.addEventListener("click", menu);
function menu() {
	nav.classList.toggle("nav_active");
	burger.classList.toggle("close");
}

for (let i = 0; i < navLink.length; i++) {
	navLink[i].addEventListener("click", menuClose);
}
function menuClose() {
	nav.classList.remove("nav_active");
	burger.classList.remove("close");
}

//анимация при скролле
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();
