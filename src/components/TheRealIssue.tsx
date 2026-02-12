'use client';

import { useEffect, useState } from 'react';

export default function TheRealIssue() {
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

        const section = document.getElementById('the-real-issue');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const equations = [
        { left: "Safety", right: "Usefulness" },
        { left: "Worth", right: "Self-Sacrifice" },
        { left: "Love", right: "Performance" }
    ];

    return (
        <section id="the-real-issue" className="bg-highlight-bg py-24 sm:py-32">
            <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">

                {/* Strikethrough Repetition */}
                <div className="mb-16 space-y-4">
                    <h3 className={`font-playfair text-3xl font-bold text-text-primary/70 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        Your career isn't <span className="relative inline-block text-text-secondary line-through decoration-emotional-accent decoration-4">broken</span>
                    </h3>
                    <h3 className={`font-playfair text-3xl font-bold text-text-primary/70 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        Your marriage isn't <span className="relative inline-block text-text-secondary line-through decoration-emotional-accent decoration-4">broken</span>
                    </h3>
                    <h3 className={`font-playfair text-3xl font-bold text-text-primary/70 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        You aren't <span className="relative inline-block text-text-secondary line-through decoration-emotional-accent decoration-4">broken</span>
                    </h3>
                </div>

                {/* Main Insight */}
                <div className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <h2 className="font-playfair text-4xl font-bold leading-tight text-accent-dark sm:text-5xl md:text-6xl">
                        Your <span className="text-secondary shadow-[inset_0_-0.4em_0_0_rgba(110,198,202,0.2)]">internal authority</span> was outsourced.
                    </h2>
                </div>

                {/* Equations */}
                <p className="mb-10 font-inter text-xl text-text-primary">You learned these incorrect equations:</p>

                <div className="grid gap-6 sm:grid-cols-3">
                    {equations.map((eq, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center justify-center rounded-xl bg-white p-8 shadow-sm transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                            style={{ transitionDelay: `${800 + (index * 200)}ms` }}
                        >
                            <span className="mb-2 font-mono text-xl font-bold text-text-secondary uppercase tracking-widest">{eq.left}</span>
                            <span className="mb-2 text-3xl font-bold text-primary">=</span>
                            <span className="font-mono text-xl font-bold text-accent-dark uppercase tracking-widest">{eq.right}</span>
                        </div>
                    ))}
                </div>

                {/* Visual Support with Image */}
                <div className={`mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl shadow-lg transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <img
                        src="/images/5.png"
                        alt="Breaking the pattern"
                        className="h-64 w-full object-cover"
                    />
                </div>

                {/* Closing */}
                <div className={`mt-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="font-inter text-lg text-text-primary">
                        It worked for a while. It doesn't work anymore. <span className="font-bold text-secondary">That's good news.</span>
                    </p>
                </div>

            </div>
        </section>
    );
}
