-- CreateEnum
CREATE TYPE "Status" AS ENUM ('U izradi', 'Na pregledu', 'Zatvoren');

-- CreateEnum
CREATE TYPE "Prioritet" AS ENUM ('NIZAK', 'SREDNJI', 'VISOK', 'KRITICAN');

-- CreateTable
CREATE TABLE "Korisnik" (
    "id" SERIAL NOT NULL,
    "ime" TEXT NOT NULL,
    "prezime" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL,

    CONSTRAINT "Korisnik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projekt" (
    "id" SERIAL NOT NULL,
    "naziv" TEXT NOT NULL,
    "datumPocetaka" TIMESTAMP(3) NOT NULL,
    "datumZavrsetka" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Projekt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VoditeljProjekta" (
    "korisnikId" INTEGER NOT NULL,
    "projektId" INTEGER NOT NULL,

    CONSTRAINT "VoditeljProjekta_pkey" PRIMARY KEY ("korisnikId","projektId")
);

-- CreateTable
CREATE TABLE "Zadatak" (
    "id" SERIAL NOT NULL,
    "naziv" TEXT NOT NULL,
    "opis" TEXT NOT NULL,
    "projektId" INTEGER NOT NULL,
    "izvrsiteljId" INTEGER NOT NULL,
    "izvjestiteljId" INTEGER NOT NULL,
    "prioritet" "Prioritet" NOT NULL,
    "rok" TIMESTAMP(3) NOT NULL,
    "status" "Status" NOT NULL,
    "datumIzrade" TIMESTAMP(3) NOT NULL,
    "datumZavrsetka" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Zadatak_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Privitak" (
    "putanja" TEXT NOT NULL,
    "zadatakId" INTEGER NOT NULL,

    CONSTRAINT "Privitak_pkey" PRIMARY KEY ("putanja")
);

-- CreateTable
CREATE TABLE "Komentar" (
    "id" SERIAL NOT NULL,
    "sadrzaj" TEXT NOT NULL,
    "korisnikId" INTEGER NOT NULL,
    "zadatakId" INTEGER NOT NULL,

    CONSTRAINT "Komentar_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Korisnik_email_key" ON "Korisnik"("email");

-- AddForeignKey
ALTER TABLE "VoditeljProjekta" ADD CONSTRAINT "VoditeljProjekta_korisnikId_fkey" FOREIGN KEY ("korisnikId") REFERENCES "Korisnik"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VoditeljProjekta" ADD CONSTRAINT "VoditeljProjekta_projektId_fkey" FOREIGN KEY ("projektId") REFERENCES "Projekt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zadatak" ADD CONSTRAINT "Zadatak_projektId_fkey" FOREIGN KEY ("projektId") REFERENCES "Projekt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zadatak" ADD CONSTRAINT "Zadatak_izvrsiteljId_fkey" FOREIGN KEY ("izvrsiteljId") REFERENCES "Korisnik"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Zadatak" ADD CONSTRAINT "Zadatak_izvjestiteljId_fkey" FOREIGN KEY ("izvjestiteljId") REFERENCES "Korisnik"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Privitak" ADD CONSTRAINT "Privitak_zadatakId_fkey" FOREIGN KEY ("zadatakId") REFERENCES "Zadatak"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Komentar" ADD CONSTRAINT "Komentar_korisnikId_fkey" FOREIGN KEY ("korisnikId") REFERENCES "Korisnik"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Komentar" ADD CONSTRAINT "Komentar_zadatakId_fkey" FOREIGN KEY ("zadatakId") REFERENCES "Zadatak"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
