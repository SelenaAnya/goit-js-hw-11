import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
let lightbox;

if (galleryContainer) {
  galleryContainer.style.display = "flex"; // Розташування в рядок
  galleryContainer.style.flexWrap = "wrap"; // Дозволяє елементам переноситися на наступний рядок при нестачі місця
  galleryContainer.style.gap = "16px"; // Відстань між елементами
  galleryContainer.style.justifyContent = "center"; // Центрування елементів
  galleryContainer.style.alignItems = "center"; // Вирівнювання по вертикалі
  galleryContainer.style.padding = "20px"; // Відступи
  galleryContainer.style.listStyle = "none"; // Видалення стилів списку
}

export function createGallery(images) {
  const markup = images.map(image => `
    <li class="gallery-item" style="list-style: none; margin-top: 108px">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" 
        style="max-width: 100%; height: auto; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
      </a>
      <div class="image-info" style="display: flex; justify-content: space-between; 
      text-align: center; font-size: 14px; padding: 4px 20px; border: 1px 0px 1px 1px solid #808080">
        <p>Likes ${image.likes}</p>
        <p>Views ${image.views}</p>
        <p>Comments ${image.comments}</p>
        <p>Downloads ${image.downloads}</p>
      </div>
    </li>
  `).join("");

  galleryContainer.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a");
  } else {
    lightbox.refresh();
  }
}


// const galleryContainer = document.querySelector(".gallery");

if (galleryContainer) {
  galleryContainer.style.display = "grid";
  galleryContainer.style.gridTemplateColumns = "repeat(3, 1fr)"; // 3 стовпці
  galleryContainer.style.gridTemplateRows = "repeat(3, auto)"; // 3 рядки
  galleryContainer.style.gap = "16px";
  galleryContainer.style.padding = "20px";
  galleryContainer.style.justifyContent = "center";
  galleryContainer.style.alignItems = "center";
  galleryContainer.style.backgroundColor = "#f5f5f5";
}

// Стилізація карток галереї
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
  item.style.overflow = "hidden";
  item.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  item.style.transition = "transform 0.3s ease-in-out";
  item.style.width = "100%"; // Автоматична ширина у контейнері

  item.addEventListener("mouseover", () => {
    item.style.transform = "scale(1.05)";
  });

  item.addEventListener("mouseout", () => {
    item.style.transform = "scale(1)";
  });
});

export function clearGallery() {
  galleryContainer.innerHTML = "";
}

export function showLoader() {
  document.querySelector(".loader").classList.add("visible");
}

export function hideLoader() {
  document.querySelector(".loader").classList.remove("visible");
}