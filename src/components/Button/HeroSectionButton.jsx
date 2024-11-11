"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSectionButton = () => {
  return (
    <motion.button
      initial={{ y: 0 }}
      whileHover={{ y: -5 }}
      className={
        "py-2 px-4 font-semibold rounded bg-primary hober:bg-primary/80 mt-8 transition-colors flex items-center justify-center gap-2 text-black"
      }
    >
      Book a Demo
      <motion.span whileHover={{ x: 5 }}>
        <ArrowRight className="size-5" />
      </motion.span>
    </motion.button>
  );
};

export default HeroSectionButton;
