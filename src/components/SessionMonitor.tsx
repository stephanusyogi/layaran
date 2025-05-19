"use client";

import { useSession, signOut, getSession } from "next-auth/react";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const SessionMonitor = () => {
  const { data: session, update } = useSession();
  const logoutTimeout = useRef<NodeJS.Timeout | null>(null);
  const warnTimer = useRef<NodeJS.Timeout | null>(null);
  const toastVisible = useRef(false);

  useEffect(() => {
    if (!session?.expires) return;

    const expiryTime = new Date(session.expires).getTime();
    const now = Date.now();
    const timeLeft = expiryTime - now;

    if (timeLeft <= 0) {
      signOut();
      return;
    }

    const warnBefore = 60 * 1000; // warn 1 minute before

    // Set warning timer
    warnTimer.current = setTimeout(() => {
      if (toastVisible.current) return; // prevent duplicates
      toastVisible.current = true;

      toast.custom(
        (t) => (
          <div className="p-4 bg-yellow-100 text-yellow-800 rounded shadow-md dark:bg-yellow-900 dark:text-yellow-100">
            <p className="text-sm mb-2">⚠️ Your session will expire soon.</p>
            <div className="flex gap-2 justify-end">
              <button
                className="px-3 py-1 text-white bg-yellow-600 rounded hover:bg-yellow-700 text-sm"
                onClick={async () => {
                  await handleExtendSession();
                  toast.dismiss(t.id);
                  toastVisible.current = false;
                }}
              >
                Stay Signed In
              </button>
              <button
                className="px-3 py-1 bg-gray-300 text-sm rounded text-gray-800 hover:bg-gray-400"
                onClick={() => {
                  signOut();
                  toast.dismiss(t.id);
                  toastVisible.current = false;
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        ),
        { id: "session-expiry-warning", duration: 60000 }
      );
    }, timeLeft - warnBefore);

    // Set logout timer
    logoutTimeout.current = setTimeout(() => {
      signOut();
    }, timeLeft);

    return () => {
      if (logoutTimeout.current) clearTimeout(logoutTimeout.current);
      if (warnTimer.current) clearTimeout(warnTimer.current);
    };
  }, [session?.expires]);

  const handleExtendSession = async () => {
    try {
      if (logoutTimeout.current) clearTimeout(logoutTimeout.current);
      if (warnTimer.current) clearTimeout(warnTimer.current);
      toastVisible.current = false;

      // Force session refresh
      await getSession();
      await update?.();

      const newExpiry = new Date((await getSession())?.expires ?? "").getTime();
      const now = Date.now();

      // Reset logout timer with new expiry
      logoutTimeout.current = setTimeout(() => {
        signOut();
      }, newExpiry - now);
    } catch (err) {
      console.error("Session refresh failed:", err);
      signOut();
    }
  };

  return null;
};

export default SessionMonitor;
