import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const allowedEmails = ["you@gmail.com"];

let config;
try {
  config = NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.AUTH_GOOGLE_ID!,
        clientSecret: process.env.AUTH_GOOGLE_SECRET!,
      }),
    ],
    callbacks: {
      signIn({ user }: { user: { email?: string | null } }) {
        return allowedEmails.includes(user?.email ?? "");
      },
    },
  });
} catch (e) {
  console.error("NextAuth init failed:", e);
  throw e;
}

export const { handlers, signIn, signOut, auth } = config;