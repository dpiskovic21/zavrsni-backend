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
import { KorisnikService } from 'src/korisnik/korisnik.service';
import { PrijavaDTO } from './dto';

@Controller('autorizacija')
export class AutorizacijaController {
  constructor(private korisnikService: KorisnikService) {}

  @Post('prijava')
  async prijava(@Body() dto: PrijavaDTO) {
    const { email, lozinka } = dto;
    try {
      return await this.korisnikService.prijava(email, lozinka);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Post('registracija')
  async registracija(@Body() registracijaDTO) {
    try {
      return await this.korisnikService.create(registracijaDTO);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
