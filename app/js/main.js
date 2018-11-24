///////////////////////////////// MOVE ELEMENTS ON MOUSE MOVE /////////////////////////////////

// This handles value changes for lFollowX and lFollowY depending on Mouse Position

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

// Setting up variables

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    x1 = 0,
    y1 = 0,
    friction = 1 / 25;

// Function for moving the background on HERO-HEADER

function moveHead() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;

  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.0) ' + 'rotate(' + y + 'deg)';

  $('.mirror_img').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveHead);
}

$(document).ready(function () {
  moveHead(); // Start the moveHead function to track mouse possition and update heads position accordingly

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

  $('.type-it').typeIt({
    strings: ['React','Node JS','A-Frame','Javascript','Photoshop','Passion & <i class="fa fa-coffee" aria-hidden="true"></i>'],
    speed: 100,
    lifeLike: true,
    autoStart: false,
    loop: true,
    breakLines: false,
    deleteDelay: 3500,
    deleteSpeed: 100,
    startDelay: 1250,
    loopDelay: 1250
  });

  if ((window.location.href).search("#")!=-1) { // Do not show loader if page was accessed through one of the links
    $('#preloader_container').hide();
  }

  $('.preloader_items').typeIt({
    strings: ['twostep_authcommand.bui', 'Username: ag54348', 'Password: ************', 'ACCESS TO SYSTEM', 'Initializing...'],
    speed: 35,
    lifeLike: true,
    autoStart: false,
    loop: false,
    breakLines: true,
    callback: function() {
      $('.preloader_items').delay(250).fadeOut();
      $('#preloader_container').delay(500).fadeOut('slow');
    }
  });

  // Show and hide menu;

  $('.burger_menu').on('click',function () {
    $('#container').toggleClass( ".slide_container" );
    $('.slideout_menu').toggleClass( "menu_visible" );
  });

})
