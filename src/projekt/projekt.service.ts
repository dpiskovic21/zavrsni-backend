import { Injectable } from '@nestjs/common';
import { CreateProjektDTO, UpdateProjektDTO } from './dto';

@Injectable()
export class ProjektService {
  create(dto: CreateProjektDTO) {
    return 'This action adds a new projekt';
  }

  findAll() {
    return `This action returns all projekt`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projekt`;
  }

  update(id: number, dto: UpdateProjektDTO) {
    return `This action updates a #${id} projekt`;
  }

  remove(id: number) {
    return `This action removes a #${id} projekt`;
  }
}
