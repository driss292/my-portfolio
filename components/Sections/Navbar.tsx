"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";
// import DebugTailwind from "../ui/debugTailwind";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-[#0b192e]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0b192e]/60 sticky top-0 z-50 w-full border-b border-pink-600">
      {/* <DebugTailwind /> */}

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center flex-shrink-0">
              <Link href="#hero" className="text-2xl font-bold flex">
                Driss Kaci
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="#hero"
              className="relative inline-flex items-center px-1 pt-1 text-lg font-medium group"
            >
              Accueil
              <span className="absolute bottom-3 left-0 h-[3px] w-full bg-pink-600 scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="#about"
              className="relative inline-flex items-center px-1 pt-1 text-lg font-medium group"
            >
              À propos
              <span className="absolute bottom-3 left-0 h-[3px] w-full bg-pink-600 scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="#projects"
              className="relative inline-flex items-center px-1 pt-1 text-lg font-medium group"
            >
              Projets
              <span className="absolute bottom-3 left-0 h-[3px] w-full bg-pink-600 scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100"></span>
            </Link>
            <Link
              href="#contact"
              className="relative inline-flex items-center px-1 pt-1 text-lg font-medium group"
            >
              Contact
              <span className="absolute bottom-3 left-0 h-[3px] w-full bg-pink-600 scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100"></span>
            </Link>
          </div>
          <div className="flex items-center -mr-2 sm:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="#hero"
              className="block py-2 pl-3 pr-4 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block py-2 pl-3 pr-4 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block py-2 pl-3 pr-4 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="block py-2 pl-3 pr-4 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
