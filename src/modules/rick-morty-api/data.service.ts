import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { TCharacter, TCharacters } from './types/characters.types';
import { AxiosResponse } from 'axios';
import { IApiResponses } from './interfaces/api.interfaces';

@Injectable()
export class DataService {
  constructor(private readonly httpService: HttpService) {}

  public formatData(data: Array<object>): TCharacters {
    return data.map((item: TCharacter) => ({
      id: item.id,
      name: item.name,
      status: item.status,
      species: item.species,
      gender: item.gender,
      image: item.image,
    }));
  }

  async fetchAllChars(url: string): Promise<string> {
    const data = await this.fetchPage(url, []);
    return JSON.stringify(data);
  }

  private async fetchPage(
    url: string,
    data: TCharacters | Array<null>,
  ): Promise<TCharacters> {
    const response = await this.fetchUrl(url);
    data = [...data, ...this.formatData(response.results)];

    if (response.info.next) {
      return await this.fetchPage(response.info.next, data);
    }
    return data;
  }

  async fetchUrl(url: string): Promise<IApiResponses> {
    try {
      const response: AxiosResponse<IApiResponses> = await lastValueFrom(
        this.httpService.get(url),
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
