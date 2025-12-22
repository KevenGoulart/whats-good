import { Controller, Get } from '@nestjs/common';
import { GetTopDisneyMoviesService } from 'src/domain/services/get-top-disney-movies';

@Controller('disney')
export class GetTopDisneyMoviesController {
  constructor(
    private readonly getTopDisneyMoviesService: GetTopDisneyMoviesService,
  ) {}

  @Get('movies')
  getTopDisneyMovies() {
    return this.getTopDisneyMoviesService.getTopDisneyMovies();
  }
}
