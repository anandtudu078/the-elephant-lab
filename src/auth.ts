import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Allow only specific admin email(s)
const allowedEmails = ["you@gmail.com"]; // 👈 Replace with your admin email

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    // @ts-ignore – v4 provider type mismatch with newer Next.js
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