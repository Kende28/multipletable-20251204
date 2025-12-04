import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FelhasznalokModule } from './felhasznalok/felhasznalok.module';
import { BejegyzesekModule } from './bejegyzesek/bejegyzesek.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), FelhasznalokModule, BejegyzesekModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
