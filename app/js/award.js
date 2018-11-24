$(document).ready(function () {
  var awardsContainer = $('.work_items');

  awardData.forEach(function(award) {
	var title = award.title;
	var date = award.date;
	var desc = award.desc;
	var buttons = award.buttons;

	var awardTitle = "<h3 class='item_title'><code class='glitchy'>"+title+"</code></h3>";
	var awardDesc = "<span class='item_desc'>"+desc+"</span>";
	var awardDate = "<code>"+date+"</code>";

	var awardButtonList = '';
	buttons.forEach(function (btn) {
		awardButtonList += "<span class='btn'><a href='"+btn.href+"' target='_blank'><i class='fa fa-"+btn.icon+"' aria-hidden='true'></i> "+btn.label+"</a></span>";
	});

	var award = "<div class='work_item_box'>"+awardTitle+"<span class='item_tech'>"+awardDate+"</span>"+awardDesc+"<span class='item_btns'>"+awardButtonList+"</span></div>";

	awardsContainer.append(award);
  });

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
