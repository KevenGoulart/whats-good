import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TmdbMovie, TmdbPaginatedResponse } from '../types';

@Injectable()
export class GetTopAppleMoviesService {
  async getTopAppleMovies({ page = 1 }: { page?: number } = {}): Promise<
    TmdbMovie[]
  > {
    const { data } = await axios.get<TmdbPaginatedResponse<TmdbMovie>>(
      'https://api.themoviedb.org/3/discover/movie',
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: 'pt-BR',
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
