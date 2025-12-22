import axios from "axios";

export async function getTopParamountShows() {
  const response = await axios.get("http://localhost:3333/paramount/shows");
  return response.data;
}
