import "@/styles/landing.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import AuthProvider from "./providers/AuthProvider";
import SessionMonitor from "@/components/SessionMonitor";
import { Toaster } from "react-hot-toast";
import { ReduxProvider } from "./providers/ReduxProvider";

export const metadata: Metadata = {
  title: "Layaran - Real-Time Messages, Real-Time Connections!",
  description: "Engage your audience with live chat on big screens.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", rel: "apple-touch-icon", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className="h-full">
        <ReduxProvider>
          <AuthProvider>
            <ThemeProvider attribute="class" enableSystem defaultTheme="system">
              <Toaster
                position="bottom-right"
                toastOptions={{ duration: 5000 }}
              />
              <SessionMonitor />
              {children}
            </ThemeProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
