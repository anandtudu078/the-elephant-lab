import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  try {
    await prisma.contact.create({
      data: { name, email, company: company || null, message },
    });

    return NextResponse.json({ success: true, message: "Message received!" }, { status: 200 });
  } catch (error) {
    console.error("Failed to save contact:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}