import { Controller, Get, Query } from '@nestjs/common';
import { GetTopNetflixMoviesService } from 'src/domain/services/netflix/get-top-netflix-movies';

@Controller('netflix')
export class GetTopNetflixMoviesController {
  constructor(
    private readonly getTopNetflixMoviesService: GetTopNetflixMoviesService,
  ) {}

  @Get('movies')
  getTopNetflixMovies(@Query('page') page?: number) {
    return this.getTopNetflixMoviesService.getTopNetflixMovies({ page });
  }
}
