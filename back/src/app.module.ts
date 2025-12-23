import { Module } from '@nestjs/common';
import { GetTopNetflixMoviesService } from './domain/services/netflix/get-top-netflix-movies';
import { GetTopNetflixMoviesController } from './infra/controllers/netflix/get-top-netflix-movies.controller';
import { ConfigModule } from '@nestjs/config';
import { GetTopHboMoviesController } from './infra/controllers/hbo/get-top-hbo-movies.controller';
import { GetTopHboMoviesService } from './domain/services/hbo/get-top-hbo-movies';
import { GetTopPrimeMoviesController } from './infra/controllers/prime/get-top-prime-movies.controller';
import { GetTopPrimeMoviesService } from './domain/services/prime/get-top-prime-movies';
import { GetTopDisneyMoviesController } from './infra/controllers/disney/get-top-disney-movies.controller';
import { GetTopDisneyMoviesService } from './domain/services/disney/get-top-disney-movies';
import { GetTopAppleMoviesController } from './infra/controllers/apple/get-top-apple-movies.controller';
import { GetTopAppleMoviesService } from './domain/services/apple/get-top-apple-movies';
import { GetTopParamountMoviesController } from './infra/controllers/paramount/get-top-paramount-movies.controller';
import { GetTopParamountMoviesService } from './domain/services/paramount/get-top-paramount-movies';
import { GetTopNetflixShowsController } from './infra/controllers/netflix/get-top-netflix-shows.controller';
import { GetTopNetflixShowsService } from './domain/services/netflix/get-top-netflix-shows';
import { GetTopPrimeShowsController } from './infra/controllers/prime/get-top-prime-shows.controller';
import { GetTopPrimeShowsService } from './domain/services/prime/get-top-prime-shows';
import { GetTopHboShowsController } from './infra/controllers/hbo/get-top-hbo-shows.controller';
import { GetTopHboShowsService } from './domain/services/hbo/get-top-hbo-shows';
import { GetTopDisneyShowsController } from './infra/controllers/disney/get-top-disney-shows.controller';
import { GetTopDisneyShowsService } from './domain/services/disney/get-top-disney-shows';
import { GetTopAppleShowsController } from './infra/controllers/apple/get-top-apple-shows.controller';
import { GetTopAppleShowsService } from './domain/services/apple/get-top-apple-shows';
import { GetTopParamountShowsController } from './infra/controllers/paramount/get-top-paramount-shows.controller';
import { GetTopParamountShowsService } from './domain/services/paramount/get-top-paramount-shows';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [
    GetTopNetflixMoviesController,
    GetTopNetflixShowsController,
    GetTopHboMoviesController,
    GetTopHboShowsController,
    GetTopPrimeMoviesController,
    GetTopPrimeShowsController,
    GetTopDisneyMoviesController,
    GetTopDisneyShowsController,
    GetTopAppleMoviesController,
    GetTopAppleShowsController,
    GetTopParamountMoviesController,
    GetTopParamountShowsController,
  ],
  providers: [
    GetTopNetflixMoviesService,
    GetTopNetflixShowsService,
    GetTopHboMoviesService,
    GetTopHboShowsService,
    GetTopPrimeMoviesService,
    GetTopPrimeShowsService,
    GetTopDisneyMoviesService,
    GetTopDisneyShowsService,
    GetTopAppleMoviesService,
    GetTopAppleShowsService,
    GetTopParamountMoviesService,
    GetTopParamountShowsService,
  ],
})
export class AppModule {}
