import axios from "axios";

export async function getTopHboMovies({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `http://localhost:3333/hbo/movies?page=${pageParam}`
  );
  return response.data;
}
