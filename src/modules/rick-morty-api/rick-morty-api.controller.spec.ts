import { Test, TestingModule } from '@nestjs/testing';
import { RickMortyApiController } from './rick-morty-api.controller';
import { RickMortyApiService } from './rick-morty-api.service';

describe('RickMortyApiController', () => {
  let controller: RickMortyApiController;

  beforeEach(async () => {
    const rickMortyApiServiceMock = {};

    const module: TestingModule = await Test.createTestingModule({
      controllers: [RickMortyApiController],
      providers: [
        { provide: RickMortyApiService, useValue: rickMortyApiServiceMock },
      ],
    }).compile();

    controller = module.get<RickMortyApiController>(RickMortyApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
