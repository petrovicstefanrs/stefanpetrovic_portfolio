$(document).ready(function () {
  var projectsContainer = $('.work_items');

  portfolioData.forEach(function(project) {
	var title = project.title;
	var stack = project.stack;
	var desc = project.desc;
	var buttons = project.buttons;

	var projectTitle = "<h3 class='item_title'><code class='glitchy'>"+title+"</code></h3>";
	var projectDesc = "<span class='item_desc'>"+desc+"</span>";

	var projectStackList = '';
	stack.forEach(function (tech) {
		projectStackList += "<code>"+tech+"</code>";
	});

	var projectButtonList = '';
	buttons.forEach(function (btn) {
		projectButtonList += "<span class='btn'><a href='"+btn.href+"' target='_blank'><i class='fa fa-"+btn.icon+"' aria-hidden='true'></i> "+btn.label+"</a></span>";
	});

	var project = "<div class='work_item_box'>"+projectTitle+"<span class='item_tech'>"+projectStackList+"</span>"+projectDesc+"<span class='item_btns'>"+projectButtonList+"</span></div>";

	projectsContainer.append(project);
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
    strings: ['Searching: projects.lbr...'],
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
