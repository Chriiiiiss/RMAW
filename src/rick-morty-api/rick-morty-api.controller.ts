import { Controller, Get } from '@nestjs/common';
import { RickMortyApiService } from './rick-morty-api.service';

@Controller('rem')
export class RickMortyApiController {
  constructor(private readonly remService: RickMortyApiService) {}

  @Get('characters')
  getAllCharacters(): string {
    return this.remService.getAllCharacters();
  }

  @Get()
  imAlive(): string {
    return 'I am alive!';
  }
}
