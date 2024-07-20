import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { KorisnikService } from './korisnik.service';
import { CreateKorisnikDTO, UpdateKorisnikDTO } from './dto';

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
  findOne(@Param('id') id: string) {
    return this.korisnikService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateKorisnikDTO) {
    return this.korisnikService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.korisnikService.remove(+id);
  }
}
