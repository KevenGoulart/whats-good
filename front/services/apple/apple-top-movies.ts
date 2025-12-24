import axios from "axios";

export async function getTopAppleMovies({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `https://whats-good.onrender.com/apple/movies?page=${pageParam}`
  );
  return response.data;
}
