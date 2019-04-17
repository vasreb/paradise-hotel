"use strict";const thumbURLs=[{fullPic:"url(./build/images/gallery/fullpic1.png)",preview:"url(./build/images/gallery/thumbnail1.png)",hText:"Tque nam ex magnam",pText:"Lorem ipsum dolor sit amet,  adipisicing elit. Quae accusamus cum enim voluptate beatae amet."},{fullPic:"url(./build/images/gallery/fullpic2.png)",preview:"url(./build/images/gallery/thumbnail2.png)",hText:"Lorem ipsum dolor",pText:"Lorem ipsum dolor sit amet.  deserunt optio delectus ex similique, numquam, libero fugiat facere."},{fullPic:"url(./build/images/gallery/fullpic3.png)",preview:"url(./build/images/gallery/thumbnail3.png)",hText:"Consectetur adipisicing",pText:"Amet, consectetur adipisicing elit. Voluptatem sed neque pariatur, illum laborum cupiditate!"},{fullPic:"url(./build/images/gallery/fullpic4.png)",preview:"url(./build/images/gallery/thumbnail4.png)",hText:"Quas accusamus",pText:"Quas accusamus quasi nobis. Voluptatem sed neque pariatur, illum laborum cupiditate!"},{fullPic:"url(./build/images/gallery/fullpic5.png)",preview:"url(./build/images/gallery/thumbnail5.png)",hText:"Veritatis",pText:"Lorem ipsum dolor sit amet. Reprehenderit excepturi, tenetur, dolor aspernatur id iusto."}];class Gallery{constructor(e,t,{wrapper:r,mainImageNode:a,descHeadingNode:i,descTextNode:l,arrowLeft:u,arrowRight:s}){this._nodes={wrapper:r,descTextNode:l,descHeadingNode:i,mainImageNode:a,arrowLeft:u,arrowRight:s},this._nodes.mainImageNode.style.backgroundImage=t[0].fullPic,this._currentThumbIndex=0,this._thumbnailStorage=[],[].forEach.call(e,(e,r)=>{e.obj={};for(let a in t[r])e.obj[a]=t[r][a],e.obj.number=r;e.style.backgroundImage=e.obj.preview,this._thumbnailStorage.push(e)}),this._addListeners()}_changeFullImage(e,t){let r=0;switch(e){case"back":r=this._currentThumbIndex-1,this._currentThumbIndex--;break;case"next":r=this._currentThumbIndex+1,this._currentThumbIndex++;break;case"click":r=t.number,this._currentThumbIndex=t.number}let{fullPic:a,hText:i,pText:l}=this._thumbnailStorage[r].obj;this._nodes.mainImageNode.style.backgroundImage=a,this._nodes.descHeadingNode.innerHTML=i,this._nodes.descTextNode.innerHTML=l}_addListeners(){this._nodes.wrapper.addEventListener("click",e=>{e.target==this._nodes.arrowLeft&&this._currentThumbIndex>0&&this._changeFullImage("back"),e.target==this._nodes.arrowRight&&this._currentThumbIndex<this._thumbnailStorage.length-1&&this._changeFullImage("next"),e.target.classList.contains("thumbnails-wrapper__thumbnail")&&this._changeFullImage("click",e.target.obj)})}}const mainImageNode=document.querySelector(".gallery__image-wrapper"),galleryDescHeading=document.querySelector(".desctiption__h"),galleryDescText=document.querySelector(".description__p"),thumbNodesList=document.querySelectorAll(".thumbnails-wrapper__thumbnail"),arrowLeft=document.querySelector(".arrow--left"),arrowRight=document.querySelector(".arrow--right"),wrapper=document.querySelector(".gallery"),galleryMainNodes={wrapper:wrapper,mainImageNode:mainImageNode,descHeadingNode:galleryDescHeading,descTextNode:galleryDescText,arrowLeft:arrowLeft,arrowRight:arrowRight};let galleryManager=new Gallery(thumbNodesList,thumbURLs,galleryMainNodes);