import axios from "axios";

export async function getTopParamountMovies({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `https://whats-good.onrender.com/paramount/movies?page=${pageParam}`
  );
  return response.data;
}
