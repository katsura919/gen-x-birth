'use client';

import { useEffect, useState } from 'react';

export default function NotSelfHelp() {
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

        const section = document.getElementById('not-self-help');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const cards = [
        {
            title: "Authority",
            icon: (
                <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            description: "Stop looking for permission. Start trusting your own knowing again."
        },
        {
            title: "Obligation",
            icon: (
                <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
            ),
            description: "Break the chains of 'shoulds' and performative goodness."
        },
        {
            title: "Boundaries",
            icon: (
                <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            description: "Not walls to keep people out, but gates to protect your peace."
        },
        {
            title: "Structure",
            icon: (
                <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
            ),
            description: "Rebuild your life on a foundation that supports who you are now."
        }
    ];

    return (
        <section id="not-self-help" className="bg-bg-main py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Disruptive Headline */}
                <div className={`mb-20 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <h2 className="font-playfair text-3xl font-bold leading-tight text-accent-dark sm:text-4xl md:text-5xl">
                        This is not <span className="text-text-secondary/60 line-through decoration-secondary decoration-2">SELF-HELP</span>.
                        <br />
                        This is not <span className="text-text-secondary/60 line-through decoration-secondary decoration-2">MOTIVATION</span>.
                    </h2>
                    <p className="font-inter mt-6 text-lg text-text-primary">
                        We're not here to fix you faster. We're here to dismantle what isn't yours.
                    </p>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col items-start rounded-2xl bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-lg ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                            style={{ transitionDelay: `${200 + (index * 100)}ms` }}
                        >
                            <div className="mb-6 rounded-full bg-highlight-bg p-4 transition-transform duration-300 group-hover:scale-110">
                                {card.icon}
                            </div>
                            <h3 className="font-playfair mb-3 text-2xl font-bold text-accent-dark">{card.title}</h3>
                            <p className="font-inter text-lg leading-relaxed text-text-primary">{card.description}</p>
                        </div>
                    ))}
                </div>

                {/* Closing Line */}
                <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <p className="font-dm-sans text-xl font-medium text-secondary sm:text-2xl">
                        Stop surviving and start choosing.
                    </p>
                </div>

            </div>
        </section>
    );
}
