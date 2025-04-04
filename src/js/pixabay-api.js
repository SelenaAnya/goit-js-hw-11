import axios from "axios";

const API_KEY = "49640008-31ceefc585112d8f472f2aefe";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
    return response.data;
  } catch (error) {
    console.error("Помилка під час отримання зображень:", error);
    return null;
  }
}