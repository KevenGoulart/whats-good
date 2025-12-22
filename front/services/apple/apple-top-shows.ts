import axios from "axios";

export async function getTopAppleShows() {
  const response = await axios.get("http://localhost:3333/apple/shows");
  return response.data;
}
