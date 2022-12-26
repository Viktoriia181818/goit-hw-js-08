// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import "simplelightbox/dist/simple-lightbox.min.css";


const galleryRefs = document.querySelector(".gallery");
galleryRefs.addEventListener("click", onShowBigImage);

(function createGalleryMarkup() {
  const elementCreateGallery = galleryItems
    .map(({ original, preview, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery--original" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    })
      
    .join("");
  galleryRefs.insertAdjacentHTML("beforeend", elementCreateGallery);
})();


function onShowBigImage(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  let totalImageSrc = e.target.dataset.source;

  const modal = simplelightbox.create(
    `<img src="${totalImageSrc}" width="800" height="600">`
  );
  modal.show();

  if (modal.visible()) {
    window.addEventListener("keydown", onPressKeyESC);
  }

  function onPressKeyESC(evnt) {
    if (evnt.code === "Escape") {
      modal.close();
      window.removeEventListener("keydown", onPressKeyESC);
    }
  }
}
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
