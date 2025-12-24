import axios from "axios";

export async function getTopParamountShows({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `https://whats-good.onrender.com/paramount/shows?page=${pageParam}`
  );
  return response.data;
}
