import { Injectable } from '@nestjs/common';
import { CreateKorisnikDTO, UpdateKorisnikDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class KorisnikService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateKorisnikDTO) {
    const { lozinka, ...ostatak } = dto;
    const hash = await bcrypt.hash(lozinka, 10);

    return this.prisma.korisnik.create({
      data: {
        ...ostatak,
        hash,
      },
    });
  }

  findAll() {
    return this.prisma.korisnik.findMany({
      select: {
        id: true,
        ime: true,
        prezime: true,
        email: true,
        admin: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.korisnik.findUniqueOrThrow({
      where: { id },
      select: {
        id: true,
        ime: true,
        prezime: true,
        email: true,
        admin: true,
      },
    });
  }

  async update(id: number, dto: UpdateKorisnikDTO) {
    const { lozinka } = dto;
    const hash = await bcrypt.hash(lozinka, 10);

    return this.prisma.korisnik.update({
      where: { id },
      data: {
        hash,
      },
    });
  }

  remove(id: number) {
    return this.prisma.korisnik.delete({
      where: { id },
    });
  }
}
