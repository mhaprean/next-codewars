import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

// assign prisma to a global variable to avoid hot reload issues
// this is recommended
if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = client;
}

export default client;
