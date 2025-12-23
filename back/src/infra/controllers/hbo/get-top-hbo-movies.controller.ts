import { Controller, Get, Query } from '@nestjs/common';
import { GetTopHboMoviesService } from 'src/domain/services/hbo/get-top-hbo-movies';

@Controller('hbo')
export class GetTopHboMoviesController {
  constructor(
    private readonly getTopHboMoviesService: GetTopHboMoviesService,
  ) {}

  @Get('movies')
  getTopHboMovies(@Query('page') page?: number) {
    return this.getTopHboMoviesService.getTopHboMovies({ page });
  }
}
