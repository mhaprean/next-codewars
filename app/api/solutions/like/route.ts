import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.json({ message: 'You must login to like a solution' }, { status: 401 });
    }

    const body = await request.json();

    const { solutionId, liked } = body;

    Object.keys(body).forEach((value: any) => {
      if (!body[value]) {
        return NextResponse.json({ message: `${value} should not be empty` }, { status: 400 });
      }
    });

    const solution = await prisma.solution.findUnique({
      where: {
        id: solutionId,
      },
    });

    if (!solution) {
      return NextResponse.json({ message: 'Wrong solution id' }, { status: 404 });
    }

    const newSolutionLikedBy = !liked
      ? solution.likedBy.filter((id) => !currentUser.id)
      : solution.likedBy.includes(currentUser.id)
      ? solution.likedBy
      : [...solution.likedBy, currentUser.id];

    const updateSolution = await prisma.solution.update({
      where: {
        id: solutionId,
      },
      data: {
        likedBy: newSolutionLikedBy,
      },
    });

    return NextResponse.json(updateSolution);
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
