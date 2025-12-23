import axios from "axios";

export async function getTopNetflixShows({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `http://localhost:3333/netflix/shows?page=${pageParam}`
  );
  return response.data;
}
