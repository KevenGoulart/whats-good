import axios from "axios";

export async function getTopParamountShows({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `http://localhost:3333/paramount/shows?page=${pageParam}`
  );
  return response.data;
}
