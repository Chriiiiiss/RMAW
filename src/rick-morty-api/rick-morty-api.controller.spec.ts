import { Test, TestingModule } from '@nestjs/testing';
import { RickMortyApiController } from './rick-morty-api.controller';

describe('RickMortyApiController', () => {
  let controller: RickMortyApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RickMortyApiController],
    }).compile();

    controller = module.get<RickMortyApiController>(RickMortyApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
