import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { code, kataId } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const kata = await prisma.kata.findUnique({
    where: {
      id: kataId,
    },
  });

  if (!kata) {
    return NextResponse.error();
  }

  const solution = await prisma.solution.create({
    data: {
      code,
      userId: currentUser.id,
      kataId: kataId,
    },
  });

  const newKataResolvedBy = [...kata.resolvedBy, currentUser.id];

  const updateKata = await prisma.kata.update({
    where: {
      id: kataId,
    },
    data: {
      solutions: { connect: { id: solution.id } },
      resolvedBy: newKataResolvedBy,
    },
  });

  const updateUser = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      solvedKatas: {
        set: currentUser.solvedKatas.includes(kataId) ? currentUser.solvedKatas : [...currentUser.solvedKatas, kataId],
      },
    },
  });

  return NextResponse.json(solution);
}
