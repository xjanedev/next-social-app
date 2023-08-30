import NextAuth, { DefaultSession, PagesOptions } from "next-auth";
import { User } from "@/model/user";

declare module "next-auth" {
  interface Session {
    user: User & DefaultSession["user"];
  }

  interface NextAuthOptions {
    app?: Partial<PagesOptions>;
  }
}
