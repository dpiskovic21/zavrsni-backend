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
import { ZadatakService } from './zadatak.service';
import { CreateZadatakDTO, UpdateZadatakDTO } from './dto';

@Controller('zadatak')
export class ZadatakController {
  constructor(private readonly zadatakService: ZadatakService) {}

  @Post()
  async create(@Body() dto: CreateZadatakDTO) {
    try {
      return await this.zadatakService.create(dto);
    } catch (e) {
      throw new BadRequestException(
        'Projekt, izvršitelj ili izvjestitelj ne postoje. ',
      );
    }
  }

  @Get()
  findAll() {
    return this.zadatakService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zadatakService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateZadatakDTO) {
    try {
      return await this.zadatakService.update(+id, dto);
    } catch (e) {
      throw new BadRequestException('Izvršitelj ne postoji. ');
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zadatakService.remove(+id);
  }
}
