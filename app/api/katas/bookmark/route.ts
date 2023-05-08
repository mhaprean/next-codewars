import { NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request, response: Response) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json({ message: 'You must login to bookmark a kata' }, { status: 401 });
  }

  const body = await request.json();

  const { kataId, bookmarked } = body;

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

  const newKataBookmarkedBy = !bookmarked
    ? kata.bookmarkedBy.filter((id) => !currentUser.id)
    : kata.bookmarkedBy.includes(currentUser.id)
    ? kata.bookmarkedBy
    : [...kata.bookmarkedBy, currentUser.id];

  const updateKata = await prisma.kata.update({
    where: {
      id: kataId,
    },
    data: {
      bookmarkedBy: newKataBookmarkedBy,
    },
  });

  const newUserBookmarks = !bookmarked
    ? currentUser.bookmarkedKatas.filter((id) => !kataId)
    : currentUser.bookmarkedKatas.includes(kataId)
    ? currentUser.bookmarkedKatas
    : [...currentUser.bookmarkedKatas, kataId];

  const updateUser = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      bookmarkedKatas: newUserBookmarks,
    },
  });

  return NextResponse.json(kata);
}
