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
    return `This action returns all korisnik`;
  }

  findOne(id: number) {
    return `This action returns a #${id} korisnik`;
  }

  update(id: number, dto: UpdateKorisnikDTO) {
    return `This action updates a #${id} korisnik`;
  }

  remove(id: number) {
    return `This action removes a #${id} korisnik`;
  }
}
