import axios from "axios";

export async function getTopDisneyShows({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `http://localhost:3333/disney/shows?page=${pageParam}`
  );
  return response.data;
}
