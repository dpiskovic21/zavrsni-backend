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
import { KomentarService } from './komentar.service';
import { CreateKomentarDTO, UpdateKomentarDTO } from './dto';

@Controller('komentar')
export class KomentarController {
  constructor(private readonly komentarService: KomentarService) {}

  @Post()
  async create(@Body() dto: CreateKomentarDTO) {
    try {
      return await this.komentarService.create(dto);
    } catch (e) {
      throw new BadRequestException('Zadatak ili korisnik ne postoje.');
    }
  }

  @Get()
  findAll() {
    return this.komentarService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.komentarService.findOne(+id);
    } catch (e) {
      throw new BadRequestException('Komentar ne postoji.');
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateKomentarDTO) {
    try {
      return await this.komentarService.update(+id, dto);
    } catch (e) {
      throw new BadRequestException('Komentar ne postoji.');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.komentarService.remove(+id);
    } catch (e) {
      throw new BadRequestException('Komentar ne postoji.');
    }
  }
}
