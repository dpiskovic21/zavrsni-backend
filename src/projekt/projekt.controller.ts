import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProjektService } from './projekt.service';
import { CreateProjektDTO, UpdateProjektDTO } from './dto';

@Controller('projekt')
export class ProjektController {
  constructor(private readonly projektService: ProjektService) {}

  @Post()
  create(@Body() dto: CreateProjektDTO) {
    return this.projektService.create(dto);
  }

  @Get()
  findAll() {
    return this.projektService.findAll();
  }

  @Get('/statistika')
  statistikaZaProjekte(@Query('datum') datum: string) {
    return this.projektService.getStatistikaZaProjekte(datum);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projektService.findOne(+id);
  }

  @Get(':id/statistika')
  statistika(@Param('id') id: string, @Query('datum') datum: string) {
    return this.projektService.getStatistika(+id, datum);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProjektDTO) {
    return this.projektService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projektService.remove(+id);
  }
}
