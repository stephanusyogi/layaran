import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { user_id: session.user.user_id },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  try {
    const updated = await prisma.user.update({
      where: {
        user_id: session.user.user_id,
      },
      data: {
        first_name: body.first_name,
        last_name: body.last_name,
        email_address: body.email_address,
        phone_number: body.phone_number,
        gender: body.gender,
        profession: body.profession,
        knowing_from: body.knowing_from,
        role: body.role,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}
