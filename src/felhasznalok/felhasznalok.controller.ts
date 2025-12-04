import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FelhasznalokService } from './felhasznalok.service';
import { CreateFelhasznalokDto } from './dto/create-felhasznalok.dto';
import { UpdateFelhasznalokDto } from './dto/update-felhasznalok.dto';

@Controller('felhasznalok')
export class FelhasznalokController {
  constructor(private readonly felhasznalokService: FelhasznalokService) {}

  @Post()
  create(@Body() createFelhasznalokDto: CreateFelhasznalokDto) {
    return this.felhasznalokService.create(createFelhasznalokDto);
  }

  @Get("with-posts")
  findAllWithPosts() {
    return this.felhasznalokService.findAllWithPosts();
  }

  @Get()
  findAll() {
    return this.felhasznalokService.findAll();
  }

  @Get("/basic-data")
  createBasicData() {
    return this.felhasznalokService.createBasicData()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.felhasznalokService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFelhasznalokDto: UpdateFelhasznalokDto) {
    return this.felhasznalokService.update(+id, updateFelhasznalokDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.felhasznalokService.remove(+id);
  }
}
