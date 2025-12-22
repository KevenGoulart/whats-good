import { Controller, Get } from '@nestjs/common';
import { GetTopAppleMoviesService } from 'src/domain/services/get-top-apple-movies';

@Controller('apple')
export class GetTopAppleMoviesController {
  constructor(
    private readonly getTopAppleMoviesService: GetTopAppleMoviesService,
  ) {}

  @Get('movies')
  getTopAppleMovies() {
    return this.getTopAppleMoviesService.getTopAppleMovies();
  }
}
