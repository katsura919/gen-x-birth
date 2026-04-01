"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function NextSteps() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-bg-main py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div
          className={`mb-16 text-center space-y-4 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="font-dm-sans text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Your Next Step
          </p>
          <h2 className="font-playfair text-4xl font-bold text-primary sm:text-5xl md:text-6xl">
            Where Would You Like to Begin?
          </h2>
          <p className="mx-auto max-w-xl font-inter text-lg text-text-secondary">
            Two paths. Both lead back to you.
          </p>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Card 1: Rebirth Journey */}
          <a
            href="/rebirth-mentor"
            className={`group relative overflow-hidden rounded-[2.5rem] bg-bg-light shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            {/* Image */}
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <Image
                src="/images/funnel/Angelic Water View.png"
                alt="The Rebirth Journey"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-light via-bg-light/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10">
              <p className="mb-2 font-dm-sans text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Emotional Journey
              </p>
              <h3 className="mb-3 font-playfair text-3xl font-bold text-primary">
                The Rebirth Journey
              </h3>
              <p className="mb-6 font-inter text-lg leading-relaxed text-text-secondary">
                Understand where you are, who you&apos;ve been, and who you&apos;re becoming.
                A guided exploration of your next chapter.
              </p>
              <span className="inline-flex items-center gap-2 font-dm-sans text-sm font-semibold uppercase tracking-wider text-primary transition-all duration-300 group-hover:gap-3 group-hover:text-secondary">
                Explore Your Journey
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </a>

          {/* Card 2: Work With Me */}
          <a
            href="/work-with-me"
            className={`group relative overflow-hidden rounded-[2.5rem] bg-primary shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Image */}
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <Image
                src="/images/funnel/Angelic in the Office.png"
                alt="Work With Me"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-8 sm:p-10">
              <p className="mb-2 font-dm-sans text-xs font-bold uppercase tracking-[0.2em] text-accent-dark">
                Mentorship &amp; Pricing
              </p>
              <h3 className="mb-3 font-playfair text-3xl font-bold text-white">
                Work With Me
              </h3>
              <p className="mb-6 font-inter text-lg leading-relaxed text-white/80">
                Ready to take action? Book a $59 Strategy Session or explore 1:1 and
                Circle Mentorship packages.
              </p>
              <span className="inline-flex items-center gap-2 font-dm-sans text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 group-hover:gap-3 group-hover:text-accent-dark">
                See Packages &amp; Pricing
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
