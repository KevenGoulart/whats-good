import axios from "axios";

export async function getTopHboShows({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `http://localhost:3333/hbo/shows?page=${pageParam}`
  );
  return response.data;
}
