import { Injectable } from '@nestjs/common';
import { CreateBejegyzesekDto } from './dto/create-bejegyzesek.dto';
import { UpdateBejegyzesekDto } from './dto/update-bejegyzesek.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BejegyzesekService {
  constructor(private prisma: PrismaService) {}
  create(createBejegyzesekDto: CreateBejegyzesekDto) {
    return this.prisma.bejegyzesek.create({ data: createBejegyzesekDto });
  }

  findAll() {
    return this.prisma.bejegyzesek.findMany();
  }

  findOne(id: number) {
    return this.prisma.bejegyzesek.findUnique({ where: { id } });
  }

  update(id: number, updateBejegyzesekDto: UpdateBejegyzesekDto) {
    return this.prisma.bejegyzesek.update({
      where: { id },
      data: updateBejegyzesekDto,
    });
  }

  remove(id: number) {
    return this.prisma.bejegyzesek.delete({ where: { id } });
  }

  createBasicData() {
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

  findAllWithUsers() {
    return this.prisma.bejegyzesek.findMany({
      include: {
        user: true
      }
    })
  }

}
