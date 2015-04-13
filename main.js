$(document).on('ready', function() {
  
	// Add marker and input box
	$('.map').on("click", function(event) {
		var flag = $('<div class="marker"><img src="http://www.clker.com/cliparts/c/9/m/4/B/d/google-maps-grey-marker-w-shadow.svg"><div class="description"></div><input class="text-box" type="text"><button class="submitButton" type="submit">Submit</button></div>');
		console.log("pageX: " + event.pageX + ", pageY: " + event.pageY );
		$(this).closest('div').append(flag);

		$('.marker:last-child').css({
			top: event.pageY - 43,
		 	left: event.pageX - 16
		})	
	});

	// Access input field
	$('.map').on('click','.text-box', function(event){
		event.stopPropagation();
	});
	
	// Remove Markers and Text Box
	$('.map').on("click",".marker", function(event){
			event.stopPropagation();
			$(this).remove();
		});

	// Submit button controls
	$('.map').on('click','.submitButton', function(event) {
		event.stopPropagation();
		event.preventDefault();
		var text = $(this).siblings('.text-box').val();
		$(this).siblings('.description').text(text);
		$(this).siblings('.text-box').toggle();
		$(this).remove();
		console.log(text);
	});   

	//  next step hover on marker, toggle ".discription", CSS styling. 
	$('.map').on({
		mouseenter: function() {
			$(this).children('.description').toggle();
		},
		mouseleave: function() {
			$(this).children('.description').toggle();
		}
	}, '.marker,description');

});