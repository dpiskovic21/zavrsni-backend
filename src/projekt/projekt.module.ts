import { Module } from '@nestjs/common';
import { ProjektService } from './projekt.service';
import { ProjektController } from './projekt.controller';

@Module({
  controllers: [ProjektController],
  providers: [ProjektService],
})
export class ProjektModule {}
