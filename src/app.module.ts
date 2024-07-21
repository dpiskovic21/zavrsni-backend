import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { KorisnikModule } from './korisnik/korisnik.module';
import { ProjektModule } from './projekt/projekt.module';

@Module({
  imports: [PrismaModule, KorisnikModule, ProjektModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
