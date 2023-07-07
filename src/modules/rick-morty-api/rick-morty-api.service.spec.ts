import { Test, TestingModule } from '@nestjs/testing';
import { RickMortyApiService } from './rick-morty-api.service';
import { DataService } from './data.service';

describe('RickMortyApiService', () => {
  let service: RickMortyApiService;

  beforeEach(async () => {
    const dataServiceMock = {};

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RickMortyApiService,
        { provide: DataService, useValue: dataServiceMock },
      ],
    }).compile();

    service = module.get<RickMortyApiService>(RickMortyApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
