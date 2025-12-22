import { Controller, Get } from '@nestjs/common';
import { GetTopPrimeMoviesService } from 'src/domain/services/get-top-prime-movies';

@Controller('prime')
export class GetTopPrimeMoviesController {
  constructor(
    private readonly getTopPrimeMoviesService: GetTopPrimeMoviesService,
  ) {}

  @Get('movies')
  getTopPrimeMovies() {
    return this.getTopPrimeMoviesService.getTopPrimeMovies();
  }
}
