import axios from "axios";

export async function getTopPrimeMovies() {
  const response = await axios.get("http://localhost:3333/prime/movies");
  return response.data;
}
