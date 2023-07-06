import { Test, TestingModule } from '@nestjs/testing';
import { RickMortyApiService } from './rick-morty-api.service';

describe('RickMortyApiService', () => {
  let service: RickMortyApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RickMortyApiService],
    }).compile();

    service = module.get<RickMortyApiService>(RickMortyApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
