import axios from "axios";

export async function getTopDisneyMovies({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `https://whats-good.onrender.com/disney/movies?page=${pageParam}`
  );
  return response.data;
}
