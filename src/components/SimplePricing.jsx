import { pricingTiers } from "@/JSON/Pricecard";
import { Check, NotebookText } from "lucide-react";
import React from "react";
import { NavbarButton } from "./Button/NavbarButton";
import Marquee from "./Marquee";

const SimplePricing = () => {
  return (
    <div className="w-full bg-black">
      <div className="container mx-auto px-4 py-16">
        <section className="flex flex-col items-center justify-center text-center w-full mb-12">
          <div className="size-12 bg-zinc-800 rounded-md flex items-center justify-center">
            <div className="size-10 bg-black rounded-md flex items-center justify-center">
              <NotebookText className="size-6 text-primary" />
            </div>
          </div>
          <h1 className="font-bold text-3xl mt-4">Simple pricing</h1>
          <p className="text-gray-400 my-4 max-w-2xl">
            Simple pricing for startups, small businesses, medium scale
            businesses and enterprises.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative p-6 rounded-lg ${
                tier.featured
                  ? "border-primary/50 border bg-zinc-900/50"
                  : "bg-zinc-800"
              } backdrop-blur-sm flex flex-col`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {tier.name}
                </h3>
                <div className="text-2xl text-white mb-2">
                  {tier.price}
                  <span className="text-zinc-400 text-lg ml-1">
                    {tier.period}
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{tier.description}</p>
              </div>
              <ul className="space-y-2 mb-6 flex-grow">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-zinc-400"
                  >
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <NavbarButton
                className={`w-full py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  tier.featured
                    ? "bg-primary text-white hover:bg-primary/80"
                    : "bg-zinc-700 text-white hover:bg-zinc-600"
                }`}
              >
                {tier.buttonText}
              </NavbarButton>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full overflow-hidden py-16">
        <Marquee />
      </div>
    </div>
  );
};

export default SimplePricing;
