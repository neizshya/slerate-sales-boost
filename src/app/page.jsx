"use client";
import React from "react";
import Image from "next/image";
import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import CTASection from "./components/sections/CTASection";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Form from "./components/Form";

export default function Home() {
  const handleScrollToCTA = () => {
    const featuresSection = document.getElementById("CTA");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <HeroSection onButtonClick={handleScrollToCTA} />
          <FeaturesSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}
