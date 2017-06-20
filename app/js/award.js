$(document).ready(function () {

  var options = { // Options for grain added to some elements
    animate: true,
    patternWidth: 200,
    patternHeight: 200,
    grainOpacity: 0.05,
    grainDensity: 1,
    grainWidth: 1,
    grainHeight: 1
  };
  grained('#preloader_container', options); // Start grain on elements
  grained('#container', options);
  grained('#menu_grain', options);

  // Start typeit plugin on home and preloader text elements

  $('.preloader_items').typeIt({
    strings: ['Clapping: to_my_self.ego...'],
    speed: 25,
    lifeLike: true,
    autoStart: false,
    loop: false,
    breakLines: true,
    callback: function() {
      $('.preloader_items').delay(1000).fadeOut();
      $('#preloader_container').delay(1250).fadeOut('slow');
    }
  });

  // Show and hide menu;

  $('.burger_menu').on('click',function () {
    $('#container').toggleClass( ".slide_container" );
    $('.slideout_menu').toggleClass( "menu_visible" );
  });

})
