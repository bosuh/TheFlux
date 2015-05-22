$(document).ready(function(){



// THE BUTTONS WORK IN REVERSE ORDER




// THESE ARE BUTTON-SPECIFIC FUNCTIONS TO MAKE THE NARRATIVES APPEAR

$( "#johnBTN" ).click(function() {
  $( "#johnR" ).fadeIn( "slow", function() {
  	console.log("This is John's story.");
  });
});

$( "#eddieBTN" ).click(function() {
  $( "#eddieG" ).fadeIn( "slow", function() {
  	console.log("This is Eddie's story.");
  });
});

$( "#damonBTN" ).click(function() {
  $( "#damonJ" ).fadeIn( "slow", function() {
  	console.log("This is Damon's story.");
  });
});

$( "#jimBTN" ).click(function() {
  $( "#jimP" ).fadeIn( "slow", function() {
  	console.log("This is Jim's story.");
  });
});

$( "#hadeisBTN" ).click(function() {
  $( "#hadeisS" ).fadeIn( "slow", function() {
  	console.log("This is Hadeis' story.");
  });
});

$( "#philBTN" ).click(function() {
  $( "#philC" ).fadeIn( "slow", function() {
  	console.log("This is Phil's story.");
  });
});

// THIS IS TO MAKE THE BLANK SPACE DISAPPER

$( ".storyBTN" ).click(function() {
  $( "#blankSpace" ).hide( "fast", function() {
    console.log("Blank space hidden.");
  });
});

// THIS IS TO MAKE THE OTHER STORIES DISAPPEAR

$( "#johnBTN" ).click(function() {
  $( "#eddieG","#damonJ","#jimP","#hadeisS","#philC" ).fadeOut( "slow", function() {
  	console.log("This is John's story.");
  });
});

$( "#eddieBTN" ).click(function() {
  $( "#johnR","#damonJ","#jimP","#hadeisS","#philC" ).fadeOut( "slow", function() {
  	console.log("This is Eddie's story.");
  });
});

$( "#damonBTN" ).click(function() {
  $( "#eddieG","#johnR","#jimP","#hadeisS","#philC" ).fadeOut( "slow", function() {
  	console.log("This is Damon's story.");
  });
});

$( "#jimBTN" ).click(function() {
  $( "#eddieG","#damonJ","#johnR","#hadeisS","#philC" ).fadeOut( "slow", function() {
  	console.log("This is Jim's story.");
  });
});

$( "#hadeisBTN" ).click(function() {
  $( "#eddieG","#damonJ","#jimP","#johnR","#philC" ).fadeOut( "slow", function() {
  	console.log("This is Hadeis' story.");
  });
});

$( "#philBTN" ).click(function() {
  $( "#eddieG","#damonJ","#jimP","#hadeisS","#johnR" ).fadeOut( "slow", function() {
  	console.log("This is Phil's story.");
  });
});



});
