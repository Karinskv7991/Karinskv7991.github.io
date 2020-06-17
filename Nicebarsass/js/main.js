$(function() {

	// слайдеры

	$('.sliders .slider').bxSlider({
		speed: 1000,
	});

});

// кнопка наверх

	jQuery(document).ready(function() {

  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

	});

	/*burger*/

	let burger = document.getElementById('burger');
	let menu = document.getElementById("menu");
	burger.addEventListener('click', function(){
		menu.classList.toggle('menu-active');
	})
