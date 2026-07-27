// src/app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth";   // our auth config
export const { GET, POST } = handlers;