$(document).ready(function(){

	$('.word-prev').on('click', function(){
    $(this).parent().prev('.definition').toggle(this);
	});
	
	$('.word-next').on('click', function(){
    $(this).parent().next('.definition').toggle(this);
	});

	$('.word-next-mob').on('click', function(){
    $(this).parent().next('.definition-mob').toggle(this);
	});

	$('.word-prev-mob').on('click', function(){
    $(this).parent().prev('.definition-mob').toggle(this);
	});

/*	var yPos;

	$("#twice").on( "click", function( event ) {
  		yPos = event.pageY;
  		$(document).getElementById('#twice-as-likely').offset({top: yPos, left: 700});
  		console.log(yPos);
	});

	$("#twice-as-likely").offset({top: yPos, left: 700});
*/

// FOR DEFINITION ALIGNMENT http://stackoverflow.com/questions/17265280/jquery-ui-position-relative-to-two-elements

	// THESE ARE BUTTON-SPECIFIC FUNCTIONS TO MAKE THE STORIES APPEAR
	
	$( "#johnR-btn" ).click(function() {
		hideStories();
	  $( "#johnR" ).fadeIn( "slow", function() {
	  	console.log("This is John's story.");
	  });
	});

	$( "#eddieG-btn" ).click(function() {
		hideStories();
	  $( "#eddieG" ).fadeIn( "slow", function() {
	  	console.log("This is Eddie's story.");
	  });
	});

	$( "#damonJ-btn" ).click(function() {
		hideStories();
	  $( "#damonJ" ).fadeIn( "slow", function() {
	  	console.log("This is Damon's story.");
	  });
	});

	$( "#jimP-btn" ).click(function() {
		hideStories();
	  $( "#jimP" ).fadeIn( "slow", function() {
	  	console.log("This is Jim's story.");
	  });
	});

	$( "#hadeisS-btn" ).click(function() {
		hideStories();
	  $( "#hadeisS" ).fadeIn( "slow", function() {
	  	console.log("This is Hadeis' story.");
	  });
	});

	$( "#philC-btn" ).click(function() {
		hideStories();
	  $( "#philC" ).fadeIn( "slow", function() {
	  	console.log("This is Phil's story.");
	  });
	});

	// THIS IS TO MAKE THE OTHER STORIES DISAPPEAR
	var the_stories = ["#johnR", "#eddieG","#damonJ","#jimP","#hadeisS","#philC"];
	
	
	function hideStories() {
		for (i = 0; i < the_stories.length; i++) { 
			$(the_stories[i]).fadeOut("fast");
		}
	}

});
