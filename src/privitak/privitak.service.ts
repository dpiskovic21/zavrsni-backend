import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePrivitakDTO } from './dto';
import * as fs from 'fs/promises';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrivitakService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePrivitakDTO, putanja: string) {
    const { zadatakId } = dto;
    if (!zadatakId || isNaN(parseInt(zadatakId)))
      throw new Error('Invalid zadatakId');

    return this.prisma.privitak.create({
      data: {
        zadatakId: parseInt(zadatakId),
        putanja,
      },
    });
  }

  find(id: string): Promise<Buffer> {
    return fs.readFile('./upload/' + id);
  }

  remove(id: string) {
    return fs.rm('./upload/' + id);
  }
}
