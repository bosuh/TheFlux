/**
	Bootstrap Project Template
	Designed and built by Zach Wise at VéritéCo
*/  

/*	Required Files
	CodeKit Import
	http://incident57.com/codekit/
================================================== */


// BOOTSTRAP
	// @codekit-prepend "Library/bootstrap/transition.js";
	// @codekit-prepend "Library/bootstrap/scrollspy.js";
	// @codekit-prepend "Library/bootstrap/tab.js";
	// @codekit-prepend "Library/bootstrap/tooltip.js";
	// @codekit-prepend "Library/bootstrap/popover.js";
	// @codekit-prepend "Library/bootstrap/carousel.js";
	// @codekit-prepend "Library/bootstrap/collapse.js";
	// @codekit-prepend "Library/bootstrap/modal.js";
	// @codekit-prepend "Library/bootstrap/dropdown.js";
	// @codekit-prepend "Library/bootstrap/affix.js";

// JQUERY PLUGINS
	// @codekit-prepend "Library/jquery.smooth-scroll.js";
	// @codekit-prepend "Library/jquery.easing.1.3.js";
	// @codekit-prepend "Library/jquery.waypoints.js";
	// @codekit-prepend "Library/jquery.fluidbox.js"; 
	// @codekit-prepend "Library/jquery.laziestloader.js";
	
// OTHER LIBRARIES
	// @codekit-prepend "Library/svg-morpheus.js";




