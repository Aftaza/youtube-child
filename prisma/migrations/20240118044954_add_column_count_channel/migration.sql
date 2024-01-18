/*
  Warnings:

  - Added the required column `count` to the `Channels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Channels` ADD COLUMN `count` INTEGER NOT NULL;
