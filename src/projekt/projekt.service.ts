import { Injectable } from '@nestjs/common';
import { CreateProjektDTO, UpdateProjektDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Status } from '@prisma/client';

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
    return this.prisma.projekt.findMany({
      include: {
        voditelji: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.projekt.findUniqueOrThrow({
      where: { id },
      include: { voditelji: true, zadaci: true },
    });
  }

  async getStatistika(id: number) {
    const sviZadaci = await this.prisma.zadatak.findMany({
      where: { projektId: id },
      select: {
        rok: true,
        datumZavrsetka: true,
        status: true,
        izvrsitelj: {
          select: {
            id: true,
            ime: true,
            prezime: true,
          },
        },
      },
    });
    console.log(sviZadaci);
    const korisniciSaBrojemZadataka = sviZadaci.reduce((acc, zadatak) => {
      const { id, ime, prezime } = zadatak.izvrsitelj;
      if (!acc[id]) {
        acc[id] = {
          naziv: ime + ' ' + prezime,
          brojZadataka: 0,
        };
      }
      acc[id].brojZadataka += 1;
      return acc;
    }, {});
    const zakasnjeliRokovi = sviZadaci.reduce((acc, zadatak) => {
      if (
        zadatak.status === Status.ZATVOREN &&
        zadatak.rok < zadatak.datumZavrsetka
      ) {
        const { id, ime, prezime } = zadatak.izvrsitelj;
        if (!acc[id]) {
          acc[id] = {
            naziv: ime + ' ' + prezime,
            brojZadataka: 0,
          };
        }
        acc[id].brojZadataka += 1;
      }
      return acc;
    }, {});
    console.log(korisniciSaBrojemZadataka);
    console.log(zakasnjeliRokovi);
    return { korisniciSaBrojemZadataka, zakasnjeliRokovi };
  }

  update(id: number, dto: UpdateProjektDTO) {
    return `This action updates a #${id} projekt`;
  }

  remove(id: number) {
    return `This action removes a #${id} projekt`;
  }
}
