import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const searchInput = document.querySelector("input[name='search-text']");
const loadingMessage = document.querySelector(".loading-message");

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

  if (query.length < 3) {
    iziToast.warning({
      title: "Увага",
      message: "Мінімальна довжина пошуку - 3 символи!",
      position: "topRight",
    });
    return;
  }

  //  "Loading images..."
  loadingMessage.style.display = "block";

  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(query);

    if (!data || data.hits.length === 0) {
      iziToast.error({
        title: "Помилка",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    form.reset();
    createGallery(data.hits);

  } catch (error) {
    console.error("Помилка під час отримання зображень:", error);
  } finally {
    // ✅ Ховаємо повідомлення після завантаження
    loadingMessage.style.display = "none";
    hideLoader();
  }
});

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

  // Effect in focus
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

  // Hovering effect
  searchButton.addEventListener("mouseover", () => {
    searchButton.style.backgroundColor = "#61dafb";
  });

  searchButton.addEventListener("mouseout", () => {
    searchButton.style.backgroundColor = "#4E35DE";
  });

  // Effect on click
  searchButton.addEventListener("mousedown", () => {
    searchButton.style.transform = "scale(0.95)";
  });

  searchButton.addEventListener("mouseup", () => {
    searchButton.style.transform = "scale(1)";
  });
}

// const loadingMessage = document.querySelector(".loading-message");

// form.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const query = searchInput.value.trim();

//   if (!query) {
//     iziToast.warning({
//       title: "Увага",
//       message: "Поле пошуку не може бути порожнім!",
//       position: "topRight",
//     });
//     return;
//   }

//   // "Loading images..."
//   loadingMessage.style.display = "block";

//   showLoader();
//   clearGallery();

//   try {
//     const data = await getImagesByQuery(query);

//     if (!data || data.hits.length === 0) {
//       iziToast.error({
//         title: "Помилка",
//         message: "Sorry, there are no images matching your search query. Please try again!",
//         position: "topRight",
//       });
//       return;
//     }

//     createGallery(data.hits);

//   } catch (error) {
//     console.error("Помилка під час отримання зображень:", error);
//   } finally {
    
//     loadingMessage.style.display = "none";
//     hideLoader();
//   }
// });
