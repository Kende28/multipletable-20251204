import { Module } from '@nestjs/common';
import { BejegyzesekService } from './bejegyzesek.service';
import { BejegyzesekController } from './bejegyzesek.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BejegyzesekController],
  providers: [BejegyzesekService, PrismaService],
})
export class BejegyzesekModule {}
