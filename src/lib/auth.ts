import { NextAuthOptions } from "next-auth";
import { CustomPrismaAdapter } from "./customPrismaAdapter";
import { prisma } from "./prisma";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  debug: true,
  adapter: CustomPrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "database",
    maxAge: 24 * 60 * 60,
    updateAge: 60 * 60,
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        if (session.user) {
          session.user = {
            user_id: (user as any).user_id,
            first_name: (user as any).first_name,
            last_name: (user as any).last_name,
            email_address: (user as any).email_address,
            image: user.image,
            role: (user as any).role,
          };
        }
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      if (account?.provider === "google" && profile) {
        const googleProfile = profile as {
          picture?: string;
          given_name?: string;
          family_name?: string;
        };

        try {
          const existingUser = await prisma.user.findUnique({
            where: { user_id: user.id },
            select: { image: true },
          });

          // Only update if the image has changed
          if (
            googleProfile.picture &&
            existingUser?.image !== googleProfile.picture
          ) {
            await prisma.user.update({
              where: { user_id: user.id },
              data: {
                image: googleProfile.picture,
              },
            });
          }

          // Update name details if available
          const linkedAccount = await prisma.account.findUnique({
            where: {
              provider_providerAccountId: {
                provider: account.provider,
                providerAccountId: account.providerAccountId,
              },
            },
            select: { user_id: true },
          });

          if (linkedAccount) {
            await prisma.user.update({
              where: { user_id: linkedAccount.user_id },
              data: {
                first_name: googleProfile.given_name ?? undefined,
                last_name: googleProfile.family_name ?? undefined,
              },
            });
          }
        } catch (error) {
          console.error("Error updating user fields:", error);
        }
      }

      return true;
    },
  },
};