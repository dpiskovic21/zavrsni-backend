import { Injectable } from '@nestjs/common';
import { CreateKorisnikDTO, UpdateKorisnikDTO } from './dto';

@Injectable()
export class KorisnikService {
  create(dto: CreateKorisnikDTO) {
    return 'This action adds a new korisnik';
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
