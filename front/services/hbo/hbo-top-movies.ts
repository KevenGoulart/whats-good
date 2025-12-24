import axios from "axios";

export async function getTopHboMovies({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `https://whats-good.onrender.com/hbo/movies?page=${pageParam}`
  );
  return response.data;
}
