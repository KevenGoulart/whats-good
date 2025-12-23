import { Controller, Get, Query } from '@nestjs/common';
import { GetTopHboShowsService } from 'src/domain/services/hbo/get-top-hbo-shows';

@Controller('hbo')
export class GetTopHboShowsController {
  constructor(private readonly getTopHboShowsService: GetTopHboShowsService) {}

  @Get('shows')
  getTopHboShows(@Query('page') page?: number) {
    return this.getTopHboShowsService.getTopHboShows({ page });
  }
}
