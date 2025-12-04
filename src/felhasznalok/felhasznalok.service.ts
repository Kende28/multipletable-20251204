import { Injectable } from '@nestjs/common';
import { CreateFelhasznalokDto } from './dto/create-felhasznalok.dto';
import { UpdateFelhasznalokDto } from './dto/update-felhasznalok.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FelhasznalokService {
  constructor(private prisma: PrismaService) {}

  create(createFelhasznalokDto: CreateFelhasznalokDto) {
    return this.prisma.felhasznalok.create({data: createFelhasznalokDto});
  }

  findAll() {
    return this.prisma.felhasznalok.findMany();
  }

  findOne(id: number) {
    return this.prisma.felhasznalok.findUnique({where: {id}});
  }

  update(id: number, updateFelhasznalokDto: UpdateFelhasznalokDto) {
    return this.prisma.felhasznalok.update({where: {id}, data: updateFelhasznalokDto});
  }

  remove(id: number) {
    return this.prisma.felhasznalok.delete({where: {id}});
  }

  createBasicData() {
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

  findAllWithPosts() {
    return this.prisma.felhasznalok.findMany({
      include: {
        blog: true
      }
    })
  }
}
