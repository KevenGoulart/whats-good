import axios from "axios";

export async function getTopDisneyMovies({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `http://localhost:3333/disney/movies?page=${pageParam}`
  );
  return response.data;
}
