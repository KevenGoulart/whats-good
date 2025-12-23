import { Controller, Get, Query } from '@nestjs/common';
import { GetTopNetflixShowsService } from 'src/domain/services/netflix/get-top-netflix-shows';

@Controller('netflix')
export class GetTopNetflixShowsController {
  constructor(
    private readonly getTopNetflixShowsService: GetTopNetflixShowsService,
  ) {}

  @Get('shows')
  getTopNetflixShows(@Query('page') page?: number) {
    return this.getTopNetflixShowsService.getTopNetflixShows({ page });
  }
}
