import { Controller, Get } from '@nestjs/common';
import { GetTopParamountMoviesService } from 'src/domain/services/get-top-paramount-movies';

@Controller('paramount')
export class GetTopParamountMoviesController {
  constructor(
    private readonly getTopParamountMoviesService: GetTopParamountMoviesService,
  ) {}

  @Get('movies')
  getTopParamountMovies() {
    return this.getTopParamountMoviesService.getTopParamountMovies();
  }
}
