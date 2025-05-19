"use client";

import { createContext, useContext } from "react";
import { Session } from "next-auth";

const SessionContext = createContext<Session | null>(null);

export const useSessionContext = () => useContext(SessionContext);

export function SessionProvider({
  session,
  children,
}: {
  session: Session;
  children: React.ReactNode;
}) {
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}
