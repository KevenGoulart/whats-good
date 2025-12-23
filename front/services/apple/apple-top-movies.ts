import axios from "axios";

export async function getTopAppleMovies({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `http://localhost:3333/apple/movies?page=${pageParam}`
  );
  return response.data;
}
