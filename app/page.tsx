import React from "react";
import HeroSection from "./components/HeroSection";
import Solutions from "./components/Solutions";
import ContactUs from "./components/ContactUs";
import Benefits from "./components/Benefits";
import Experts from "./components/Experts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Solutions />
      <Benefits />
      <Experts />
      <ContactUs />
      <Footer />
    </div>
  );
}
