'use strict';

let curentIndex = 0;

const arrImage = [
  'https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg',
  'https://c4.wallpaperflare.com/wallpaper/131/774/322/background-pictures-nature-hd-images-1920x1200-wallpaper-preview.jpg',
  'https://c4.wallpaperflare.com/wallpaper/131/774/322/background-pictures-nature-hd-images-1920x1200-wallpaper-preview.jpg',
  'https://img.freepik.com/free-photo/blue-mountains-famous-tourism-scenery-lijiang_1417-1143.jpg',
];

//Part of Home Work

// const addImages = function(arr) {
//   let elem = document.querySelector('.nav');

//   for(let i = 0; i < arr.length; i++) {
//     elem.innerHTML += `<div class="point" onclick="goTo(${i})">`;
//   }

//   const element = document.querySelector('.point');
//   element.classList.add('active');
// }

// addImages(arrImage);

//End

function slide(step) {
  console.log(step)
  if(curentIndex === 0 && step === -1) {
    curentIndex = arrImage.length - 1;
  
  }
  if (curentIndex === arrImage.length && step === 1) {
    curentIndex = -1;

  }
  curentIndex = curentIndex + step;
  frame.classList.add('anime')
  setTimeout(function() {
    frame.classList.remove('anime');
  }, 2000)
  frame.style.backgroundImage = `url(${arrImage[curentIndex]})`;

  activePoint()
  
}

function goTo(index) {
  console.log(index)
  curentIndex = index;
  frame.classList.add('anime')
  setTimeout(function() {
    frame.classList.remove('anime');
  }, 2000)
  
  frame.style.backgroundImage = `url(${arrImage[index]})`;

  activePoint()
}



function activePoint() {
  document.querySelector('.active').classList.remove('active');
  document.querySelectorAll('div.dot')[curentIndex].classList.add('active');
}
