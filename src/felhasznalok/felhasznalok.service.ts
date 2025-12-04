import { Injectable } from '@nestjs/common';
import { CreateFelhasznalokDto } from './dto/create-felhasznalok.dto';
import { UpdateFelhasznalokDto } from './dto/update-felhasznalok.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FelhasznalokService {
  constructor(private prisma: PrismaService) {}

  async create(createFelhasznalokDto: CreateFelhasznalokDto) {
    return this.prisma.felhasznalok.create({data: createFelhasznalokDto});
  }

  async findAll() {
    return this.prisma.felhasznalok.findMany();
  }

  async findOne(id: number) {
    return this.prisma.felhasznalok.findUnique({where: {id}});
  }

  async update(id: number, updateFelhasznalokDto: UpdateFelhasznalokDto) {
    return this.prisma.felhasznalok.update({where: {id}, data: updateFelhasznalokDto});
  }

  async remove(id: number) {
    return this.prisma.felhasznalok.delete({where: {id}});
  }

  async createBasicData() {
    return this.prisma.felhasznalok.createMany({
      data: [
        {
          email: "gjakab@examp.com",
          nev: "Gipsz Jakab"
        },
        {
          email: "asdasd@asd.asd",
          nev: "asd"
        },
        {
          email: "lipsum@lorem.ipsum",
          nev: "Lorem Ipsum"
        }
      ]
    })
  }

  async findAllWithPosts() {
    return this.prisma.felhasznalok.findMany({
      include: {
        blog: true
      }
    })
  }
}
