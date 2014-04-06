/*
 * Here I will put all my images in order.
 */
var images = ["nature1.jpg", "nature2.jpg", "nature3.jpg", "nature4.jpg", "nature5.jpg", "nature6.jpg", "nature7.jpg", "nature8.jpg", "nature9.jpg", "nature10.jpg","nature11.jpg"];

/* The next one is the index of the current image. I will use 0 because it is the first image*/

var index = 0;

/* Next up I am going to set my button events. */

function setMathias() {
	console.log("setMathias");

	// I will make a click function so that "something" will happen when I click the buttons. // 
	$(".button").on("click", function() {

		var isNext = $(this).hasClass("next")

		if (isNext == true && index != (images.length - 1)) {
			index = index + 1;
		} else if (isNext == false && index > 0) {
			index = index - 1;

		}
		
		
		// Now I am going to add a disabled function, which will make it so that you can't clik on the previous button when
		// the first image is being displayed and you can't click on the next button when the last image is on the screen.'
		
 		if (index == 0){
			$(".button.prev").addClass("disabled");
		}else if (index == (images.length-1)) {
			$(".button.next").addClass("disabled");
		}else {
			$(".button").removeClass("disabled");
		}	
			

		updateMathias();

	});

}

/*In the function updateMathias I will make it possible for the image to change each time I click a previous or next button*/
function updateMathias() {
	console.log(images[index]);
	$(".image-holder").html("<img src ='images/" + images[index] + "'/>");

}

//This is my document ready function which will kick off the entire process.//
$(document).ready(function() {

	console.log(images[index]);

	$(".image-holder").html("<img src ='images/" + images[index] + "'/>");
	
	$(".button.prev").addClass("disabled");



	setMathias();

});

console.log(images); 