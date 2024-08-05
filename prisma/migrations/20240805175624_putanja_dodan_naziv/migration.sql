/*
  Warnings:

  - Added the required column `naziv` to the `Privitak` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Privitak" ADD COLUMN     "naziv" TEXT NOT NULL;
