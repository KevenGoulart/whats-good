import { Controller, Get } from '@nestjs/common';
import { GetTopNetflixMoviesService } from 'src/domain/services/get-top-netflix-movies';

@Controller('netflix')
export class GetTopNetflixMoviesController {
  constructor(
    private readonly getTopNetflixMoviesService: GetTopNetflixMoviesService,
  ) {}

  @Get('movies')
  getTopNetflixMovies() {
    return this.getTopNetflixMoviesService.getTopNetflixMovies();
  }
}
