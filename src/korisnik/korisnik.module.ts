import { Module } from '@nestjs/common';
import { KorisnikService } from './korisnik.service';
import { KorisnikController } from './korisnik.controller';

@Module({
  controllers: [KorisnikController],
  providers: [KorisnikService],
})
export class KorisnikModule {}
