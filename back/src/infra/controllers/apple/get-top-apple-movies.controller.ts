import { Controller, Get, Query } from '@nestjs/common';
import { GetTopAppleMoviesService } from 'src/domain/services/apple/get-top-apple-movies';

@Controller('apple')
export class GetTopAppleMoviesController {
  constructor(
    private readonly getTopAppleMoviesService: GetTopAppleMoviesService,
  ) {}

  @Get('movies')
  getTopAppleMovies(@Query('page') page?: number) {
    return this.getTopAppleMoviesService.getTopAppleMovies({ page });
  }
}
