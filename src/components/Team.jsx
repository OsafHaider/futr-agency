import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedToolTip";
import { people } from "@/JSON/Team";
import { Star } from "lucide-react";

const Team = () => {
  return (
    <>
      <section className="mt-12 w-full lg:flex-row flex-col flex items-center justify-center lg:gap-8">
        <div className="flex ">
          <AnimatedTooltip items={people} />
        </div>
        <div className="mt-4 flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </section>
      <p className="text-gray-400 mt-2">Trusted by 27,000+ creators</p>
    </>
  );
};

export default Team;
