import React from "react";
// import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesPreview from "../components/ServicesPreview";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <Footer />
    </>
  );
}
