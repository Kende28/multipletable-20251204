-- DropIndex
DROP INDEX `Felhasznalok_email_key` ON `felhasznalok`;

-- AlterTable
ALTER TABLE `bejegyzesek` MODIFY `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Bejegyzesek` ADD CONSTRAINT `Bejegyzesek_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Felhasznalok`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
