'use client';

import { useEffect, useState } from 'react';

export default function WhatsHappening() {
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

        const section = document.getElementById('whats-happening');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const checklistItems = [
        "You regulate everyone else's emotions while swallowing your own.",
        "You're the 'strong one'—so nobody asks if you need support.",
        "You've achieved the success you were supposed to want, but it feels empty.",
        "You're running on cortisol, caffeine, and a sense of obligation."
    ];

    return (
        <section id="whats-happening" className="bg-highlight-bg py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Opening Lines - Stepped List */}
                <div className="mb-20 space-y-4">
                    <h2 className={`font-playfair text-3xl font-bold text-accent-dark transition-all duration-700 sm:text-4xl ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        You're not lazy.
                    </h2>
                    <h2 className={`font-playfair pl-8 text-3xl font-bold text-accent-dark transition-all duration-700 delay-200 sm:text-4xl sm:pl-16 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
                        You're not broken.
                    </h2>
                </div>

                {/* Checklist Cards */}
                <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-1 lg:max-w-none lg:grid-cols-2">
                    {checklistItems.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-start gap-4 rounded-r-lg border-l-4 border-primary bg-white p-6 shadow-sm transition-all duration-700 hover:shadow-md ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                            style={{ transitionDelay: `${400 + (index * 100)}ms` }}
                        >
                            <div className="mt-1 h-5 w-5 flex-none rounded-full bg-primary/20 text-primary flex items-center justify-center">
                                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="font-inter text-lg text-text-primary">{item}</p>
                        </div>
                    ))}
                </div>

                {/* Closing Statement */}
                <div className={`mt-24 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <p className="font-playfair text-3xl font-bold leading-tight text-accent-dark sm:text-4xl md:text-5xl">
                        Nothing is wrong with you.
                        <br />
                        <span className="text-primary">Your system is just outdated.</span>
                    </p>
                </div>

            </div>
        </section>
    );
}
