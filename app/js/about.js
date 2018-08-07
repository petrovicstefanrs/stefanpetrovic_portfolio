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

  translate = 'translate(' + x*1.5 + 'px, ' + y*1.5 + 'px) scale(1.0) ';

  $('.about_image>img').css({
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

  $('.preloader_items').typeIt({
    strings: ['Accessing: private_info.lbr...'],
    speed: 25,
    lifeLike: true,
    autoStart: false,
    loop: false,
    breakLines: true,
    callback: function() {
      $('.preloader_items').delay(1000).fadeOut();
      $('#preloader_container').delay(1250).fadeOut('slow');
      writeInfo();
    }
  });

  function writeInfo() {
    $('.type_info').delay(2000).typeIt({
      strings: ['<code>Name:</code> Stefan Petrović','<code>Date of Birth:</code> 11.02.1995','<code>Education:</code> ICT College of Vocational Studies','<code>Degree:</code> Vocational Engineer of Electrical and Computer Engineering','<code>Skills:</code> HTML, CSS, Sass, Less, Javascript, ReactJS, NodeJS, A-Frame, React360, PHP, CodeIgniter, MySql, Postgresql, Java, C#, GameMaker Studio, Making Delicious Coffe...','</br>','<code class="purple">Info:</code> Young and passionate developer, always happy to learn new things and evolve. Fell in love with computers and programming as a kid and has pursued his dream to become a developer since. Also a major geek and gaming enthusiast with an impressive collection of retro consoles. '],
      speed: 15,
      lifeLike: true,
      autoStart: false,
      loop: false,
      breakLines: true
    });
  }

  // Show and hide menu;

  $('.burger_menu').on('click',function () {
    $('#container').toggleClass( ".slide_container" );
    $('.slideout_menu').toggleClass( "menu_visible" );
  });

})
