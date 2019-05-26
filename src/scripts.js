'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

const showImg = (event) => {
  event.preventDefault();
    let target = event.target;
    if (target.tagName !== "IMG") {
       return;
    }
      largeImg.src = target.parentNode.href;
   }
 thumbs.addEventListener('click', showImg);