-- DropForeignKey
ALTER TABLE "Komentar" DROP CONSTRAINT "Komentar_korisnikId_fkey";

-- DropForeignKey
ALTER TABLE "Komentar" DROP CONSTRAINT "Komentar_zadatakId_fkey";

-- DropForeignKey
ALTER TABLE "Privitak" DROP CONSTRAINT "Privitak_zadatakId_fkey";

-- DropForeignKey
ALTER TABLE "VoditeljProjekta" DROP CONSTRAINT "VoditeljProjekta_korisnikId_fkey";

-- DropForeignKey
ALTER TABLE "VoditeljProjekta" DROP CONSTRAINT "VoditeljProjekta_projektId_fkey";

-- DropForeignKey
ALTER TABLE "Zadatak" DROP CONSTRAINT "Zadatak_izvjestiteljId_fkey";

-- DropForeignKey
ALTER TABLE "Zadatak" DROP CONSTRAINT "Zadatak_izvrsiteljId_fkey";

-- DropForeignKey
ALTER TABLE "Zadatak" DROP CONSTRAINT "Zadatak_projektId_fkey";

-- AddForeignKey
ALTER TABLE "VoditeljProjekta" ADD CONSTRAINT "VoditeljProjekta_korisnikId_fkey" FOREIGN KEY ("korisnikId") REFERENCES "Korisnik"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoditeljProjekta" ADD CONSTRAINT "VoditeljProjekta_projektId_fkey" FOREIGN KEY ("projektId") REFERENCES "Projekt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zadatak" ADD CONSTRAINT "Zadatak_projektId_fkey" FOREIGN KEY ("projektId") REFERENCES "Projekt"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zadatak" ADD CONSTRAINT "Zadatak_izvrsiteljId_fkey" FOREIGN KEY ("izvrsiteljId") REFERENCES "Korisnik"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zadatak" ADD CONSTRAINT "Zadatak_izvjestiteljId_fkey" FOREIGN KEY ("izvjestiteljId") REFERENCES "Korisnik"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Privitak" ADD CONSTRAINT "Privitak_zadatakId_fkey" FOREIGN KEY ("zadatakId") REFERENCES "Zadatak"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Komentar" ADD CONSTRAINT "Komentar_korisnikId_fkey" FOREIGN KEY ("korisnikId") REFERENCES "Korisnik"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Komentar" ADD CONSTRAINT "Komentar_zadatakId_fkey" FOREIGN KEY ("zadatakId") REFERENCES "Zadatak"("id") ON DELETE CASCADE ON UPDATE CASCADE;
