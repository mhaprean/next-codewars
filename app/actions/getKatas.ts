import prisma from '@/app/libs/prismadb';

export default async function getKatas() {
  try {
    const katas = await prisma.kata.findMany({});

    const safeKatas = katas.map((kata) => ({
      ...kata,
      createdAt: kata.createdAt.toString(),
      updatedAt: kata.updatedAt.toString(),
    }));

    return safeKatas;
  } catch (error: any) {
    throw new Error(error);
  }
}
