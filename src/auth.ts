import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    signIn({ user }) {
      // Only allow specific admin email(s)
      const allowedEmails = ["you@gmail.com"]; // 👈 Replace with your admin email
      return allowedEmails.includes(user?.email ?? "");
    },
  },
});