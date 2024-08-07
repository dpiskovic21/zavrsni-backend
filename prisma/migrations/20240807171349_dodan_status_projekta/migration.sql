/*
  Warnings:

  - The `status` column on the `Zadatak` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "StatusZadatka" AS ENUM ('U izradi', 'Na pregledu', 'Zatvoren');

-- CreateEnum
CREATE TYPE "StatusProjekta" AS ENUM ('U tijeku', 'Završen', 'Otkazan');

-- AlterTable
ALTER TABLE "Projekt" ADD COLUMN     "status" "StatusProjekta" NOT NULL DEFAULT 'U tijeku';

-- AlterTable
ALTER TABLE "Zadatak" DROP COLUMN "status",
ADD COLUMN     "status" "StatusZadatka" NOT NULL DEFAULT 'U izradi';

-- DropEnum
DROP TYPE "Status";
