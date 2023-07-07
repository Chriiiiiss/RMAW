import { Controller, Get } from '@nestjs/common';
import { RickMortyApiService } from './rick-morty-api.service';

@Controller('rem')
export class RickMortyApiController {
  constructor(private readonly remService: RickMortyApiService) {}

  @Get('characters')
  async getAllCharacters(): Promise<string> {
    return await this.remService.findAllCharacters();
  }
}
