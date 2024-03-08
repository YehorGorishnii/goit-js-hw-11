import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const KEY = '42701806-8f4bc33de61eec272077c73af';
const URL = 'https://pixabay.com/api/';

export function findImage(QUERY) {
  const LINK = `${URL}?key=${KEY}&q=${QUERY}&image_type=photo&orientation=horizontal&savesearch=true`;
  return fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response error ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#FFFFFF',
          timeout : 4000,
          position : 'topRight',
        });
      }
      return data;
    })
    .catch(error => console.log(`Error: ${error}`));
}
