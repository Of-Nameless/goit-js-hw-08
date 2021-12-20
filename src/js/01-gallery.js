import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const container = document.querySelector(".gallery");

const markupGallery = createGalleryMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markupGallery);

function createGalleryMarkup(gallery) {
   return gallery
    .map(({preview, original, description}) => { 
      return `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
    })
    .join(""); 
};

new SimpleLightbox('.gallery__item', {captionsData:'alt', captionDelay:'250', captionType: 'alt', scrollZoomFactor: 0.5, captionPosition: 'bottom',});   

// console.log(galleryItems);
