import prisma from '@/app/libs/prismadb';

interface IParams {
  kataId: string;
}

export default async function getKataById(params: IParams) {
  try {
    const { kataId } = params;

    const kata = await prisma.kata.findUnique({
      where: {
        id: kataId,
      },
    });

    if (!kata) {
      return null;
    }

    return {
      ...kata,
      createdAt: kata.createdAt.toString(),
      updatedAt: kata.updatedAt.toString(),
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
