import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BejegyzesekService } from './bejegyzesek.service';
import { CreateBejegyzesekDto } from './dto/create-bejegyzesek.dto';
import { UpdateBejegyzesekDto } from './dto/update-bejegyzesek.dto';

@Controller('bejegyzesek')
export class BejegyzesekController {
  constructor(private readonly bejegyzesekService: BejegyzesekService) {}

  @Post()
  create(@Body() createBejegyzesekDto: CreateBejegyzesekDto) {
    return this.bejegyzesekService.create(createBejegyzesekDto);
  }

  @Get("with-users")
  findAllWithUsers() {
    return this.bejegyzesekService.findAllWithUsers();
  }

  @Get()
  findAll() {
    return this.bejegyzesekService.findAll();
  }

  @Get("/basic-data")
  createBasicData() {
    return this.bejegyzesekService.createBasicData();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bejegyzesekService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBejegyzesekDto: UpdateBejegyzesekDto) {
    return this.bejegyzesekService.update(+id, updateBejegyzesekDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bejegyzesekService.remove(+id);
  }
}
