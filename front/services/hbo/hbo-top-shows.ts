import axios from "axios";

export async function getTopHboShows() {
  const response = await axios.get("http://localhost:3333/hbo/shows");
  return response.data;
}
