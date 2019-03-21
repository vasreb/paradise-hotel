"use strict";

var thumbURLs = [

	{
		fullPic: 'url(./build/images/gallery/fullpic1.png)',
		preview: 'url(./build/images/gallery/thumbnail1.png)',
		hText: 'Tque nam ex magnam',
		pText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae accusamus cum enim voluptate beatae amet.'
	},

	{
		fullPic: 'url(./build/images/gallery/fullpic2.png)',
		preview: 'url(./build/images/gallery/thumbnail2.png)',
		hText: 'Lorem ipsum dolor',
		pText: 'Lorem ipsum dolor sit amet. odit modi deserunt optio delectus ex similique, numquam, libero fugiat facere.'
	},

	{
		fullPic: 'url(./build/images/gallery/fullpic3.png)',
		preview: 'url(./build/images/gallery/thumbnail3.png)',
		hText: 'Consectetur adipisicing',
		pText: 'Amet, consectetur adipisicing elit. eritatis. Voluptatem sed neque pariatur, illum laborum cupiditate!'
	},

	{
		fullPic: 'url(./build/images/gallery/fullpic4.png)',
		preview: 'url(./build/images/gallery/thumbnail4.png)',
		hText: 'Quas accusamus',
		pText: 'Quas accusamus quasi nobis, veritatis. Voluptatem sed neque pariatur, illum laborum cupiditate!'
	
	},

	{
		fullPic: 'url(./build/images/gallery/fullpic5.png)',
		preview: 'url(./build/images/gallery/thumbnail5.png)',
		hText: 'Veritatis',
		pText: 'Lorem ipsum dolor sit amet, adipisicing. Reprehenderit excepturi, tenetur, dolor aspernatur id iusto.'
	}
];
	

var galleryBigImage = document.querySelector('.gallery__image-wrapper');
var galleryDescH = document.querySelector('.desctiption__h');
var galleryDescP = document.querySelector('.description__p');
var thumbnailsDOMList = document.querySelectorAll('.thumbnails-wrapper__thumbnail');
var arrowLeft = document.querySelector('.arrow-left');
var arrowRight = document.querySelector('.arrow-right');

galleryBigImage.style.backgroundImage = thumbURLs[0].fullPic;



var thumbnailStorage = [];

var currentThumbNumber = 0;

for (var i = 0; i < thumbnailsDOMList.length; i++) {
	var thumbnail = {};
	thumbnail.domElement = thumbnailsDOMList[i];
	thumbnail.fullPic = thumbURLs[i].fullPic;
	thumbnail.preview = thumbURLs[i].preview;
	thumbnail.hText = thumbURLs[i].hText;
	thumbnail.pText = thumbURLs[i].pText;
	thumbnail.domElement.style.backgroundImage = thumbnail.preview;
	thumbnail.number = i;
	thumbnailStorage.push(thumbnail);
	updateBigImage(thumbnail, thumbURLs[i]);
}

arrowLeft.addEventListener('click', function () {
	if (currentThumbNumber > 0) {
		galleryBigImage.style.backgroundImage = thumbnailStorage[currentThumbNumber-1].fullPic;
		galleryDescH.innerHTML = thumbnailStorage[currentThumbNumber-1].hText;
		galleryDescP.innerHTML = thumbnailStorage[currentThumbNumber-1].pText;
		currentThumbNumber = currentThumbNumber - 1;
	}
});

arrowRight.addEventListener('click', function () {
	if (currentThumbNumber < thumbnailStorage.length) {
		galleryBigImage.style.backgroundImage = thumbnailStorage[currentThumbNumber+1].fullPic;
		galleryDescH.innerHTML = thumbnailStorage[currentThumbNumber+1].hText;
		galleryDescP.innerHTML = thumbnailStorage[currentThumbNumber+1].pText;
		currentThumbNumber = currentThumbNumber + 1;
	}
});

function updateBigImage(thumbnail, URLs) {
	thumbnail.domElement.addEventListener('click', function () {
	galleryBigImage.style.backgroundImage = URLs.fullPic;
	galleryDescH.innerHTML = URLs.hText;
	galleryDescP.innerHTML = URLs.pText;
	currentThumbNumber = thumbnail.number;
	});
};