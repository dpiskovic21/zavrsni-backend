import { Module } from '@nestjs/common';
import { PrivitakService } from './privitak.service';
import { PrivitakController } from './privitak.controller';

@Module({
  controllers: [PrivitakController],
  providers: [PrivitakService],
})
export class PrivitakModule {}
