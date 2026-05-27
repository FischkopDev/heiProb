/*
  Warnings:

  - You are about to drop the column `network` on the `Expert` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `ExpertField` table. All the data in the column will be lost.
  - You are about to drop the column `economic` on the `ExpertField` table. All the data in the column will be lost.
  - You are about to drop the column `science` on the `ExpertField` table. All the data in the column will be lost.
  - You are about to drop the column `social` on the `ExpertField` table. All the data in the column will be lost.
  - The primary key for the `Problem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `expertId` on the `Problem` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Problem` table. All the data in the column will be lost.
  - The primary key for the `ProjectRelation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `expertId` on the `ProjectRelation` table. All the data in the column will be lost.
  - You are about to drop the column `problemId` on the `ProjectRelation` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `ProjectRelation` table. All the data in the column will be lost.
  - You are about to drop the `TestZwei` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `expert_id` to the `ProjectRelation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_id` to the `ProjectRelation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Problem" DROP CONSTRAINT "Problem_expertId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectRelation" DROP CONSTRAINT "ProjectRelation_expertId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectRelation" DROP CONSTRAINT "ProjectRelation_problemId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectRelation" DROP CONSTRAINT "ProjectRelation_projectId_fkey";

-- DropIndex
DROP INDEX "Expert_email_key";

-- AlterTable
ALTER TABLE "Expert" DROP COLUMN "network",
ADD COLUMN     "economic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "science" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "social" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "ExpertField" DROP COLUMN "description",
DROP COLUMN "economic",
DROP COLUMN "science",
DROP COLUMN "social";

-- AlterTable
ALTER TABLE "Problem" DROP CONSTRAINT "Problem_pkey",
DROP COLUMN "expertId",
DROP COLUMN "id",
ADD COLUMN     "category" TEXT,
ADD COLUMN     "problem_id" SERIAL NOT NULL,
ADD COLUMN     "reported_by" INTEGER,
ADD COLUMN     "state" TEXT,
ADD CONSTRAINT "Problem_pkey" PRIMARY KEY ("problem_id");

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "project_state" TEXT,
ALTER COLUMN "lastUpdate" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ProjectRelation" DROP CONSTRAINT "ProjectRelation_pkey",
DROP COLUMN "expertId",
DROP COLUMN "problemId",
DROP COLUMN "projectId",
ADD COLUMN     "expert_id" INTEGER NOT NULL,
ADD COLUMN     "problem_id" INTEGER,
ADD COLUMN     "project_id" INTEGER NOT NULL,
ADD CONSTRAINT "ProjectRelation_pkey" PRIMARY KEY ("project_id", "expert_id");

-- DropTable
DROP TABLE "TestZwei";

-- CreateTable
CREATE TABLE "Test" (
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("title")
);

-- AddForeignKey
ALTER TABLE "ProjectRelation" ADD CONSTRAINT "ProjectRelation_expert_id_fkey" FOREIGN KEY ("expert_id") REFERENCES "Expert"("expert_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRelation" ADD CONSTRAINT "ProjectRelation_problem_id_fkey" FOREIGN KEY ("problem_id") REFERENCES "Problem"("problem_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRelation" ADD CONSTRAINT "ProjectRelation_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