$(document).ready(function(){
	
	var _speed = 500,
		_story_nav_active = false,
		_has_story_cover = false,
		_story_cover_height = 100,
		_path = "",
		_is_index = false,
		profile_array = [],
		logo_timer = {};
		
		
	if (typeof path != "undefined") {
		_path = path;
	}
	if (typeof is_index != "undefined") {
		_is_index = is_index;
	}

	// TITLE
	var the_title = $("h1").html();
	$( "#navbar-title" ).html( the_title );
	
	/*	Smooth Scroll
	================================================== */
	$('a').smoothScroll({
		offset: -290
	});
	
	/*	LAZY LOAD AND ZOOMABLE IMAGES
	================================================== */
	// Find Images and make them zoomable
	function makeImagesZoomable() {
		
		/*	Laziest Loader
		================================================== */
		$("img").laziestloader();
	 
		$('img').load(function() {
			this.style.opacity = 1;
		});
		
		$( "figure" ).each(function(figure) {
			
			if ($(this).find( "a img" ).length ) {
				
			} else {
				var img_url,
					el_link = createEl("a", "enlarge"),
					el_img = $(this).find("img");
					
					
				img_url = $(this).find("img").attr("data-src");

				if (img_url == undefined) {
					img_url = $(this).find("img").attr("src");
				}
				
				$( el_img ).detach();
				
				$(el_link).attr("href", img_url);
				$(el_link).append(el_img);
				$(this).prepend(el_link);
				

			}
		});
		
		$('.enlarge').fluidbox({
		 	viewportFill:0.8,
			stackIndex: 1040
		})
		.on('openstart', fluidboxOpen)
		.on('closestart', fluidboxClose);

		
	}
	
	/*	Video Laziest Loader
	================================================== */
	$('.lazy-video').laziestloader();
	
	/*	Fluidbox Events
	================================================== */
	function fluidboxOpen() {
		trace("open");
		navbarToggle(false);
		profileNavToggle(false);
	};
	
	function fluidboxClose() {
		trace("close");
		navbarToggle(true);
		profileNavToggle(true);
	};
	
	/*	NavBar Toggle
	================================================== */
	function navbarToggle(show) {
		var animate_props = {
			
		}
		if (show) {
			animate_props.opacity = "1";
			animate_props.marginTop = "0";
		} else {
			animate_props.opacity = "1";
			animate_props.marginTop = "-150px";
		}
		
		$("#navbar").animate(animate_props, _speed/2, "easeInOutCubic", function() {
			
		});
	};
	
	/*	STORY COVER
	================================================== */
	if ($('#story-cover').length ) {
		_has_story_cover = true;
		
		_story_cover_height = window.innerHeight;
		
		$('#story-cover').height(_story_cover_height);
		
		$( window ).resize(function() {
			_story_cover_height = window.innerHeight;
			$('#story-cover').height(_story_cover_height);
		});

		
		$('article').waypoint({
			handler: function(direction) {
			
				if (direction === "up") {
					$('.story-cover-content').css("opacity", "1");
					navbarChange(false);
					if ($("#video-cover").length == 0) {
						
					} else{
						var vid = document.getElementById("video-cover");
						vid.play();
					}
				}
				if (direction === "down") {
					$('.story-cover-content').css("opacity", "0");
					navbarChange(true);
					if ($("#video-cover").length == 0) {
						
					} else{
						var vid = document.getElementById("video-cover");
						vid.pause();
					}
				}
			 
			},
			offset:200
		});
		
		$('.story-cover-arrow').click(function() {
			$.smoothScroll({
				scrollElement: $('body'),
				scrollTarget: 'article'
			});
		});
		
	} else {
		
		$('#navbar-product').addClass('no-cover');
		
		$('article').waypoint({
			handler: function(direction) {
			
				if (direction == "down") {
					$('#navbar').addClass('in-article');
				} else if (direction == "up") {
					$('#navbar').removeClass('in-article');
				}
			 
			},
			offset:-2
		});
		
	}
	
	
	function navbarChange(in_article) {
		var animate_props = {
			
		}
		if (in_article) {
			animate_props.opacity = "0";
			animate_props.marginTop = "0";
		} else {
			animate_props.opacity = "1";
			animate_props.marginTop = "-56px";
		}
		
		/*
		$("#navbar").animate(animate_props, _speed/2, "easeInOutCubic", function() {
			
			if (in_article) {
				$('#product-navbar-collapse').css('opacity', '1');
				//$('.knightlab-logo img').attr('src', '../css/knightlab-logo-diamond-190.png');
				$('#navbar').addClass('in-article');
				$('#navbar').css('marginTop', '-56px');
				$("#navbar").animate({
					marginTop:"0px",
					opacity:"1"
				}, _speed, "easeInOutCubic");
			} else {
				if (_is_index) {
					$('#product-navbar-collapse').css('opacity', '0');
				} else {
					$('#product-navbar-collapse').css('opacity', '1');
				}
				//$('img.knightlab-logo').attr('src', '../css/kngihtlab-logo-NOtagline.png');
				//$('.knightlab-logo img').attr('src', '../css/knightlab-logo-diamond-190.png');
				$('#navbar').removeClass('in-article');
				$('#navbar').css('opacity', '0');
				$('#navbar').css('marginTop', '0');
				$("#navbar").animate({
					opacity:"1"
				}, _speed*2, "easeInOutCubic");
			}
			

  
		});
		*/
		$("#navbar-product").animate(animate_props, _speed/2, "easeInOutCubic", function() {
			
			if (in_article) {
				$('#product-navbar-collapse').css('opacity', '1');
				
				$('.navbar-brand img').css('width', '32px');
				$('.navbar-brand img').css('height', '32px');
				
				$('#navbar-product').addClass('in-article');
				$('#navbar-product').css('marginTop', '-56px');
				$("#navbar-product").animate({
					marginTop:"0px",
					opacity:"1"
				}, _speed, "easeInOutCubic");
			} else {
				if (_is_index) {
					$('#product-navbar-collapse').css('opacity', '0');
				} else {
					$('#product-navbar-collapse').css('opacity', '1');
				}
				//$('img.knightlab-logo').attr('src', '../css/kngihtlab-logo-NOtagline.png');
				//$('.knightlab-logo img').attr('src', '../css/knightlab-logo-diamond-190.png');
				
				$('.navbar-brand img').css('width', '');
				$('.navbar-brand img').css('height', '');
				
				$('#navbar-product').removeClass('in-article');
				$('#navbar-product').css('opacity', '0');
				$('#navbar-product').css('marginTop', '0');
				$("#navbar-product").animate({
					opacity:"1"
				}, _speed*2, "easeInOutCubic");
			}
			

  
		});
		
	}
	
	/*	STORY NAV BAR
	================================================== */
	function loadStoryBarStories(json_url, storybar_id) {
		//$( "#navbar-story" ).html( the_title );
		$.getJSON( json_url, function(d) {
			var number_of_stories = d.stories.length,
				column_width,
				story_container = $( storybar_id + " .row" ).first(),
				story_container_height,
				many_stories = false,
				stories = {
					small: [],
					large: [],
				}
				
			column_width = 12/number_of_stories;
			
			if (column_width < 2) {
				many_stories = true;
				column_width = 2;
			} else {
				column_width = Math.floor(column_width);
			}
			
			
			// Create elements
			if (many_stories) {
				var small_stories_element,
					storybar_small_height,
					storybar_large_height;
				
				
				for (var i = 0; i < d.stories.length; i++) {
					var story 		= d.stories[i];
				
					if (story.large == "true") {
						stories.large.push(story);
					} else {
						stories.small.push(story);
					}
				};
				
				if (stories.small.length > 4) {
					small_stories_element = createEl("div", "col-sm-4 small-column");
				} else {
					small_stories_element = createEl("div", "col-sm-4 small-column");
				}
				
				$(story_container).append(small_stories_element);
				
				column_width = 8 / (stories.large.length);
				
				if (column_width < 2) {
					column_width = 2;
				} else {
					column_width = Math.floor(column_width);
				}
				
				// LARGE
				var large_rows = 1;
				var large_column_count = 0;
				for (var j = 0; j < stories.large.length; j++) {
					var story 		= stories.large[j],
						story_el;
						
					if (large_column_count < 4) {
						large_column_count ++;
					} else {
						large_column_count = 0;
						large_rows ++;
					}
						
					story_el = createStoryNavElement(story, column_width, true);
					$(story_container).append(story_el);
					
				}

				// SMALL
				var small_rows = 1;
				var small_column_count = 0;
				
				for (var k = 0; k < stories.small.length; k++) {
					var story 		= stories.small[k],
						story_el;
					
					if (small_column_count < 2) {
						small_column_count ++;
					} else {
						small_column_count = 0;
						small_rows ++;
					}
					
					story_el = createStoryNavElement(story, 6, false);
					$(small_stories_element).append(story_el);
				}
				
				// SIZE
				story_container_height = $(story_container).height();
				
				if (story_container_height < 250) {
					story_container_height = 250;
				}
				
				storybar_small_height = story_container_height / small_rows;
				$( small_stories_element).find( ".story-item" ).height(storybar_small_height);
				$( small_stories_element).find( ".story-item-container" ).height(storybar_small_height);
				$( small_stories_element).find( ".story-item-background" ).height(storybar_small_height);
				
				story_container_height = $(story_container).height();
				
				if (story_container_height < 250) {
					story_container_height = 250;
				}
				
				storybar_large_height = story_container_height / large_rows;
				$( story_container).find( ".story-item.tall" ).height(storybar_large_height);
				$( story_container).find( ".story-item.tall .story-item-container" ).height(storybar_large_height);
				$( story_container).find( ".story-item.tall .story-item-background" ).height(storybar_large_height);
				
				
				
				
			} else {
				for (var i = 0; i < d.stories.length; i++) {
					var story 		= d.stories[i],
						story_el;
				
					story_el = createStoryNavElement(story, column_width, true);
					$(story_container).append(story_el);
				
				};
				storybar_large_height = 250;
				$( story_container).find( ".story-item.tall" ).height(storybar_large_height);
				$( story_container).find( ".story-item.tall .story-item-container" ).height(storybar_large_height);
				$( story_container).find( ".story-item.tall .story-item-background" ).height(storybar_large_height);
				
			}
			
			if (!_story_nav_active) {
				showNavbarStories(false, _speed*2);
			}
		});
	}
	
	function createStoryNavElement(story, column_width, tall) {
		var story_el	= "";
		
		story_el 		+=  "<div class='col-sm-" + column_width + " col-xs-" + 4 + "'>";
		story_el 		+=		"<div class='row'>";
		story_el 		+= 			"<div class='col-sm-12'>";
		if (tall) {
			story_el 	+= 				"<a class='story-item tall' href='" + _path + story.url + "'>";
		} else {
			story_el 	+= 				"<a class='story-item' href='" + _path + story.url + "'>";
		}
		story_el 		+= 					"<div class='story-item-background' style='background-image:url(" + _path + story.background.url + ")'></div>";
		story_el 		+= 					"<div class='story-item-container'>";
		story_el 		+= 						"<div class='story-item-content'>";
		story_el 		+= 							"<h3>" + story.headline + "</h3>";
		story_el 		+= 							"<p>" + story.deck + "</p>";
		story_el 		+= 							"<p class='byline'>" + story.byline + "</p>";
		
		story_el 		+= 						"</div>";
		story_el 		+= 					"</div>";
		story_el 		+= 				"</a>";
		story_el 		+= 			"</div>";
		story_el 		+= 		"</div>";
		story_el 		+= "</div>";
		
		return story_el;
		
	}
	
	function showNavbarStories(show, speed) {
		var nav_speed = _speed;
		if (speed) {
			nav_speed = speed;
		}
		if (show) {
			
			$("#navbar-story").animate({
			  marginTop:"0px"
			}, nav_speed, "easeInOutCubic");
			_story_nav_active = true;
		} else {
			$("#navbar-story").animate({
			  marginTop:-$("#navbar-story").height()-4//"-254px"
			}, nav_speed, "easeInOutCubic");
			_story_nav_active = false;
		}
	}
	
	/*	NAVIGATION NAVBAR STORIES
	================================================== */
	$('#stories-btn').click(function() {
		event.preventDefault();
		if (_story_nav_active) {
			showNavbarStories();
			$(this).removeClass("open");
		} else {
			showNavbarStories(true);
			$(this).addClass("open");
		}
		
	});
	
	/*	PROFILE NAVIGATION
	================================================== */
	$('.profile-nav').waypoint({
		handler: function(direction) {
			var profile_width = 100/profile_array.length;
			if (browser.mobile || window.innerWidth < 500) {
				
			} else {
				if (direction == "down") {
					$('.profile-nav').addClass('profile-nav-sticky');
					
				} else if (direction == "up") {
					$('.profile-nav').removeClass('profile-nav-sticky');
					profile_width = 33.3;
				}
				if (window.innerWidth < 1000 && profile_array.length > 4) {
					for (var i = 0; i < profile_array.length; i++) {
						var profile = profile_array[i];
						profile.style.width = profile_width + "%";
	
					};
				}
				
			}
			
		 
		},
		offset:120
	});
	
	function profileNavToggle(show) {
		var animate_props = {
			
		}
		if (show) {
			animate_props.opacity = "1";
			animate_props.marginTop = "0";
		} else {
			animate_props.opacity = "1";
			animate_props.marginTop = "-300px";
		}
		
		$(".profile-nav-sticky").animate(animate_props, _speed/2, "easeInOutCubic", function() {
			
		});
	}
	
	/*	Profile Nav Layout
 	================================================== */
	
	function profileNavLayout() {
		profile_array = $( ".profile-nav .profile-item" ).toArray();
		var profile_width = 100/profile_array.length;
		
		if (browser.mobile || window.innerWidth < 500) {
			profile_width = 100;
		} else if (window.innerWidth < 1000 && profile_array.length > 4) {
			profile_width = 33.3;
		}

		for (var i = 0; i < profile_array.length; i++) {
			var profile = profile_array[i];
			profile.style.width = profile_width + "%";
			
		};
		
		$( ".profile-nav .profile-item a.profile-button" ).each(function() {
			var waypoint_id = $(this).attr("href");
			var this_button = $(this);
			$(waypoint_id).waypoint({
				handler: function(direction) {
					trace(waypoint_id);
					resetActiveProfiles();
					$(this_button).addClass("profile-button-active");
				},
				offset:400
			});
				
		});
	}
	
	function resetActiveProfiles() {
		$( ".profile-nav .profile-item a.profile-button" ).removeClass("profile-button-active");
	}
	
	$('a.profile-button').smoothScroll({
		offset: -180
	});
	
	/*	LOGO SVG MORPH
 	================================================== */
	var logo_second = true;
	var minTime = 750;
	var maxTime = 1200;
	var logoDuration = 1500;
	var logoF = {},
		logoL = {},
		logoU = {},
		logoX = {},
		logoTimerF = {},
		logoTimerL = {},
		logoTimerU = {},
		logoTimerX = {};
	
	function initLogo() {
		logoF = new SVGMorpheus('#fluxLogoF');
		logoL = new SVGMorpheus('#fluxLogoL');
		logoU = new SVGMorpheus('#fluxLogoU');
		logoX = new SVGMorpheus('#fluxLogoX');
		logoTimerF = setTimeout(morphLogoF, 1000);
		logoTimerL = setTimeout(morphLogoL, 1000);
		logoTimerU = setTimeout(morphLogoU, 1000);
		logoTimerX = setTimeout(morphLogoX, 1000);
	}
	
	function morphLogoF() {
		var logo_id = "1";
		var randomTimeout = randomBetween(minTime, maxTime);
		if (logo_second) {
			logo_second = false;
			logo_id = "2";
		} else {
			logo_second = true;
		}
		
		logoF.to("f"+logo_id, {duration: logoDuration, easing: "quad-in-out", rotation:"none"}, function(){
			clearTimeout(logoTimerF);
			logoTimerF = setTimeout(morphLogoF, randomTimeout);
		});
	}
	
	function morphLogoL() {
		var logo_id = "1";
		var randomTimeout = randomBetween(minTime, maxTime);
		if (logo_second) {
			logo_second = false;
			logo_id = "2";
		} else {
			logo_second = true;
		}
		
		logoL.to("l"+logo_id, {duration: logoDuration, easing: "quad-in-out", rotation:"none"}, function(){
			clearTimeout(logoTimerL);
			logoTimerL = setTimeout(morphLogoL, randomTimeout);
		});
	}
	
	function morphLogoU() {
		var logo_id = "1";
		var randomTimeout = randomBetween(minTime, maxTime);
		if (logo_second) {
			logo_second = false;
			logo_id = "2";
		} else {
			logo_second = true;
		}
		
		logoU.to("u"+logo_id, {duration: logoDuration, easing: "quad-in-out", rotation:"none"}, function(){
			clearTimeout(logoTimerU);
			logoTimerU = setTimeout(morphLogoU, randomTimeout);
		});
	}
	
	function morphLogoX() {
		var logo_id = "1";
		var randomTimeout = randomBetween(minTime, maxTime);
		if (logo_second) {
			logo_second = false;
			logo_id = "2";
		} else {
			logo_second = true;
		}
		
		logoX.to("x"+logo_id, {duration: logoDuration, easing: "quad-in-out", rotation:"none"}, function(){
			clearTimeout(logoTimerX);
			logoTimerX = setTimeout(morphLogoX, randomTimeout);
		});
	}
	
	
	/*	Init
 	================================================== */
	loadStoryBarStories(_path + "stories.json", "#navbar-story");
	loadStoryBarStories(_path + "stories.json", "#footer-storybar");
	makeImagesZoomable();
	profileNavLayout();

	if (typeof show_logo != "undefined" && show_logo) {
		initLogo();
	}
	
	
});

