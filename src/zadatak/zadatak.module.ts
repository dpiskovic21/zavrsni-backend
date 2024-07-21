import { Module } from '@nestjs/common';
import { ZadatakService } from './zadatak.service';
import { ZadatakController } from './zadatak.controller';

@Module({
  controllers: [ZadatakController],
  providers: [ZadatakService],
})
export class ZadatakModule {}
