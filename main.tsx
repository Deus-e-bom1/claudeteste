import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Indicators from "./components/Indicators";
import CardFeature from "./components/CardFeature";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Demo from "./pages/Demo";

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash);
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

export default function App() {
  const hash = useHashRoute();

  if (hash === "#/demo") return <Demo />;

  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Indicators />
        <CardFeature />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
