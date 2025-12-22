import axios from "axios";

export async function getTopNetflixMovies() {
    const response = await axios.get('http://localhost:3333/netflix/movies');
    return response.data
}