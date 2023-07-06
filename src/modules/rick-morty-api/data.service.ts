import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { TCharacter, TCharacters } from './types/characters.types';
import { Axios, AxiosResponse } from 'axios';

@Injectable()
export class DataService {
  constructor(private readonly httpService: HttpService) {}

  private formatData(data: any): TCharacters {
    const items = data.map((item: TCharacter) => {
      return {
        name: item.name,
        status: item.status,
        species: item.species,
        gender: item.gender,
        image: item.image,
      };
    });

    return items;
  }

  async fetchAllChars(url: string): Promise<any> {
    let data = [];
    data = await this.fetchPage(url, data);
    return JSON.stringify(data);
  }

  private async fetchPage(url: string, data: any): Promise<any> {
    const response = await this.fetchUrl(url);
    data = [...data, ...this.formatData(response.results)];

    this.formatData(response.results);
    if (response.info.next) {
      return await this.fetchPage(response.info.next, data);
    }
    return data;
  }

  async fetchUrl(url: string): Promise<any> {
    try {
      const response: AxiosResponse<string> = await lastValueFrom(
        this.httpService.get(url),
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
