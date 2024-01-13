/*
  Warnings:

  - Added the required column `likes` to the `Videos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Videos` ADD COLUMN `likes` INTEGER NOT NULL;
