import { Controller, Get } from '@nestjs/common';
import { GetTopDisneyShowsService } from 'src/domain/services/get-top-disney-shows';

@Controller('disney')
export class GetTopDisneyShowsController {
  constructor(
    private readonly getTopDisneyShowsService: GetTopDisneyShowsService,
  ) {}

  @Get('shows')
  getTopDisneyShows() {
    return this.getTopDisneyShowsService.getTopDisneyShows();
  }
}
