import axios from "axios";

export async function getTopDisneyShows() {
  const response = await axios.get("http://localhost:3333/disney/shows");
  return response.data;
}
