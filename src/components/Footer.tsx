"use client";

import React from "react";
import { Sun } from "lucide-react";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* World Map Section */}
      <section className="py-1 bg-gray-900 w-full">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold text-xl md:text-4xl text-white">
            Remote{" "}
            <span className="text-neutral-400">
              {"Connectivity".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
            Break free from traditional boundaries. Work from anywhere, at the
            comfort of your own studio apartment. Perfect for Nomads and
            Travellers.
          </p>
        </div>
        <WorldMap
          dots={[
            {
              start: { lat: 64.2008, lng: -149.4937 },
              end: { lat: 34.0522, lng: -118.2437 },
            },
            {
              start: { lat: 64.2008, lng: -149.4937 },
              end: { lat: -15.7975, lng: -47.8919 },
            },
            {
              start: { lat: -15.7975, lng: -47.8919 },
              end: { lat: 38.7223, lng: -9.1393 },
            },
            {
              start: { lat: 51.5074, lng: -0.1278 },
              end: { lat: 28.6139, lng: 77.209 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: 43.1332, lng: 131.9113 },
            },
            {
              start: { lat: 28.6139, lng: 77.209 },
              end: { lat: -1.2921, lng: 36.8219 },
            },
          ]}
        />
      </section>

      {/* Footer Columns */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-amber-500" />
              <div className="ml-2">
                <h3 className="text-lg font-bold">Renewable</h3>
                <h4 className="text-base">Meet 2026</h4>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              The premier global conference for renewable energy leaders and
              innovators.
            </p>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "GitHub", "Dribbble"].map((label, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 
                      10 10 10-4.48 10-10S17.52 2 12 2z"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Speakers", "Agenda", "Register"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["News", "Blog", "FAQ", "Gallery", "Media"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">123 Renewable Way</p>
              <p className="mb-2">Boston, MA 02110</p>
              <p className="mb-4">United States</p>
              <p className="mb-2">
                <a
                  href="mailto:info@renewablemeet2026.org"
                  className="hover:text-white transition-colors"
                >
                  info@renewablemeet2026.org
                </a>
              </p>
              <p>
                <a
                  href="tel:+12345678900"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-8900
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col items-center space-y-3">
          <button
            onClick={() => window.location.href = "/admin-login"}
            className="text-sm text-gray-400 hover:text-white transition-colors underline"
          >
            Admin Login
          </button>
          <p className="text-center text-gray-500 text-sm">
            © 2025 Renewable Meet 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;