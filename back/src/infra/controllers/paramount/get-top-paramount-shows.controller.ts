import { Controller, Get, Query } from '@nestjs/common';
import { GetTopParamountShowsService } from 'src/domain/services/paramount/get-top-paramount-shows';

@Controller('paramount')
export class GetTopParamountShowsController {
  constructor(
    private readonly getTopParamountShowsService: GetTopParamountShowsService,
  ) {}

  @Get('shows')
  getTopParamountShows(@Query('page') page?: number) {
    return this.getTopParamountShowsService.getTopParamountShows({ page });
  }
}
