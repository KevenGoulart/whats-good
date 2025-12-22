import { Controller, Get } from '@nestjs/common';
import { GetTopHboMoviesService } from 'src/domain/services/get-top-hbo-movies';

@Controller('hbo')
export class GetTopHboMoviesController {
  constructor(
    private readonly getTopHboMoviesService: GetTopHboMoviesService,
  ) {}

  @Get('movies')
  getTopHboMovies() {
    return this.getTopHboMoviesService.getTopHboMovies();
  }
}
