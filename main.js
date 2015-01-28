var allPics = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.png", "17.png", "19.jpg"]
var imgArr = [];
var imgIndex = 0;
var screenWidth = $(window).width();

$(document).ready(function(){

	allPics = shuffle(allPics);
	var timer = setInterval(function(){
		addPic();
	}, 2000);

});

var addPic = function(){


	var xPos = randomRange(10, screenWidth - 150);
	var yPos = randomRange(10, 150);
	var imgWidth = randomRange(150, 300);
	
	var imgPath = "img/" + allPics[imgIndex];
	
	if (imgIndex != allPics.length - 1) {
		imgIndex++;
	} else {
		imgIndex = 0;
	}

	var imgHolder = $("<div></div>");
	imgHolder.css({'position': 'absolute', 'left': xPos, 'bottom': yPos, 'display': 'inline'});
	
	var imgElement = $("<img>");
	imgElement.attr("src", imgPath);
	imgElement.addClass('img-fun');
	imgElement.css({'display': 'none', 'width': imgWidth, 'position': 'relative'});

	if(imgArr.length < 5){
		imgArr.unshift(imgElement);
		$('.header').append(imgHolder);
		imgHolder.append(imgElement);
		imgElement.fadeIn("slow");
	} else {
		imgArr.pop().fadeOut("slow", function() {
			var pdiv = $(this).parent();
			$(this).remove();
			pdiv.remove();
		});
		imgArr.unshift(imgElement);
		$('.header').append(imgHolder);
		imgHolder.append(imgElement);
		imgElement.fadeIn("slow");
	}

		
};

// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
var shuffle = function(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
var randomRange = function(min, max) {
    return Math.random() * (max - min) + min;
}