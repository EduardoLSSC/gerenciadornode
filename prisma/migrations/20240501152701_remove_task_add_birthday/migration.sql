/*
  Warnings:

  - You are about to drop the `tb_task` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `birthday` to the `tb_user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tb_task` DROP FOREIGN KEY `tb_task_userId_fkey`;

-- AlterTable
ALTER TABLE `tb_user` ADD COLUMN `birthday` DATETIME(3) NOT NULL;

-- DropTable
DROP TABLE `tb_task`;
