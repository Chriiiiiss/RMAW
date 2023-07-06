import { Injectable } from '@nestjs/common';
import { env } from 'process';

@Injectable()
export class RickMortyApiService {
  getAllCharacters(): string {
    const url = env.RICK_MORTY_API_URL;

    console.log(url);
    return `This action returns all characters from ${url}`;
  }
}
