import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  InternalServerErrorException,
  BadRequestException,
  Body,
} from '@nestjs/common';
import { PrivitakService } from './privitak.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreatePrivitakDTO } from './dto';

@Controller('privitak')
export class PrivitakController {
  constructor(private readonly privitakService: PrivitakService) {}

  @Get()
  findAll() {
    return this.privitakService.findAll();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(
    @Body() dto: CreatePrivitakDTO,
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    try {
      return await this.privitakService.create(
        dto,
        file.filename,
        file.originalname,
        file.mimetype,
      );
    } catch (e) {
      await this.privitakService.remove(file.filename);
      throw new BadRequestException('Zadatak ne postoji!');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.privitakService.find(id);
    } catch (e) {
      if (e.code === 'ENOENT') throw new BadRequestException('File not found');

      throw new InternalServerErrorException('Unknown server error.');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.privitakService.remove(id);
    } catch (e) {
      if (e.code === 'ENOENT') throw new BadRequestException('File not found');

      throw e;
    }
  }
}
