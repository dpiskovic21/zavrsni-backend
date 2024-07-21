import { Module } from '@nestjs/common';
import { AutorizacijaController } from './autorizacija.controller';
import { KorisnikModule } from 'src/korisnik/korisnik.module';

@Module({
  imports: [KorisnikModule],
  controllers: [AutorizacijaController],
  providers: [],
})
export class AutorizacijaModule {}
