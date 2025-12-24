import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TmdbMovie, TmdbPaginatedResponse } from '../types';

@Injectable()
export class GetTopDisneyMoviesService {
  async getTopDisneyMovies({ page = 1 }: { page?: number } = {}): Promise<
    TmdbMovie[]
  > {
    const { data } = await axios.get<TmdbPaginatedResponse<TmdbMovie>>(
      'https://api.themoviedb.org/3/discover/movie',
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: 'pt-BR',
          with_watch_providers: 337,
          watch_region: 'BR',
          sort_by: 'vote_average.desc',
          'vote_count.gte': 1000,
          page,
        },
      },
    );

    return data.results;
  }
}
