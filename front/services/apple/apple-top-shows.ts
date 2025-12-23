import axios from "axios";

export async function getTopAppleShows({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `http://localhost:3333/apple/shows?page=${pageParam}`
  );
  return response.data;
}
