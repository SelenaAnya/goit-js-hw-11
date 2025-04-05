import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function createGallery(images) {
  // Додаємо статичні елементи галереї
  galleryContainer.innerHTML = `
    <div class="gallery">
      <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
      <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
    </div>
  `;

  // Генерація динамічної розмітки
  const markup = images.map(image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy">
      </a>
      <div class="image-info">
        <p>❤️ ${image.likes}</p>
        <p>👁️ ${image.views}</p>
        <p>💬 ${image.comments}</p>
        <p>📥 ${image.downloads}</p>
      </div>
    </li>
  `).join("");

  galleryContainer.insertAdjacentHTML("beforeend", markup); // Додаємо нові зображення

  if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a");
  } else {
    lightbox.refresh();
  }
}

