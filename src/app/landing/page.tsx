import About from "@/components/landing/section/About";
import CallToAction from "@/components/landing/section/CallToAction";
import FAQ from "@/components/landing/section/FAQ";
import Feature from "@/components/landing/section/Feature";
import FeaturesCards from "@/components/landing/section/FeatureCards";
import Hero from "@/components/landing/section/Hero";
import Pricing from "@/components/landing/section/Pricing";
import TablePricing from "@/components/landing/section/TablePricing";
import LandingLayout from "./layout";

export default function LandingPage() {
  return (
    <LandingLayout>
      <Hero />
      <About />
      <Feature />
      <FeaturesCards />
      <Pricing />
      <CallToAction />
      <TablePricing />
      <FAQ />
    </LandingLayout>
  );
}
