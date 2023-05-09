import prisma from '@/app/libs/prismadb';

interface IParams {
  kataId: string;
}

export default async function getKataSolutions(params: IParams) {
  try {
    const { kataId } = params;

    const solutions = await prisma.solution.findMany({
      where: {
        kataId,
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    if (!solutions) {
      return null;
    }

    return solutions.map((solution, idx) => ({
      ...solution,
      createdAt: solution.createdAt.toString(),
      updatedAt: solution.updatedAt.toString(),
    }));
  } catch (error: any) {
    throw new Error(error);
  }
}
