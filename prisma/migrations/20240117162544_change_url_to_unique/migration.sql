/*
  Warnings:

  - A unique constraint covering the columns `[url_yt]` on the table `Videos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Videos_url_yt_key` ON `Videos`(`url_yt`);
