import axios from "axios";

export async function getTopPrimeShows() {
  const response = await axios.get("http://localhost:3333/prime/shows");
  return response.data;
}
