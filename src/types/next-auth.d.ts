import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      user_id: string;
      first_name: string;
      last_name?: string | null;
      email_address: string;
      image?: string | null;
      role: "admin" | "member";
    };
  }

  interface User {
    user_id: string;
    first_name: string;
    last_name?: string | null;
    email_address: string;
    image?: string | null;
    role: "admin" | "member";
  }
}

