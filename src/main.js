import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const searchInput = document.querySelector("input[name='search-text']");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const query = searchInput.value.trim();
  
  if (!query) {
    iziToast.warning({
      title: "Увага",
      message: "Поле пошуку не може бути порожнім!",
      position: "topRight",
    });
    return;
  }

  showLoader();
  clearGallery();

  const data = await getImagesByQuery(query);
  hideLoader();

  if (!data || data.hits.length === 0) {
    iziToast.error({
      title: "Помилка",
      message: "Sorry, there are no images matching your search query. Please try again!",
      position: "topRight",
    });
    return;
  }

  createGallery(data.hits);
// });


// const searchInput = document.querySelector("input[name='search-text']");

if (searchInput) {
  searchInput.style.width = "300px";
  searchInput.style.padding = "10px";
  searchInput.style.border = "2px solid #4E35DE";
  searchInput.style.borderRadius = "8px";
  searchInput.style.fontSize = "16px";
  searchInput.style.color = "#333";
  searchInput.style.backgroundColor = "#f9f9f9";
  searchInput.style.outline = "none";
  searchInput.style.transition = "0.3s";

  // Ефект при фокусі
  searchInput.addEventListener("focus", () => {
    searchInput.style.borderColor = "#61dafb";
    searchInput.style.boxShadow = "0 0 10px rgba(97, 218, 251, 0.5)";
  });

  searchInput.addEventListener("blur", () => {
    searchInput.style.borderColor = "#4E35DE";
    searchInput.style.boxShadow = "none";
  });
}

const searchButton = document.querySelector("button[type='submit']");

if (searchButton) {
  searchButton.style.padding = "12px 24px";
  searchButton.style.fontSize = "16px";
  searchButton.style.fontWeight = "bold";
  searchButton.style.color = "#ffffff";
  searchButton.style.backgroundColor = "#4E35DE";
  searchButton.style.border = "none";
  searchButton.style.borderRadius = "8px";
  searchButton.style.cursor = "pointer";
  searchButton.style.transition = "0.3s";

  // Ефект при наведенні
  searchButton.addEventListener("mouseover", () => {
    searchButton.style.backgroundColor = "#61dafb";
  });

  searchButton.addEventListener("mouseout", () => {
    searchButton.style.backgroundColor = "#4E35DE";
  });

  // Ефект при кліку
  searchButton.addEventListener("mousedown", () => {
    searchButton.style.transform = "scale(0.95)";
  });

  searchButton.addEventListener("mouseup", () => {
    searchButton.style.transform = "scale(1)";
  });
}

// const form = document.querySelector("form");

if (form) {
  form.style.alignItems = "center";
  form.style.gap = "16px";
  form.style.position = "absolute";
  form.style.top = "36px";
  form.style.margin = "0 auto";
  form.style.marginBottom = "32px";
  form.style.transform = "translate(50%)";
}  
});
