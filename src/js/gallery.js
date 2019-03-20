"use strict";

var thumbSources = [

	{
		fullPic: 'url(./build/images/gallery/fullpic1.png)',
		preview: 'url(./build/images/gallery/thumbnail1.png)'
	},

	{
		fullPic: 'url(./build/images/gallery/fullpic2.png)',
		preview: 'url(./build/images/gallery/thumbnail2.png)'
	},

	{
		fullPic: 'url(./build/images/gallery/fullpic3.png)',
		preview: 'url(./build/images/gallery/thumbnail3.png)'
	},

	{
		fullPic: 'url(./build/images/gallery/fullpic4.png)',
		preview: 'url(./build/images/gallery/thumbnail4.png)'
	},

	{
		fullPic: 'url(./build/images/gallery/fullpic5.png)',
		preview: 'url(./build/images/gallery/thumbnail5.png)'
	}
];
	

var galleryBigImage = document.querySelector('.gallery__image-wrapper');
var thumbnailsList = document.querySelectorAll('.thumbnails-wrapper__thumbnail');
galleryBigImage.style.backgroundImage = thumbSources[0].fullPic;

for (var i = 0; i < thumbnailsList.length; i++) {
	var thumbnail = {};
	thumbnail.domElement = thumbnailsList[i];
	thumbnail.fullPic = thumbSources[i].fullPic;
	thumbnail.preview = thumbSources[i].preview;
	thumbnail.domElement.style.backgroundImage = thumbnail.preview;
	updateBigImage(thumbnail, thumbnail.fullPic);
}

function updateBigImage(thumbnail, fullSrc) {
	thumbnail.domElement.addEventListener('click', function () {
	galleryBigImage.style.backgroundImage = fullSrc;
	});
};