import { Injectable } from '@nestjs/common';
import { CreatePrivitakDTO } from './dto';

@Injectable()
export class PrivitakService {
  create(dto: CreatePrivitakDTO) {
    return 'This action adds a new privitak';
  }

  findAll() {
    return `This action returns all privitak`;
  }

  findOne(id: number) {
    return `This action returns a #${id} privitak`;
  }

  remove(id: number) {
    return `This action removes a #${id} privitak`;
  }
}
