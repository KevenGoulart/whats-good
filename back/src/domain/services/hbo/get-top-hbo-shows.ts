import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { TmdbMovie, TmdbPaginatedResponse } from '../types';

@Injectable()
export class GetTopHboShowsService {
  async getTopHboShows({ page = 1 }: { page?: number } = {}): Promise<
    TmdbMovie[]
  > {
    const { data } = await axios.get<TmdbPaginatedResponse<TmdbMovie>>(
      'https://api.themoviedb.org/3/discover/tv',
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          language: 'pt-BR',
          with_watch_providers: 1899,
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
