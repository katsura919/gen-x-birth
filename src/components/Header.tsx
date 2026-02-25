"use client";

import { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWebinarDropdownOpen, setIsWebinarDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsWebinarDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${isScrolled || isMobileMenuOpen ? "bg-white shadow-sm" : "bg-transparent"
        }`}
    >
      {/* Main nav bar - fixed height so nothing shifts */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="relative z-50 flex-shrink-0">
          <a href="/">
            <Logo className="h-8 md:h-10 w-auto text-primary" />
          </a>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-6 lg:gap-8 md:flex">
          <a
            href="/quiz"
            className="font-dm-sans text-sm font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors duration-300"
          >
            Take Quiz
          </a>

          <div
            className="relative"
            ref={dropdownRef}
          >
            <button
              onClick={() => setIsWebinarDropdownOpen(!isWebinarDropdownOpen)}
              className={`flex items-center gap-1 font-dm-sans text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${isWebinarDropdownOpen ? 'text-secondary' : 'text-primary hover:text-secondary'}`}
            >
              Webinars
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isWebinarDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Desktop Dropdown */}
            {isWebinarDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-2xl shadow-xl border border-primary/10 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <a
                  href="/webinar/how-to-leverage-your-income-2026"
                  onClick={() => setIsWebinarDropdownOpen(false)}
                  className="block px-6 py-4 text-sm font-dm-sans font-medium text-text-primary hover:bg-bg-light hover:text-secondary transition-colors"
                >
                  How to Leverage Your Income
                </a>
                <div className="h-px w-full bg-primary/5" />
                <a
                  href="/webinar/reclaim-your-authority"
                  onClick={() => setIsWebinarDropdownOpen(false)}
                  className="block px-6 py-4 text-sm font-dm-sans font-medium text-text-primary hover:bg-bg-light hover:text-secondary transition-colors"
                >
                  Reclaim Your Authority
                </a>
              </div>
            )}
          </div>

          <a
            href="/booking"
            className="rounded-full bg-secondary px-6 py-2.5 font-dm-sans text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-cta-hover hover:shadow-lg cursor-pointer transition-colors duration-500"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative z-50 p-2 text-accent-dark cursor-pointer md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown - sits right below the nav bar, not full screen */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 pb-6 pt-4 shadow-md md:hidden">
          <div className="flex flex-col items-center gap-4">
            <a
              href="/quiz"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-2 text-center font-dm-sans text-base font-bold uppercase tracking-wider text-primary"
            >
              Take Quiz
            </a>

            <div className="w-full">
              <button
                onClick={() => setIsWebinarDropdownOpen(!isWebinarDropdownOpen)}
                className="flex w-full items-center justify-center gap-1 py-2 font-dm-sans text-base font-bold uppercase tracking-wider text-primary"
              >
                Webinars
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isWebinarDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Mobile Accordion */}
              {isWebinarDropdownOpen && (
                <div className="flex flex-col items-center gap-3 pt-2 pb-4 px-4 bg-bg-light/50 rounded-xl mt-2">
                  <a
                    href="/webinar/how-to-leverage-your-income-2026"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center text-sm font-dm-sans font-medium text-text-primary hover:text-secondary"
                  >
                    How to Leverage Your Income 2026
                  </a>
                  <div className="w-12 h-px bg-primary/10 mx-auto" />
                  <a
                    href="/webinar/reclaim-your-authority"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center text-sm font-dm-sans font-medium text-text-primary hover:text-secondary"
                  >
                    Reclaim Your Authority
                  </a>
                </div>
              )}
            </div>

            <a
              href="/booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full max-w-xs rounded-full bg-secondary py-3.5 text-center font-dm-sans text-base font-bold uppercase tracking-wider text-white shadow-lg mt-2"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
