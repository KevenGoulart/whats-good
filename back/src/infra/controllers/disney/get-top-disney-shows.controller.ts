import { Controller, Get, Query } from '@nestjs/common';
import { GetTopDisneyShowsService } from 'src/domain/services/disney/get-top-disney-shows';

@Controller('disney')
export class GetTopDisneyShowsController {
  constructor(
    private readonly getTopDisneyShowsService: GetTopDisneyShowsService,
  ) {}

  @Get('shows')
  getTopDisneyShows(@Query('page') page?: number) {
    return this.getTopDisneyShowsService.getTopDisneyShows({ page });
  }
}
