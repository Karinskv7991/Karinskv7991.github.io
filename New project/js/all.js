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

			// слайдер для 2 секции

			$('.container').slick();
			// ниже, чтобы слайдер появлялся на экранах, разрешение которых ниже 768px
			$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('.container:not(.slick-initialized)').slick({
      centerMode: true,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $(".container.slick-initialized").slick("unslick");
  }
});
