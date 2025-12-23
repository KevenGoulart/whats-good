import axios from "axios";

export async function getTopNetflixMovies({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `http://localhost:3333/netflix/movies?page=${pageParam}`
  );
  return response.data;
}
