import React from "react";
import Team from "./Team";
import HeroSectionButton from "./Button/HeroSectionButton";

const HeroSection = () => {
  return (
    <section className="min-h-screen  w-full pt-24 flex flex-col items-center justify-center text-center px-4">
      <h1 className=" mx-auto container w-[71%] text-4xl lg:text-8xl lg:w-[75%]">
        Transform Your Marketing with Proactiv
      </h1>

      <p className="text-gray-300 text-balance mt-6 max-w-3xl lg:text-xl">
        Automate Campaigns, Engage Audiences, and Boost Lead Generation with Our
        All-in-One Marketing Solution
      </p>

      <Team />
      <HeroSectionButton />
    </section>
  );
};

export default HeroSection;
