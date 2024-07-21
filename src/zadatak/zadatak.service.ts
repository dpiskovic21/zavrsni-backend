import { Injectable } from '@nestjs/common';
import { CreateZadatakDTO, UpdateZadatakDTO } from './dto';

@Injectable()
export class ZadatakService {
  create(dto: CreateZadatakDTO) {
    return 'This action adds a new zadatak';
  }

  findAll() {
    return `This action returns all zadatak`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zadatak`;
  }

  update(id: number, dto: UpdateZadatakDTO) {
    return `This action updates a #${id} zadatak`;
  }

  remove(id: number) {
    return `This action removes a #${id} zadatak`;
  }
}
