import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const KEY = '42701806-8f4bc33de61eec272077c73af';
const URL = 'https://pixabay.com/api/';

const loader = document.querySelector('.loader');

export function findImage(QUERY) {
  const LINK = `${URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&savesearch=true`;

  loader.style.display = 'flex';
  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response error ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      loader.style.display = 'none';

      if (data.hits.length === 0) {
         iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FFFFFF',
          timeout : 4000,
          position : 'topRight',
        })

        return;
      }
      return data;
    })
    .catch(error => console.log(`Error: ${error}`));
}
