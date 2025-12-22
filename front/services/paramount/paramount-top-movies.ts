import axios from "axios";

export async function getTopParamountMovies() {
  const response = await axios.get("http://localhost:3333/paramount/movies");
  return response.data;
}
