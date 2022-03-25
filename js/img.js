'use strict';

const MAIN = document.querySelector('main');
const ImagesArr = Array.from(MAIN.querySelectorAll('img'));
let imagesArrSize = ImagesArr.length;

ImagesArr.forEach(img => selectImageType(img));

function selectImageType(img) {

    let div = document.createElement('div');

    let imgClass = (
           img.className === 'full-width'
        || img.className === 'float-left'
        || img.className === 'float-right')
        ?  img.className : 'class-error';

    div.className = imgClass; console.log('imgClass =', imgClass);

    if(imgClass === 'class-error') div.innerHTML = `
        ERROR in image class name<br><br>
        class name <b><i>${img.className}</i></b> not supported`;
    else div.style.backgroundImage = `url(${img.src})`;
    
    MAIN.insertBefore(div, img);
    img.remove();
}