import { Injectable } from '@nestjs/common';
import { CreateProjektDTO, UpdateProjektDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatusProjekta, StatusZadatka } from '@prisma/client';

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

  async getStatistika(id: number, datum: string) {
    let where: any = id != -1 ? { projektId: id } : undefined;
    if (datum) {
      const d = new Date(datum);
      where = {
        ...where,
        datumIzrade: {
          gt: new Date(d.getFullYear(), d.getMonth()),
          lte: new Date(d.getFullYear(), d.getMonth() + 1),
        },
      };
    }
    const sviZadaci = await this.prisma.zadatak.findMany({
      where,
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
        zadatak.status === StatusZadatka.ZATVOREN &&
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

    return { korisniciSaBrojemZadataka, zakasnjeliRokovi };
  }

  async update(id: number, dto: UpdateProjektDTO) {
    await this.prisma.projekt.update({
      where: { id },
      data: {
        status: (dto.status as StatusProjekta) ?? undefined,
        naziv: dto.naziv ?? undefined,
      },
    });

    if (dto.voditelji) {
      await this.prisma.voditeljProjekta.deleteMany({
        where: { projektId: id },
      });

      await this.prisma.voditeljProjekta.createMany({
        data: dto.voditelji.map((k) => ({
          korisnikId: k,
          projektId: id,
        })),
      });
    }

    return this.prisma.projekt.findUnique({
      where: { id },
      include: { voditelji: true },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} projekt`;
  }
}
