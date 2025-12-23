import { Controller, Get, Query } from '@nestjs/common';
import { GetTopPrimeShowsService } from 'src/domain/services/prime/get-top-prime-shows';

@Controller('prime')
export class GetTopPrimeShowsController {
  constructor(
    private readonly getTopPrimeShowsService: GetTopPrimeShowsService,
  ) {}

  @Get('shows')
  getTopPrimeShows(@Query('page') page?: number) {
    return this.getTopPrimeShowsService.getTopPrimeShows({ page });
  }
}
