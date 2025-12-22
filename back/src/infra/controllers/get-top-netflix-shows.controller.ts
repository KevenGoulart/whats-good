import { Controller, Get } from '@nestjs/common';
import { GetTopNetflixShowsService } from 'src/domain/services/get-top-netflix-shows';

@Controller('netflix')
export class GetTopNetflixShowsController {
  constructor(
    private readonly getTopNetflixShowsService: GetTopNetflixShowsService,
  ) {}

  @Get('shows')
  getTopNetflixShows() {
    return this.getTopNetflixShowsService.getTopNetflixShows();
  }
}
