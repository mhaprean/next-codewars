import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ message: 'You must login to like a kata' }, { status: 401 });
  }

  const body = await request.json();

  const { kataId, liked } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      return NextResponse.json({ message: `${value} should not be empty` }, { status: 400 });
    }
  });

  const kata = await prisma.kata.findUnique({
    where: {
      id: kataId,
    },
  });

  if (!kata) {
    return NextResponse.json({ message: 'Wrong kata id' }, { status: 404 });
  }

  const newKataLikedBy = !liked
    ? kata.likedBy.filter((id) => !currentUser.id)
    : kata.likedBy.includes(currentUser.id)
    ? kata.likedBy
    : [...kata.likedBy, currentUser.id];

  const updateKata = await prisma.kata.update({
    where: {
      id: kataId,
    },
    data: {
      likedBy: newKataLikedBy,
    },
  });

  const newUserFavorites = !liked
    ? currentUser.favoriteKatas.filter((id) => !kataId)
    : currentUser.favoriteKatas.includes(kataId)
    ? currentUser.favoriteKatas
    : [...currentUser.favoriteKatas, kataId];

  const updateUser = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteKatas: {
        set: newUserFavorites,
      },
    },
  });

  return NextResponse.json(kata);
}
