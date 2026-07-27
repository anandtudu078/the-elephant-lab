import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, company, message } = body;

  // Basic server-side validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 }
    );
  }

  // Log to console (replace with Resend/SendGrid later)
  console.log("New contact submission:", { name, email, company, message });

  return NextResponse.json(
    { success: true, message: "Message received!" },
    { status: 200 }
  );
}