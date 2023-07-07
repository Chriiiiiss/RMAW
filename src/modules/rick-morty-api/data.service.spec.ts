import { HttpService } from '@nestjs/axios';
import { Test } from '@nestjs/testing';
import { DataService } from './data.service';
import { IApiResponses } from './interfaces/api.interfaces';

describe('DataService', () => {
  let dataService: DataService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let httpService: HttpService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        DataService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    dataService = moduleRef.get<DataService>(DataService);
    httpService = moduleRef.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(dataService).toBeDefined();
  });

  describe('fetchAllChars', () => {
    it('should return a stringified array of characters', async () => {
      const mockResult: IApiResponses = {
        info: { next: null, prev: null, pages: 1, count: 1 },
        results: [
          {
            id: 1,
            name: 'Test',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://test.com/image.png',
          },
        ],
      };
      jest.spyOn(dataService, 'fetchUrl').mockResolvedValue(mockResult);
      expect(await dataService.fetchAllChars('https://test.com')).toBe(
        JSON.stringify(dataService.formatCharactersData(mockResult.results)),
      );
    });
  });

  // TODO: Add more tests for other methods
});
