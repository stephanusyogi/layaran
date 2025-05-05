import "./globals.css";
import "@/styles/landing.css";
import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import { Roboto, Inter, Nunito } from "next/font/google";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/landing/ui/ThemeToggle";

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

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Navbar />
          <main>{children}</main>
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
