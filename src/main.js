import { createGallery } from "./js/render-functions.js";
import { findImage } from "./js/pixabay-api.js";



const FORM = document.querySelector('.form');

const gallery = document.querySelector('.gallery');
// const loader = document.querySelector('.loader');

FORM.addEventListener('submit', processSearch);

function processSearch(event) {
  event.preventDefault();

  const FORM = event.currentTarget;
  const QUERY = FORM.elements.query.value.trim();

  if (QUERY === '') {
    console.log('error');
    return;
  }

  
  findImage(QUERY).then(arr => { 
    gallery.innerHTML = createGallery(arr);
    FORM.reset()
  }).catch(error => {
    console.error('Error:', error);
  });

}



