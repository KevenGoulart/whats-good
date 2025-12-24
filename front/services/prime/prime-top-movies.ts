import axios from "axios";

export async function getTopPrimeMovies({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `https://whats-good.onrender.com/prime/movies?page=${pageParam}`
  );
  return response.data;
}
