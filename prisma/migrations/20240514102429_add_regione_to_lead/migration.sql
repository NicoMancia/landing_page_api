-- CreateTable
CREATE TABLE `lead` (
    `nome` VARCHAR(50) NULL,
    `cognome` VARCHAR(50) NULL,
    `email` VARCHAR(50) NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `regione` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
