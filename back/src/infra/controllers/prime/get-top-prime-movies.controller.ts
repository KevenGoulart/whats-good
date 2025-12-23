import { Controller, Get, Query } from '@nestjs/common';
import { GetTopPrimeMoviesService } from 'src/domain/services/prime/get-top-prime-movies';

@Controller('prime')
export class GetTopPrimeMoviesController {
  constructor(
    private readonly getTopPrimeMoviesService: GetTopPrimeMoviesService,
  ) {}

  @Get('movies')
  getTopPrimeMovies(@Query('page') page?: number) {
    return this.getTopPrimeMoviesService.getTopPrimeMovies({ page });
  }
}
