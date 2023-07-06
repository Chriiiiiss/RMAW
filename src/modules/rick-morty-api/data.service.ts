import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private readonly httpService: HttpService) {}

  async fetchAllChars(url: string): Promise<any> {
    let data = [];
    data = await this.fetchPage(url, data);

    return JSON.stringify(data);
  }

  private async fetchPage(url: string, data: any): Promise<any> {
    const response = await this.fetchUrl(url);
    data = [...data, ...response.results];

    if (response.info.next) {
      return await this.fetchPage(response.info.next, data);
    }
    return data;
  }

  async fetchUrl(url: string): Promise<any> {
    try {
      const { data } = await lastValueFrom(this.httpService.get(url));
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
