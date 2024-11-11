import React from "react";
import { footerLinks } from "@/JSON/Footerlinks";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full" />
            <span className="text-xl font-semibold">Proactiv</span>
          </div>
          <div className="text-gray-400 text-sm space-y-1">
            <p>Copyright © 2024 Proactiv INC</p>
            <p>All rights reserved</p>
          </div>
        </div>

        <div className="flex gap-24">
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              {section.column.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
