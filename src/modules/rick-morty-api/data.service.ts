import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private readonly httpService: HttpService) {}

  async formatData(url: string): Promise<any> {
    const res = await this.fetchUrl(url);
    const dataToJSON = JSON.stringify(res.data);

    return dataToJSON;
  }

  async fetchUrl(url: string): Promise<any> {
    const response = lastValueFrom(this.httpService.get(url), {
      defaultValue: { error: 'Can not fetch the API' },
    });

    return response;
  }
}
