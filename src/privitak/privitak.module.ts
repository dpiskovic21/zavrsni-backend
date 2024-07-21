import { Module } from '@nestjs/common';
import { PrivitakService } from './privitak.service';
import { PrivitakController } from './privitak.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
  ],
  controllers: [PrivitakController],
  providers: [PrivitakService],
})
export class PrivitakModule {}
