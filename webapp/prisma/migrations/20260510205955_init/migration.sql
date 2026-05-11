-- CreateTable
CREATE TABLE "Expert" (
    "expert_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "prename" TEXT NOT NULL,
    "title" TEXT,
    "email" TEXT,
    "description" TEXT,
    "location" TEXT,
    "network" TEXT,
    "last_contact" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "primary_organization_id" INTEGER NOT NULL,

    CONSTRAINT "Expert_pkey" PRIMARY KEY ("expert_id")
);

-- CreateTable
CREATE TABLE "Organization" (
    "organization_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "field" TEXT,
    "description" TEXT,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("organization_id")
);

-- CreateTable
CREATE TABLE "ExpertField" (
    "id" SERIAL NOT NULL,
    "expert_id" INTEGER NOT NULL,
    "field" TEXT NOT NULL,
    "description" TEXT,
    "economic" BOOLEAN NOT NULL DEFAULT false,
    "science" BOOLEAN NOT NULL DEFAULT false,
    "social" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ExpertField_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "state" TEXT,
    "lastUpdate" TIMESTAMP(3) NOT NULL,
    "location" TEXT,
    "websiteUrl" TEXT,
    "details" TEXT,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectRelation" (
    "projectId" INTEGER NOT NULL,
    "expertId" INTEGER NOT NULL,
    "problemId" INTEGER,

    CONSTRAINT "ProjectRelation_pkey" PRIMARY KEY ("projectId","expertId")
);

-- CreateTable
CREATE TABLE "Problem" (
    "id" SERIAL NOT NULL,
    "expertId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Problem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Test" (
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("title")
);

-- CreateIndex
CREATE UNIQUE INDEX "Expert_email_key" ON "Expert"("email");

-- AddForeignKey
ALTER TABLE "Expert" ADD CONSTRAINT "Expert_primary_organization_id_fkey" FOREIGN KEY ("primary_organization_id") REFERENCES "Organization"("organization_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExpertField" ADD CONSTRAINT "ExpertField_expert_id_fkey" FOREIGN KEY ("expert_id") REFERENCES "Expert"("expert_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRelation" ADD CONSTRAINT "ProjectRelation_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRelation" ADD CONSTRAINT "ProjectRelation_expertId_fkey" FOREIGN KEY ("expertId") REFERENCES "Expert"("expert_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectRelation" ADD CONSTRAINT "ProjectRelation_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Problem" ADD CONSTRAINT "Problem_expertId_fkey" FOREIGN KEY ("expertId") REFERENCES "Expert"("expert_id") ON DELETE RESTRICT ON UPDATE CASCADE;
