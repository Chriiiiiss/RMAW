import { Module } from '@nestjs/common';
import { RickMortyApiController } from './rick-morty-api.controller';
import { RickMortyApiService } from './rick-morty-api.service';
import { HttpModule } from '@nestjs/axios';
import { DataService } from './data.service';

@Module({
  imports: [HttpModule],
  controllers: [RickMortyApiController],
  providers: [RickMortyApiService, DataService],
})
export class RickMortyApiModule {}
