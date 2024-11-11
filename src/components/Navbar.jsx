"use client";

import React, { useState, useEffect } from "react";
import { Navlinks } from "@/JSON/Navlinks";
import Link from "next/link";
import { NavbarButton } from "./Button/NavbarButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  /**
   * The state of the navbar's scrolled position
   * - If the navbar is scrolled, the value is true
   * - If the navbar is not scrolled, the value is false
   */
  const [isScrolled, setIsScrolled] = useState(false);
  /**
   * The state of the navbar's opened state
   * - If the navbar is opened, the value is true
   * - If the navbar is not opened, the value is false
   */
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    /**
     * The event listener function for the scroll event
     * This function will be called whenever the user scrolls
     * The function will check if the user has scrolled more than 100px from the top, and
     * if the user has scrolled more than 100px from the top, it will set the isScrolled state to true
     * If the user has not scrolled more than 100px from the top, it will set the isScrolled state to false
     */
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    /**
     * Adding the event listener to the window object
     * The event listener will be called whenever the user scrolls
     */
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.header
        className={`w-full left-1/2 rounded-md -translate-x-1/2 flex items-center justify-between fixed top-2 px-6 py-4 z-50 `}
        initial={false}
        animate={{
          backgroundColor: isScrolled ? "rgb(23, 23, 23)" : "transparent",
          maxWidth: isScrolled ? "1100px" : "1280px",
          boxShadow: isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        }}
        transition={{
          duration: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div className="flex items-center gap-10">
          <Link href={"/"} className="text-2xl font-semibold">
            Proactiv
          </Link>
          <nav className="hidden lg:flex items-center space-x-4">
            {Navlinks.map((v, i) => (
              <Link
                className={`text-sm font-medium py-2 px-4 rounded hover:bg-zinc-900 transition-colors`}
                key={i}
                href={v.path}
              >
                {v.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <NavbarButton
            className={`py-2 px-4 text-sm rounded ring-1 ring-transparent hover:ring-primary bg-transparent hover:bg-primary/80 transition-colors `}
          >
            Register
          </NavbarButton>
          <NavbarButton className="py-2 px-4 text-sm rounded bg-primary hover:bg-primary/80 transition-colors text-white">
            Book a Demo
          </NavbarButton>
        </div>
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="p-2">
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <Link href={"/"} className="text-2xl font-semibold">
                Proactiv
              </Link>
              <nav className="mt-6 flex flex-col space-y-4">
                {Navlinks.map((v, i) => (
                  <Link
                    className="text-sm font-medium py-2 px-4 hover:bg-gray-100 transition-colors rounded"
                    key={i}
                    href={v.path}
                    onClick={() => setIsOpen(false)}
                  >
                    {v.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 space-y-4">
                <NavbarButton
                  className="w-full py-2 px-4 text-sm rounded bg-transparent hover:bg-primary/80 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </NavbarButton>
                <NavbarButton
                  className="w-full py-2 px-4 text-sm rounded bg-primary hover:bg-primary/80 transition-colors text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Demo
                </NavbarButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;
