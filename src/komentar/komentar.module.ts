import { Module } from '@nestjs/common';
import { KomentarService } from './komentar.service';
import { KomentarController } from './komentar.controller';

@Module({
  controllers: [KomentarController],
  providers: [KomentarService],
})
export class KomentarModule {}
