import axios from "axios";

export async function getTopDisneyShows({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `https://whats-good.onrender.com/disney/shows?page=${pageParam}`
  );
  return response.data;
}
