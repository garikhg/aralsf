import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { SvelteKitAuth } from "@auth/sveltekit";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/lib/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: DrizzleAdapter(db),
  providers: [GitHub]
});
