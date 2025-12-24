import axios from "axios";

export async function getTopNetflixMovies({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `https://whats-good.onrender.com/netflix/movies?page=${pageParam}`
  );
  return response.data;
}
