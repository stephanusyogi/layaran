import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { Adapter, AdapterAccount, AdapterUser } from "next-auth/adapters";
import { prisma } from "@/lib/prisma";

export function CustomPrismaAdapter(p = prisma): Adapter {
  const base = PrismaAdapter(p);

  return {
    ...base,

    async linkAccount(data: AdapterAccount): Promise<AdapterAccount> {
      const created = await p.account.create({
        data: {
          type: data.type as "oauth" | "email" | "oidc",
          provider: data.provider,
          providerAccountId: data.providerAccountId,
          access_token: data.access_token ?? undefined,
          expires_at: data.expires_at ?? undefined,
          refresh_token: data.refresh_token ?? undefined,
          id_token: data.id_token ?? undefined,
          scope: data.scope ?? undefined,
          token_type: data.token_type ?? undefined,
          session_state: data.session_state ?? undefined,
          user: {
            connect: {
              user_id: data.userId,
            },
          },
        },
      });

      return {
        userId: created.user_id,
        type: created.type as "oauth" | "email" | "oidc",
        provider: created.provider,
        providerAccountId: created.providerAccountId,
        access_token: created.access_token ?? undefined,
        expires_at: created.expires_at ?? undefined,
        refresh_token: created.refresh_token ?? undefined,
        id_token: created.id_token ?? undefined,
        scope: created.scope ?? undefined,
        token_type: created.token_type ?? undefined,
        session_state: created.session_state ?? undefined,
      };
    },

    async getUserByEmail(email: string): Promise<AdapterUser | null> {
      const user = await p.user.findUnique({
        where: { email_address: email },
      });

      if (!user) return null;

      return {
        id: user.user_id,
        email: user.email_address,
        name: `${user.first_name} ${user.last_name || ""}`,
        image: null,
        emailVerified: null,
      };
    },

    async getUserByAccount(account) {
      const dbAccount = await p.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider: account.provider,
            providerAccountId: account.providerAccountId,
          },
        },
        include: {
          user: true,
        },
      });

      if (!dbAccount?.user) return null;

      const { user } = dbAccount;

      return {
        id: user.user_id, // ✅ Mapped to 'id', as NextAuth expects
        email: user.email_address,
        name: `${user.first_name} ${user.last_name ?? ""}`,
        image: null,
        emailVerified: null,
      };
    },

    async createUser(data: AdapterUser): Promise<AdapterUser> {
      const newUser = await p.user.create({
        data: {
          email_address: data.email!,
          first_name: data.name?.split(" ")[0] || "First",
          last_name: data.name?.split(" ").slice(1).join(" ") || null,
          phone_number: "",
          role: "member",
          image: data.image ?? null,
        },
      });

      return {
        id: newUser.user_id,
        email: newUser.email_address,
        name: `${newUser.first_name} ${newUser.last_name ?? ""}`,
        emailVerified: null,
        image: data.image ?? null,
      };
    },

    async createSession(data) {
      const session = await p.session.create({
        data: {
          sessionToken: data.sessionToken,
          user_id: data.userId,
          expires: data.expires,
        },
      });

      return {
        sessionToken: session.sessionToken,
        userId: session.user_id,
        expires: session.expires,
      };
    },
  };
}
