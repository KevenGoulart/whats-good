import { Controller, Get, Query } from '@nestjs/common';
import { GetTopAppleShowsService } from 'src/domain/services/apple/get-top-apple-shows';

@Controller('apple')
export class GetTopAppleShowsController {
  constructor(
    private readonly getTopAppleShowsService: GetTopAppleShowsService,
  ) {}

  @Get('shows')
  getTopAppleShows(@Query('page') page?: number) {
    return this.getTopAppleShowsService.getTopAppleShows({ page });
  }
}
