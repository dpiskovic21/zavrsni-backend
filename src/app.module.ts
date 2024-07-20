import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { KorisnikModule } from './korisnik/korisnik.module';

@Module({
  imports: [PrismaModule, KorisnikModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
