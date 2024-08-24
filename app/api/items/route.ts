import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();

  const result = await prisma.items.create({
    data: {
      id: body.uuid,
    },
  });

  return NextResponse.json({ id: result.id });
}

export async function DELETE() {
  await prisma.items.deleteMany();
  return NextResponse.json(`ok`);
}
