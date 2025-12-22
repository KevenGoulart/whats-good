import axios from "axios";

export async function getTopNetflixShows() {
  const response = await axios.get("http://localhost:3333/netflix/shows");
  return response.data;
}
