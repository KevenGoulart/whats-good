import axios from "axios";

export async function getTopDisneyMovies() {
  const response = await axios.get("http://localhost:3333/disney/movies");
  return response.data;
}
