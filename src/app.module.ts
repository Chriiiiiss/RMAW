import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RickMortyApiModule } from './modules/rick-morty-api/rick-morty-api.module';

@Module({
  imports: [RickMortyApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
