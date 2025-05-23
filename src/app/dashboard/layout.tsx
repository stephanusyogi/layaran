import { SidebarProvider } from "@/components/dashboard/context/SidebarContext";
import DashboardLoader from "@/components/dashboard/DashboardLoader";
import Header from "@/components/dashboard/Header";
import MobileOverlay from "@/components/dashboard/MobileOverlay";
import Sidebar from "@/components/dashboard/Sidebar";
import "@/styles/dashboard.css";
import { getServerSession } from "next-auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SessionProvider } from "../context/SessionContext";
import { log } from "console";
import { authOptions } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Dashboard | Layaran Member Area",
  description: "Admin panel to manage events, messages, and user settings.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", rel: "apple-touch-icon", sizes: "180x180" },
    ],
  },
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <SessionProvider session={session}>
      <SidebarProvider>
        {/* Preloader Start */}
        <DashboardLoader />
        {/* Preloader End */}

        {/* Page Wrapper Start */}
        <div className="relative z-50 flex h-screen overflow-x-hidden">
          {/* Sidebar Start */}
          <Sidebar />
          {/* Sidebar End */}
          <div className="relative z-50 flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            {/* Mobile Overlay Start */}
            <MobileOverlay />
            {/* Mobile Overlay End */}
            {/* Header Start */}
            <Header />
            {/* Header End */}
            <main className="h-full">{children}</main>
          </div>
        </div>
        {/* Page Wrapper End */}
      </SidebarProvider>
    </SessionProvider>
  );
}
