import axios from "axios";

export async function getTopPrimeMovies({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `http://localhost:3333/prime/movies?page=${pageParam}`
  );
  return response.data;
}
