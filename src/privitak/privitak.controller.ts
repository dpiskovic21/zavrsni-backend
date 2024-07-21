import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  MethodNotAllowedException,
} from '@nestjs/common';
import { PrivitakService } from './privitak.service';
import { CreatePrivitakDTO } from './dto';

@Controller('privitak')
export class PrivitakController {
  constructor(private readonly privitakService: PrivitakService) {}

  @Post()
  create(@Body() dto: CreatePrivitakDTO) {
    return this.privitakService.create(dto);
  }

  @Get()
  findAll() {
    return this.privitakService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.privitakService.findOne(+id);
  }

  @Patch(':id')
  update() {
    return new MethodNotAllowedException();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.privitakService.remove(+id);
  }
}
