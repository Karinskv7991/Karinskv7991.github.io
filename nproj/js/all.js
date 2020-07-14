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

			$('.slider').slick({
				arrows: true,
				prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
				nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
				dots: true,
				slidesToShow: 1,
				responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
						dots: true,
		      }
		    }
				{
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
						dots: true,
						arrows: false,
		      }
		    }
		  ]
			});
