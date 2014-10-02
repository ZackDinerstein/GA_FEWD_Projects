images = ["img/image-01.jpg", "img/image-02.jpg", "img/image-03.jpg", "img/image-04.jpg", "img/image-05.jpg",  "img/image-06.jpg", "img/image-07.jpg", "img/image-08.jpg", "img/image-09.jpg", "img/image-10.jpg", "img/image-11.jpg", "img/image-12.jpg"]

captions = ["Wood Chips", "Mushroom", "Mushroom Friends", "Haleakala Rock", "Mossy", "Leaves", "Paper-like Bark", "Tree Bark", "Rainbow Eucalyptus", "More Trees", "Hanging Berries", "Wood On Black Sand Beach"]

// Change image and caption
var currentImage = 0;
var currentCaption = 0; 

function changeImage(whichNum) {
	var img = document.getElementById('main-image');
	img.setAttribute('src', images[whichNum]);

	var caption = document.getElementById('main-caption');
	caption.innerHTML = captions[whichNum];

	currentImage = whichNum;
	currentCaption = whichNum;
}

// Change to next image
function nextImage() {
	currentImage++;
	if (currentImage===images.length) {
		currentImage = 0;
	}
	
	var img = document.getElementById('main-image');
	img.setAttribute('src', images[currentImage]);

	currentCaption++;
	if (currentCaption===captions.length) {
		currentCaption = 0;
	}

	var caption = document.getElementById('main-caption');
	caption.innerHTML = captions[currentCaption];
}


// Change to previous image
function prevImage() {
	currentImage = currentImage-1;
	if (currentImage===0) {
		currentImage = images.length-1;
	}

	var img = document.getElementById('main-image');
	img.setAttribute('src', images[currentImage]);

	currentCaption = currentCaption-1;
	if (currentCaption===0) {
		currentCaption = captions.length-1;
	}

	var caption = document.getElementById('main-caption');
	caption.innerHTML = captions[currentCaption];
}