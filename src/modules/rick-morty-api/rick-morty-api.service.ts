import { Injectable } from '@nestjs/common';
import { env } from 'process';
import { API_ENDPOINTS } from './interfaces/api-endpoints.interfaces';
import { DataService } from './data.service';

@Injectable()
export class RickMortyApiService {
  constructor(private readonly dataService: DataService) {}

  async findAllCharacters(): Promise<string> {
    const url = new URL(API_ENDPOINTS.CHARACTERS, env.RICK_MORTY_API_URL);

    const charactersData = this.dataService.fetchAllChars(url.href);

    return charactersData;
  }
}
