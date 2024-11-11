import AskedQuestions from "@/components/AskedQuestions";
import HeroSection from "@/components/HeroSection";
import SimplePricing from "@/components/SimplePricing";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-black">
      <HeroSection />
      <SimplePricing />
      <AskedQuestions />
    </div>
  );
};

export default page;
