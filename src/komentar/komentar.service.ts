import { Injectable } from '@nestjs/common';
import { CreateKomentarDTO, UpdateKomentarDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class KomentarService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateKomentarDTO) {
    return this.prisma.komentar.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.komentar.findMany();
  }

  findOne(id: number) {
    return this.prisma.komentar.findUniqueOrThrow({
      where: { id },
    });
  }

  update(id: number, dto: UpdateKomentarDTO) {
    return this.prisma.komentar.update({
      where: { id },
      data: dto,
    });
  }

  remove(id: number) {
    return this.prisma.komentar.delete({
      where: { id },
    });
  }
}
