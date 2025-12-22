import { Controller, Get } from '@nestjs/common';
import { GetTopPrimeShowsService } from 'src/domain/services/get-top-prime-shows';

@Controller('prime')
export class GetTopPrimeShowsController {
  constructor(
    private readonly getTopPrimeShowsService: GetTopPrimeShowsService,
  ) {}

  @Get('shows')
  getTopPrimeShows() {
    return this.getTopPrimeShowsService.getTopPrimeShows();
  }
}
