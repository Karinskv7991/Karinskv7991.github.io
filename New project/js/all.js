			let burger = document.getElementById("burger");
      let nav = document.getElementById("nav");
      let navLink = document.getElementsByClassName("nav__link");
      console.log(navLink);

      burger.addEventListener("click", menu);
      function menu() {
        nav.classList.toggle("nav_hidden");
        burger.classList.toggle("close");
      }

      for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener("click", menuClose);
      }
      function menuClose() {
        nav.classList.add("nav_hidden");
				burger.classList.remove("close");
      }
