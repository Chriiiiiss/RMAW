import { Injectable } from '@nestjs/common';
import { env } from 'process';
import { API_ENDPOINTS } from './types/api-endpoints.types';

@Injectable()
export class RickMortyApiService {
  getAllCharacters(): string {
    const url = new URL(API_ENDPOINTS.CHARACTER, env.RICK_MORTY_API_URL);

    return `This action returns all characters from Rick and Morty API`;
  }
}
