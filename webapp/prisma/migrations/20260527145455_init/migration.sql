/*
  Warnings:

  - Added the required column `role` to the `ProjectRelation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectRelation" ADD COLUMN     "role" TEXT NOT NULL;
