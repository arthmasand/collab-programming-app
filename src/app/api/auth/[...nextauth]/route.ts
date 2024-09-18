import NextAuth from "next-auth"
import { db } from "@/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import GoogleProvider from "next-auth/providers/google";
import type { Adapter } from "next-auth/adapters";
import { config } from 'dotenv';

// Load .env file
config(); 

const handler = NextAuth({
    adapter:DrizzleAdapter(db) as Adapter, 
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,   
        }),
    ],    
});

export { handler as GET, handler as POST }  