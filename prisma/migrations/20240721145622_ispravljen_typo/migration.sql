/*
  Warnings:

  - You are about to drop the column `datumPocetaka` on the `Projekt` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Projekt" DROP COLUMN "datumPocetaka",
ADD COLUMN     "datumPocetka" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
