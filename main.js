var allPics = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg"]
var imgArr = [];
var imgIndex = 0;
var screenWidth = $(window).width();

$(document).ready(function(){

	var timer = setInterval(function(){
		addPic();
	}, 2000);

});

var addPic = function(){

	var xPos = Math.floor((Math.random() - .2) * screenWidth);
	var yPos = Math.floor(Math.random() * 500);
	var imgWidth = 100+ Math.floor(Math.random() * 200);
	var imgPath = "img/" + allPics[imgIndex];
	if (imgIndex != allPics.length - 1) {
		imgIndex++;
	} else {
		imgIndex = 0;
	}
	
	var imgElement = $("<img>");
	imgElement.attr("src", imgPath);
	imgElement.css({'z-index': '0', 'display': 'none', 'width': imgWidth, 'position': 'absolute', 'left': xPos, 'top': yPos});

	if(imgArr.length < 5){
		imgArr.unshift(imgElement);
		$('.header').append(imgElement);
		imgElement.fadeIn("slow");
	} else {
		imgArr.pop().fadeOut("slow", function() {
			$(this).remove();
		});
		imgArr.unshift(imgElement);
		$('.header').append(imgElement);
		imgElement.fadeIn("slow");
	}

		
};