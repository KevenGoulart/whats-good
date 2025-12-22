import { Controller, Get } from '@nestjs/common';
import { GetTopHboShowsService } from 'src/domain/services/get-top-hbo-shows';

@Controller('hbo')
export class GetTopHboShowsController {
  constructor(private readonly getTopHboShowsService: GetTopHboShowsService) {}

  @Get('shows')
  getTopHboShows() {
    return this.getTopHboShowsService.getTopHboShows();
  }
}
