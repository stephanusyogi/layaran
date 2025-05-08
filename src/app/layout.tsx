import "@/styles/landing.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import AuthProvider from "./providers/AuthProvider";

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
        <AuthProvider>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
