

	let burger = document.getElementById('burger');
	let menu = document.getElementById("nav-list");
	let backdrop = document.getElementsByClassName("backdrop");
	burger.addEventListener("click", function(){
	  menu.classList.toggle("menu-active");
		backdrop[0].classList.toggle("backdrop-active");
})
