"use strict";var thumbURLs=[{fullPic:"url(./build/images/gallery/fullpic1.png)",preview:"url(./build/images/gallery/thumbnail1.png)",hText:"Tque nam ex magnam",pText:"Lorem ipsum dolor sit amet,  adipisicing elit. Quae accusamus cum enim voluptate beatae amet."},{fullPic:"url(./build/images/gallery/fullpic2.png)",preview:"url(./build/images/gallery/thumbnail2.png)",hText:"Lorem ipsum dolor",pText:"Lorem ipsum dolor sit amet.  deserunt optio delectus ex similique, numquam, libero fugiat facere."},{fullPic:"url(./build/images/gallery/fullpic3.png)",preview:"url(./build/images/gallery/thumbnail3.png)",hText:"Consectetur adipisicing",pText:"Amet, consectetur adipisicing elit. Voluptatem sed neque pariatur, illum laborum cupiditate!"},{fullPic:"url(./build/images/gallery/fullpic4.png)",preview:"url(./build/images/gallery/thumbnail4.png)",hText:"Quas accusamus",pText:"Quas accusamus quasi nobis. Voluptatem sed neque pariatur, illum laborum cupiditate!"},{fullPic:"url(./build/images/gallery/fullpic5.png)",preview:"url(./build/images/gallery/thumbnail5.png)",hText:"Veritatis",pText:"Lorem ipsum dolor sit amet. Reprehenderit excepturi, tenetur, dolor aspernatur id iusto."}];const page=document.querySelector(".page"),galleryBigImage=document.querySelector(".gallery__image-wrapper"),galleryDescH=document.querySelector(".desctiption__h"),galleryDescP=document.querySelector(".description__p"),thumbnailsDOMList=document.querySelectorAll(".thumbnails-wrapper__thumbnail"),arrowLeft=document.querySelector(".arrow--left"),arrowRight=document.querySelector(".arrow--right");galleryBigImage.style.backgroundImage=thumbURLs[0].fullPic;var thumbnailStorage=[],currentThumbNumber=0;for(let e=0;e<thumbnailsDOMList.length;e++){var thumbnail={};for(let l in thumbURLs[e])thumbnail[l]=thumbURLs[e][l];thumbnail.domElement=thumbnailsDOMList[e],thumbnail.domElement.style.backgroundImage=thumbnail.preview,thumbnail.number=e,thumbnailStorage.push(thumbnail),addThumbnailsClickEvent(thumbnail,thumbURLs)}function addThumbnailsClickEvent(e,l){e.domElement.addEventListener("click",function(){changeFullImage(l,"click",e.number)})}function changeFullImage(e,l,u){switch(l){case"back":var t=currentThumbNumber-1;currentThumbNumber--;break;case"next":t=currentThumbNumber+1;currentThumbNumber++;break;case"click":t=u;currentThumbNumber=u}let{fullPic:a,hText:i,pText:r}=e[t];galleryBigImage.style.backgroundImage=a,galleryDescH.innerHTML=i,galleryDescP.innerHTML=r}arrowLeft.addEventListener("click",function(){currentThumbNumber>0&&changeFullImage(thumbnailStorage,"back")}),arrowRight.addEventListener("click",function(){currentThumbNumber<thumbnailStorage.length-1&&changeFullImage(thumbnailStorage,"next")});