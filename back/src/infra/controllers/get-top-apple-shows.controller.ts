import { Controller, Get } from '@nestjs/common';
import { GetTopAppleShowsService } from 'src/domain/services/get-top-apple-shows';

@Controller('apple')
export class GetTopAppleShowsController {
  constructor(
    private readonly getTopAppleShowsService: GetTopAppleShowsService,
  ) {}

  @Get('shows')
  getTopAppleShows() {
    return this.getTopAppleShowsService.getTopAppleShows();
  }
}
