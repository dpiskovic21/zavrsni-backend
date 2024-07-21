import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { KorisnikModule } from './korisnik/korisnik.module';
import { ProjektModule } from './projekt/projekt.module';
import { ZadatakModule } from './zadatak/zadatak.module';
import { KomentarModule } from './komentar/komentar.module';
import { PrivitakModule } from './privitak/privitak.module';

@Module({
  imports: [PrismaModule, KorisnikModule, ProjektModule, ZadatakModule, KomentarModule, PrivitakModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
