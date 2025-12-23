import { Controller, Get, Query } from '@nestjs/common';
import { GetTopDisneyMoviesService } from 'src/domain/services/disney/get-top-disney-movies';

@Controller('disney')
export class GetTopDisneyMoviesController {
  constructor(
    private readonly getTopDisneyMoviesService: GetTopDisneyMoviesService,
  ) {}

  @Get('movies')
  getTopDisneyMovies(@Query('page') page?: number) {
    return this.getTopDisneyMoviesService.getTopDisneyMovies({ page });
  }
}
