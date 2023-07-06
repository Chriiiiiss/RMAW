import { Module } from '@nestjs/common';
import { RickMortyApiController } from './rick-morty-api.controller';
import { RickMortyApiService } from './rick-morty-api.service';

@Module({
  controllers: [RickMortyApiController],
  providers: [RickMortyApiService],
})
export class RickMortyApiModule {}
