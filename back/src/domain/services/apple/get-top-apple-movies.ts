/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GetTopAppleMoviesService {
  async getTopAppleMovies({ page = 1 }: { page?: number } = {}) {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/discover/movie',
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          with_watch_providers: 350,
          watch_region: 'BR',
          sort_by: 'vote_average.desc',
          'vote_count.gte': 500,
          page,
        },
      },
    );

    return data.results;
  }
}
