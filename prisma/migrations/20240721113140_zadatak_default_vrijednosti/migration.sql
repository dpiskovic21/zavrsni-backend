-- AlterTable
ALTER TABLE "Zadatak" ALTER COLUMN "status" SET DEFAULT 'U izradi',
ALTER COLUMN "datumIzrade" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "datumZavrsetka" DROP NOT NULL;
