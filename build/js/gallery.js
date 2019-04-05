"use strict";

var thumbURLs = [

	{
		fullPic: 'url(./build/images/gallery/fullpic1.png)',
		preview: 'url(./build/images/gallery/thumbnail1.png)',
		hText: 'Tque nam ex magnam',
		pText: 'Lorem ipsum dolor sit amet,  adipisicing elit. Quae accusamus cum enim voluptate beatae amet.'
	},

	{
		fullPic: 'url(./build/images/gallery/fullpic2.png)',
		preview: 'url(./build/images/gallery/thumbnail2.png)',
		hText: 'Lorem ipsum dolor',
		pText: 'Lorem ipsum dolor sit amet.  deserunt optio delectus ex similique, numquam, libero fugiat facere.'
	},

	{
		fullPic: 'url(./build/images/gallery/fullpic3.png)',
		preview: 'url(./build/images/gallery/thumbnail3.png)',
		hText: 'Consectetur adipisicing',
		pText: 'Amet, consectetur adipisicing elit. Voluptatem sed neque pariatur, illum laborum cupiditate!'
	},

	{
		fullPic: 'url(./build/images/gallery/fullpic4.png)',
		preview: 'url(./build/images/gallery/thumbnail4.png)',
		hText: 'Quas accusamus',
		pText: 'Quas accusamus quasi nobis. Voluptatem sed neque pariatur, illum laborum cupiditate!'
	
	},

	{
		fullPic: 'url(./build/images/gallery/fullpic5.png)',
		preview: 'url(./build/images/gallery/thumbnail5.png)',
		hText: 'Veritatis',
		pText: 'Lorem ipsum dolor sit amet. Reprehenderit excepturi, tenetur, dolor aspernatur id iusto.'
	}
];
	
const page = document.querySelector('.page');
const galleryBigImage = document.querySelector('.gallery__image-wrapper');
const galleryDescH = document.querySelector('.desctiption__h');
const galleryDescP = document.querySelector('.description__p');
const thumbnailsDOMList = document.querySelectorAll('.thumbnails-wrapper__thumbnail');
const arrowLeft = document.querySelector('.arrow--left');
const arrowRight = document.querySelector('.arrow--right');


galleryBigImage.style.backgroundImage = thumbURLs[0].fullPic;

var thumbnailStorage = [];

var currentThumbNumber = 0;

for (let i = 0; i < thumbnailsDOMList.length; i++) {
	var thumbnail = {};
	for (let key in thumbURLs[i]) {
		thumbnail[key] = thumbURLs[i][key];
	};
	thumbnail.domElement = thumbnailsDOMList[i];
	thumbnail.domElement.style.backgroundImage = thumbnail.preview;
	thumbnail.number = i;
	thumbnailStorage.push(thumbnail);
	addThumbnailsClickEvent(thumbnail, thumbURLs);
};

arrowLeft.addEventListener('click', function () {
	if (currentThumbNumber > 0) {
		changeFullImage(thumbnailStorage, 'back');
	}
});

arrowRight.addEventListener('click', function () {
	if (currentThumbNumber < thumbnailStorage.length - 1) {
		changeFullImage(thumbnailStorage, 'next');
	}
});

function addThumbnailsClickEvent(thumbnail, thmbStrg) {
	thumbnail.domElement.addEventListener('click', function () {
	changeFullImage(thmbStrg, 'click', thumbnail.number);
	});
};

/*
changeFullImage(thmbStrg, type [,number]);
thmbStrg - thumbnail storage with thumbnail objects
type - back, next, click. if click then uses number parameter
number - number of thumbnail 
*/
function changeFullImage(thmbStrg, type, number) {
	switch (type) {
		case 'back':
			var newImgNum = currentThumbNumber - 1;
			currentThumbNumber--;
			break;
		case 'next':
			var newImgNum = currentThumbNumber + 1;
			currentThumbNumber++;
			break;
		case 'click':
			var newImgNum = number;
			currentThumbNumber = number;
	};
	let {fullPic, hText, pText} = thmbStrg[newImgNum];
	galleryBigImage.style.backgroundImage = fullPic;
	galleryDescH.innerHTML = hText;
	galleryDescP.innerHTML = pText;
};

/*

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function pageColor() { 
	page.style.filter="hue-rotate(" + getRandomInt(0, 360) + "deg)";
}

var interval = 2000;

var timerId = setTimeout(function changeColor() {
	pageColor();
	if (interval < 0.002) {
		interval = 2000;
	}
	interval /= 1.5; 
	setTimeout(changeColor, interval);
}, interval); */