"use client";
import Button from "../Button";
import Image from "next/image";

const HeroSection = ({ onButtonClick }) => {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Unlock Your Sales Potential with{" "}
            <span className="text-yellow-300">Slerate Sales Boost</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90">
            Upgrade your sales strategy and achieve unprecedented growth.
          </p>
          <Button onClick={onButtonClick} className="text-base md:text-lg ">
            Get Started Now
          </Button>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-center md:justify-end">
          <Image
            src="/images/slerate-hero-image.svg"
            alt="Slerate Sales Boost Dashboard"
            width={600}
            height={400}
            layout="responsive"
            objectFit="contain"
            className="rounded-lg shadow-2xl max-w-lg h-auto bg-linear-to-r from-blue-900 to-indigo-700"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-32 h-32 md:w-48 md:h-48 bg-white opacity-10 rounded-full -top-8 -left-8 md:-top-12 md:-left-12"></div>
        <div className="absolute w-48 h-48 md:w-64 md:h-64 bg-white opacity-10 rounded-full -bottom-12 -right-12 md:-bottom-16 md:-right-16"></div>
      </div>
    </section>
  );
};

export default HeroSection;
