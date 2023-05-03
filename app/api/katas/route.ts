import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const { 
    title,
    difficulty,
    instructions,
    initialCode,
    unitTests,
   } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const kata = await prisma.kata.create({
    data: {
      title,
      difficulty,
      instructions,
      initialCode,
      unitTests,
      // userId: currentUser.id
    }
  });

  return NextResponse.json(kata);
}
