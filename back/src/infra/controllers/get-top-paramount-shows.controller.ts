import { Controller, Get } from '@nestjs/common';
import { GetTopParamountShowsService } from 'src/domain/services/get-top-paramount-shows';

@Controller('paramount')
export class GetTopParamountShowsController {
  constructor(
    private readonly getTopParamountShowsService: GetTopParamountShowsService,
  ) {}

  @Get('shows')
  getTopParamountShows() {
    return this.getTopParamountShowsService.getTopParamountShows();
  }
}
