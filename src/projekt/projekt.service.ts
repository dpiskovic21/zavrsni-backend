import { Injectable } from '@nestjs/common';
import { CreateProjektDTO, UpdateProjektDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjektService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateProjektDTO) {
    const { naziv, voditelji } = dto;
    return this.prisma.projekt.create({
      data: {
        naziv,
        voditelji: {
          createMany: {
            data: voditelji.map((k) => ({ korisnikId: k })),
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.projekt.findMany();
  }

  findOne(id: number) {
    return this.prisma.projekt.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, dto: UpdateProjektDTO) {
    return `This action updates a #${id} projekt`;
  }

  remove(id: number) {
    return `This action removes a #${id} projekt`;
  }
}
