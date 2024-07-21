import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ZadatakService } from './zadatak.service';
import { CreateZadatakDTO, UpdateZadatakDTO } from './dto';

@Controller('zadatak')
export class ZadatakController {
  constructor(private readonly zadatakService: ZadatakService) {}

  @Post()
  create(@Body() dto: CreateZadatakDTO) {
    return this.zadatakService.create(dto);
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
  update(@Param('id') id: string, @Body() dto: UpdateZadatakDTO) {
    return this.zadatakService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zadatakService.remove(+id);
  }
}
