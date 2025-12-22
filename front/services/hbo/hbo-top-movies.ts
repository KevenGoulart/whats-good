import axios from "axios";

export async function getTopHboMovies() {
  const response = await axios.get("http://localhost:3333/hbo/movies");
  return response.data;
}
