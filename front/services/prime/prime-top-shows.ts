import axios from "axios";

export async function getTopPrimeShows({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `https://whats-good.onrender.com/prime/shows?page=${pageParam}`
  );
  return response.data;
}
