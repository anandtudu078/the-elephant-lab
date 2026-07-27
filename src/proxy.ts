import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function proxy(request: NextRequest) {
  const session = await auth();

  // If not logged in, redirect to sign‑in page
  if (!session?.user) {
    const signInUrl = new URL("/api/auth/signin", request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  // Protect only routes under /admin
  matcher: ["/admin/:path*"],
};