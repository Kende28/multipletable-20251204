import { Injectable } from '@nestjs/common';
import { CreateBejegyzesekDto } from './dto/create-bejegyzesek.dto';
import { UpdateBejegyzesekDto } from './dto/update-bejegyzesek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BejegyzesekService {
  constructor(private prisma: PrismaService) {}
  
  async create(createBejegyzesekDto: CreateBejegyzesekDto) {
    return this.prisma.bejegyzesek.create({ data: createBejegyzesekDto });
  }

  async findAll() {
    return this.prisma.bejegyzesek.findMany();
  }

  async findOne(id: number) {
    return this.prisma.bejegyzesek.findUnique({ where: { id } });
  }

  async update(id: number, updateBejegyzesekDto: UpdateBejegyzesekDto) {
    return this.prisma.bejegyzesek.update({
      where: { id },
      data: updateBejegyzesekDto,
    });
  }

  async remove(id: number) {
    return this.prisma.bejegyzesek.delete({ where: { id } });
  }

  async createBasicData() {
    return this.prisma.bejegyzesek.createMany({
      data: [
        {
          title: 'BIG NEWS!',
          content: "IT'S IMPORTANT.",
          userId: 3,
        },
        {
          title: 'asd',
          content: 'asd',
          userId: 2,
        },
        { 
          title: 'Lorem Ipsum',
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel lorem velit. Etiam pretium ornare lacus, quis semper risus rhoncus ut. Phasellus interdum condimentum eros, non malesuada dolor ullamcorper vel. Aenean non blandit sapien. Suspendisse luctus pulvinar leo, non venenatis mi auctor id. Mauris ac venenatis justo, eu auctor est. Quisque eget massa a mauris consequat posuere nec sit amet ligula. Phasellus id purus non urna rutrum pellentesque at eget augue.", 
          userId: 3
        }
      ],
    });
  }

  async findAllWithUsers() {
    return this.prisma.bejegyzesek.findMany({
      include: {
        user: true
      }
    })
  }

  async removeByUserId(id: number) {
    return this.prisma.bejegyzesek.deleteMany({where: {userId: id}})
  }
}
