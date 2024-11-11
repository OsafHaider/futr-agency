"use client";

import { marqueeImages } from "@/JSON/Marqueeimages";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

// MarqueeItem component for individual images
const MarqueeItem = ({ src, alt }) => (
  <div className="flex-shrink-0 mr-20">
    <Image
      width={128}
      height={75}
      src={src}
      alt={alt}
      className="filter grayscale hover:grayscale-0 transition-all duration-300 object-contain"
    />
  </div>
);

// MarqueeContent component for the repeating content
const MarqueeContent = () => (
  <>
    {marqueeImages.map((image, index) => (
      <MarqueeItem
        key={`${image.name}-${index}`}
        src={image.src}
        alt={image.name}
      />
    ))}
  </>
);

const Marquee = () => {
  return (
    <div className="flex">
      {/* First marquee section */}
      <motion.section
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
        className="flex items-center flex-shrink-0"
      >
        <MarqueeContent />
      </motion.section>

      {/* Second marquee section for seamless looping */}
      <motion.section
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
        className="flex items-center flex-shrink-0"
      >
        <MarqueeContent />
      </motion.section>
    </div>
  );
};

export default Marquee;
