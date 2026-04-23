"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/pages/about" },
  { name: "Services", href: "/pages/services" },
  { name: "Contact", href: "/pages/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight">JNB Consulting</Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} className="text-sm font-semibold uppercase text-[#0d0c0c] hover:text-black transition-colors" href={link.href}>{link.name}</Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(true)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black focus:outline-none"><span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`} onClick={() => setIsOpen(false)} />
      <div className={`fixed top-0 right-0 h-full w-64 bg-black shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="p-5 flex flex-col h-full">
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300 transition-colors">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link key={link.name} onClick={() => setIsOpen(false)} className="text-lg font-semibold text-white hover:text-gray-300 transition-colors border-b border-gray-800 pb-2" href={link.href}>{link.name}</Link>
            ))}
          </div>
          <div className="mt-auto text-gray-500 text-sm">
            © {new Date().getFullYear()} JNB Consulting
          </div>
        </div>
      </div>
    </nav>
  );
}

