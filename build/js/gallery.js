"use strict";var l=[{fullPic:"url(./build/images/gallery/fullpic1.png)",preview:"url(./build/images/gallery/thumbnail1.png)"},{fullPic:"url(./build/images/gallery/fullpic2.png)",preview:"url(./build/images/gallery/thumbnail2.png)"},{fullPic:"url(./build/images/gallery/fullpic3.png)",preview:"url(./build/images/gallery/thumbnail3.png)"},{fullPic:"url(./build/images/gallery/fullpic4.png)",preview:"url(./build/images/gallery/thumbnail4.png)"},{fullPic:"url(./build/images/gallery/fullpic5.png)",preview:"url(./build/images/gallery/thumbnail5.png)"}],i=document.querySelector(".gallery__image-wrapper"),e=document.querySelectorAll(".thumbnails-wrapper__thumbnail");i.style.backgroundImage=l[0].fullPic;for(var u=0;u<e.length;u++){var r={};r.domElement=e[u],r.fullPic=l[u].fullPic,r.preview=l[u].preview,r.domElement.style.backgroundImage=r.preview,a(r,r.fullPic)}function a(l,e){l.domElement.addEventListener("click",function(){i.style.backgroundImage=e})}