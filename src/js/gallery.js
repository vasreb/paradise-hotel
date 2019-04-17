"use strict";

const thumbURLs = [

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

class Gallery {
	constructor(thumbnailsNodes, imageUrls, {wrapper, mainImageNode, descHeadingNode, descTextNode, arrowLeft, arrowRight}) {
		this._nodes = {
			wrapper,
			descTextNode,
			descHeadingNode,
			mainImageNode,
			arrowLeft,
			arrowRight
		};
		this._nodes.mainImageNode.style.backgroundImage = imageUrls[0].fullPic;
		this._currentThumbIndex = 0;
		this._thumbnailStorage = [];
		[].forEach.call(thumbnailsNodes, (node, i) => {
			node.obj = {};
			for (let key in imageUrls[i]) {
				node.obj[key] = imageUrls[i][key];
				node.obj.number = i;
			};
			node.style.backgroundImage = node.obj.preview;
			this._thumbnailStorage.push(node);
		});
		this._addListeners();
	}
	_changeFullImage (type, thumbnail) {
		let newImgNum = 0;
		switch (type) {
			case 'back':
				newImgNum = this._currentThumbIndex - 1;
				this._currentThumbIndex--;
				break;
			case 'next':
				newImgNum = this._currentThumbIndex + 1;
				this._currentThumbIndex++;
				break;
			case 'click':
				newImgNum = thumbnail.number;
				this._currentThumbIndex = thumbnail.number;
		};
		let {fullPic, hText, pText} = this._thumbnailStorage[newImgNum].obj;
		this._nodes.mainImageNode.style.backgroundImage = fullPic;
		this._nodes.descHeadingNode.innerHTML = hText;
		this._nodes.descTextNode.innerHTML = pText;
	}
	_addListeners() {
		this._nodes.wrapper.addEventListener('click', (event) => {
			if (event.target == this._nodes.arrowLeft) {
				if (this._currentThumbIndex > 0) {
					this._changeFullImage('back');
				}
			}
			if (event.target == this._nodes.arrowRight) {
				if (this._currentThumbIndex < this._thumbnailStorage.length - 1) {
					this._changeFullImage('next');
				}
			}
			if (event.target.classList.contains('thumbnails-wrapper__thumbnail')) {
				this._changeFullImage('click', event.target.obj);
			}
		});
	}
}

const mainImageNode = document.querySelector('.gallery__image-wrapper');
const galleryDescHeading = document.querySelector('.desctiption__h');
const galleryDescText = document.querySelector('.description__p');
const thumbNodesList = document.querySelectorAll('.thumbnails-wrapper__thumbnail');
const arrowLeft = document.querySelector('.arrow--left');
const arrowRight = document.querySelector('.arrow--right');
const wrapper = document.querySelector('.gallery');

const galleryMainNodes = {
	wrapper,
	mainImageNode,
	descHeadingNode: galleryDescHeading,
	descTextNode: galleryDescText,
	arrowLeft, 
	arrowRight
};

let galleryManager = new Gallery(thumbNodesList, thumbURLs, galleryMainNodes);