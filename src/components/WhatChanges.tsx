'use client';

import { useEffect, useState } from 'react';

export default function WhatChanges() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const section = document.getElementById('what-changes');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const benefits = [
        { icon: "🫁", text: "Your body finally calms down" },
        { icon: "✨", text: "Decisions get cleaner and easier" },
        { icon: "🚫", text: "\"No\" needs no explaining" },
        { icon: "🏠", text: "Home starts feeling like a refuge again" }
    ];

    return (
        <section id="what-changes" className="relative overflow-hidden bg-bg-main py-24 sm:py-32">
            {/* Subtle Radial Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,240,248,1)_0%,rgba(253,251,255,0)_70%)]"></div>

            {/* Background Image Accent */}
            <div className="absolute bottom-0 right-0 h-full w-1/3 opacity-5 pointer-events-none">
                <img src="/images/7.png" alt="Peaceful change" className="h-full w-full object-cover mask-image-linear-to-l" style={{ maskImage: 'linear-gradient(to left, black, transparent)' }} />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                {/* Hero-style Quote */}
                <div className={`mb-24 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <h2 className="font-playfair text-4xl font-bold italic text-accent-dark sm:text-5xl md:text-6xl lg:text-7xl">
                        Life doesn't become louder.
                        <br />
                        <span className="text-primary">It becomes quieter.</span>
                    </h2>
                </div>

                {/* Benefits Grid */}
                <div className="mx-auto grid max-w-4xl gap-x-8 gap-y-12 sm:grid-cols-2">
                    <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        <h3 className="font-dm-sans text-xs font-bold uppercase tracking-[0.2em] text-text-secondary">You Notice</h3>
                        <div className="space-y-6">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm">{item.icon}</span>
                                    <p className="font-playfair text-xl text-text-primary">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                        <h3 className="font-dm-sans text-xs font-bold uppercase tracking-[0.2em] text-text-secondary">You Stop</h3>
                        <div className="space-y-4">
                            <p className="font-inter text-xl text-text-primary">Explaining yourself.</p>
                            <p className="font-inter text-xl text-text-primary/70">Apologizing for taking up space.</p>
                            <p className="font-inter text-xl text-text-primary/50">Managing other adults' feelings.</p>
                            <p className="font-inter text-xl text-text-primary/30">Waiting for permission.</p>
                        </div>
                    </div>
                </div>

                {/* Manifesto Statement */}
                <div className={`mt-32 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                    <p className="mx-auto max-w-4xl font-playfair text-3xl font-bold leading-normal text-secondary sm:text-4xl md:text-5xl">
                        You live from dignity instead of depletion.
                    </p>
                </div>

            </div>
        </section>
    );
}
