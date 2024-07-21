import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { KorisnikService } from './korisnik.service';
import { CreateKorisnikDTO, UpdateKorisnikDTO } from './dto';
import { stat } from 'fs';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Controller('korisnik')
export class KorisnikController {
  constructor(private readonly korisnikService: KorisnikService) {}

  @Post()
  create(@Body() dto: CreateKorisnikDTO) {
    return this.korisnikService.create(dto);
  }

  @Get()
  findAll() {
    return this.korisnikService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.korisnikService.findOne(+id);
    } catch (e) {
      throw new BadRequestException('Korisnik ne postoji');
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateKorisnikDTO) {
    try {
      return await this.korisnikService.update(+id, dto);
    } catch (e) {
      throw new BadRequestException('Korisnik ne postoji');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.korisnikService.remove(+id);
    } catch (e) {
      throw new BadRequestException('Korisnik ne postoji');
    }
  }
}
