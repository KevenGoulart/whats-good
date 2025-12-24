import axios from "axios";

export async function getTopHboShows({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `https://whats-good.onrender.com/hbo/shows?page=${pageParam}`
  );
  return response.data;
}
