-- CreateTable
CREATE TABLE `Videos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url_yt` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `thumbnail` VARCHAR(191) NOT NULL,
    `published` DATETIME(3) NOT NULL,
    `tag_id` INTEGER NULL,
    `channel_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Channels` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Videos` ADD CONSTRAINT `Videos_tag_id_fkey` FOREIGN KEY (`tag_id`) REFERENCES `Tags`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Videos` ADD CONSTRAINT `Videos_channel_id_fkey` FOREIGN KEY (`channel_id`) REFERENCES `Channels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
