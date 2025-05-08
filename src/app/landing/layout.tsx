import "@/styles/landing.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import ThemeToggle from "@/components/landing/ui/ThemeToggle";
import AOSInit from "@/components/landing/ui/AOSInit";
import MobileBottomNav from "@/components/landing/section/MobileBottomNav";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AOSInit />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ThemeToggle />
      <MobileBottomNav />
    </>
  );
}
