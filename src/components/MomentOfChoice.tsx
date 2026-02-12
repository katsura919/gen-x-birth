'use client';

import { useEffect, useState } from 'react';

export default function MomentOfChoice() {
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

        const section = document.getElementById('moment-of-choice');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <section id="moment-of-choice" className="relative overflow-hidden bg-gradient-to-br from-accent-dark to-[#2A2A35] py-24 sm:py-32">

            {/* Background Image for "New Way" - visible on right side */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/6.png"
                    alt="New beginning"
                    className="absolute right-0 h-full w-full object-cover opacity-50 lg:w-1/2 lg:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#2A2A35] via-[#2A2A35]/80 to-transparent"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Left Column - The Old Way */}
                    <div className={`text-center lg:text-right transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                        <div className="space-y-6 text-white">
                            <p className="font-inter text-2xl font-light">Keep pushing...</p>
                            <p className="font-inter text-2xl font-light">Keep waiting...</p>
                            <p className="font-inter text-2xl font-light">Keep telling yourself "it is what it is"...</p>
                            <p className="font-inter text-2xl font-light">Keep hoping it will magically get better...</p>
                        </div>
                    </div>

                    {/* Divider (Mobile only) */}
                    <div className="flex justify-center lg:hidden opacity-30">
                        <div className="h-px w-24 bg-white"></div>
                    </div>

                    {/* Right Column - The New Way */}
                    <div className={`text-center lg:text-left transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                        <h2 className="font-playfair text-4xl font-bold leading-tight text-secondary sm:text-5xl md:text-6xl">
                            <span className='text-white'>
                                Or you can decide that your next chapter test </span><span className="text-secondary shadow-[0_4px_0_0_#fff] shadow-secondary">belongs to you</span>.
                        </h2>
                    </div>
                </div>

            </div>
        </section>
    );
}
