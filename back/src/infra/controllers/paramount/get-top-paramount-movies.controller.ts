import { Controller, Get, Query } from '@nestjs/common';
import { GetTopParamountMoviesService } from 'src/domain/services/paramount/get-top-paramount-movies';

@Controller('paramount')
export class GetTopParamountMoviesController {
  constructor(
    private readonly getTopParamountMoviesService: GetTopParamountMoviesService,
  ) {}

  @Get('movies')
  getTopParamountMovies(@Query('page') page?: number) {
    return this.getTopParamountMoviesService.getTopParamountMovies({ page });
  }
}
