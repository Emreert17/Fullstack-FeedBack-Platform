import Features from "../components/FeaturesComp/Features";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Pricing from "../components/Pricing/Pricing";
import Navbar from "../components/Navbar/Navbar";
import Stats from "../components/Stats/Stats";

export const metadata = {
  title: "feedly — Turn Feedback into Product Decisions",
  description:
    "Collect, organise, and prioritise user feedback in one place. Stop losing great ideas in email threads and spreadsheets.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50/40 via-white to-white">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