/* Trace (console.log)
================================================== */
trace = function( msg ) {
	if (window.console) {
		console.log(msg);
	} else if ( typeof( jsTrace ) != 'undefined' ) {
		jsTrace.send( msg );
	} else {
		//alert(msg);
	}
};

/* Create Element
================================================== */
createEl = function(tagName, className) {
	var el = document.createElement(tagName);
	el.className = className;
	return el;
} ;

/* Random Number between 
================================================== */
randomBetween = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

/* Browser Detector
================================================== */
var browser = {};

(function() {

	var ua = navigator.userAgent.toLowerCase(),
		doc = document.documentElement,

		ie = 'ActiveXObject' in window,

		webkit = ua.indexOf('webkit') !== -1,
		phantomjs = ua.indexOf('phantom') !== -1,
		android23 = ua.search('android [23]') !== -1,

		mobile = typeof orientation !== 'undefined',
		msPointer = navigator.msPointerEnabled && navigator.msMaxTouchPoints && !window.PointerEvent,
		pointer = (window.PointerEvent && navigator.pointerEnabled && navigator.maxTouchPoints) || msPointer,

		ie3d = ie && ('transition' in doc.style),
		webkit3d = ('WebKitCSSMatrix' in window) && ('m11' in new window.WebKitCSSMatrix()) && !android23,
		gecko3d = 'MozPerspective' in doc.style,
		opera3d = 'OTransition' in doc.style,
		opera = window.opera;


	var retina = 'devicePixelRatio' in window && window.devicePixelRatio > 1;

	if (!retina && 'matchMedia' in window) {
		var matches = window.matchMedia('(min-resolution:144dpi)');
		retina = matches && matches.matches;
	}

	var touch = !window.L_NO_TOUCH && !phantomjs && (pointer || 'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch));

	browser = {
		ie: ie,
		ielt9: ie && !document.addEventListener,
		webkit: webkit,
		//gecko: (ua.indexOf('gecko') !== -1) && !webkit && !window.opera && !ie,
		firefox: (ua.indexOf('gecko') !== -1) && !webkit && !window.opera && !ie,
		android: ua.indexOf('android') !== -1,
		android23: android23,
		chrome: ua.indexOf('chrome') !== -1,

		ie3d: ie3d,
		webkit3d: webkit3d,
		gecko3d: gecko3d,
		opera3d: opera3d,
		any3d: !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d || opera3d) && !phantomjs,

		mobile: mobile,
		mobileWebkit: mobile && webkit,
		mobileWebkit3d: mobile && webkit3d,
		mobileOpera: mobile && window.opera,

		touch: !! touch,
		msPointer: !! msPointer,
		pointer: !! pointer,

		retina: !! retina,
		orientation: function() {
			var w = window.innerWidth,
				h = window.innerHeight,
				_orientation = "portrait";
			
			if (w > h) {
				_orientation = "landscape";
			}
			if (Math.abs(window.orientation) == 90) {
				//_orientation = "landscape";
			}
			trace(_orientation);
			return _orientation;
		}
	};

}()); 
/* Google Analytics
================================================== */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','http://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-537357-22', 'auto');
ga('send', 'pageview');