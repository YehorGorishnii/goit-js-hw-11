import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGallery } from './js/render-functions.js';
import { findImage } from './js/pixabay-api.js';

const FORM = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let galleryLightbox = new SimpleLightbox('.gallery div ', {
  captionsData: 'alt',
  captionDelay: 250,
});

FORM.addEventListener('submit', processSearch);

function processSearch(event) {
  event.preventDefault();

  const FORM = event.currentTarget;
  const QUERY = FORM.elements.query.value.trim();

  loader.textContent = 'Loading images, please wait...'
  loader.style.display = 'flex';

  if (QUERY === '') {
     iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#FFFFFF',
      timeout: 4000,
      position: 'topRight',
      
    })
    
    setTimeout(() => loader.style.display = 'none',1000)
    return
  }

  const interval = setTimeout(() => {
    findImage(QUERY)
    .then(arr => {
      gallery.innerHTML = createGallery(arr);
      FORM.reset();
      galleryLightbox.refresh();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  },1000);
  

}
