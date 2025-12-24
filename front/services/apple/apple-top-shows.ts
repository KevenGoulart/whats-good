import axios from "axios";

export async function getTopAppleShows({
  pageParam = 1,
}: { pageParam?: number } = {}) {
  const response = await axios.get(
    `https://whats-good.onrender.com/apple/shows?page=${pageParam}`
  );
  return response.data;
}
