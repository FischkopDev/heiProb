// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client';

// Damit der globale Scope im Development nicht zu viele Instanzen erzeugt
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // Hilfreich im Development: Zeigt SQL-Befehle im Terminal
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;