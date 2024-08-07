import { Injectable } from '@nestjs/common';
import { CreateZadatakDTO, UpdateZadatakDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prioritet, StatusZadatka } from '@prisma/client';

@Injectable()
export class ZadatakService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateZadatakDTO) {
    const { projektId, izvrsiteljId, izvjestiteljId, prioritet, ...ostalo } =
      dto;
    return this.prisma.zadatak.create({
      data: {
        ...ostalo,
        prioritet: prioritet as Prioritet,
        projekt: { connect: { id: projektId } },
        izvrsitelj: { connect: { id: izvrsiteljId } },
        izvjestitelj: { connect: { id: izvjestiteljId } },
      },
    });
  }

  findAll() {
    return this.prisma.zadatak.findMany();
  }

  findOne(id: number) {
    const poljaKorisnika = {
      select: {
        id: true,
        ime: true,
        prezime: true,
      },
    };
    return this.prisma.zadatak.findUniqueOrThrow({
      where: { id },
      include: {
        izvjestitelj: poljaKorisnika,
        izvrsitelj: poljaKorisnika,
        komentari: {
          include: {
            korisnik: poljaKorisnika,
          },
        },
        privitci: true,
      },
    });
  }

  update(id: number, dto: UpdateZadatakDTO) {
    let datumZavrsetka: Date;
    if (dto.status && dto.status == StatusZadatka.ZATVOREN) {
      datumZavrsetka = new Date();
    }

    let izvrsitelj;
    if (dto.izvrsiteljId) {
      izvrsitelj = { connect: { id: dto.izvrsiteljId } };
    }

    return this.prisma.zadatak.update({
      where: { id },
      data: {
        status: (dto.status as StatusZadatka) ?? undefined,
        datumZavrsetka: datumZavrsetka ?? undefined,
        izvrsitelj,
        opis: dto.opis ?? undefined,
      },
    });
  }

  remove(id: number) {
    return this.prisma.zadatak.delete({
      where: { id },
    });
  }
}
