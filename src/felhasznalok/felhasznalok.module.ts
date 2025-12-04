import { Module } from '@nestjs/common';
import { FelhasznalokService } from './felhasznalok.service';
import { FelhasznalokController } from './felhasznalok.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [FelhasznalokController],
  providers: [FelhasznalokService, PrismaService],
})
export class FelhasznalokModule {}
