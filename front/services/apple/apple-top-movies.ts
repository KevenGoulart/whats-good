import axios from "axios";

export async function getTopAppleMovies() {
  const response = await axios.get("http://localhost:3333/apple/movies");
  return response.data;
}
