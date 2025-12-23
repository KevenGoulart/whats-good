import axios from "axios";

export async function getTopPrimeShows({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `http://localhost:3333/prime/shows?page=${pageParam}`
  );
  return response.data;
}
