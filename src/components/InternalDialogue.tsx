'use client';

import { useEffect, useState } from 'react';

export default function InternalDialogue() {
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

        const section = document.getElementById('internal-dialogue');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const quotes = [
        "\"I should be grateful. I have everything I wanted.\"",
        "\"Why do I feel so tired when I'm just sitting at my desk?\"",
        "\"Is this really it? Is this the rest of my life?\"",
        "\"I love my family, but I just want to drive away and keep driving.\""
    ];

    return (
        <section id="internal-dialogue" className="relative overflow-hidden bg-bg-light py-24 sm:py-32">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/3.png"
                    alt="Introspective mood"
                    className="h-full w-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-bg-light via-bg-light/95 to-bg-light"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-6">

                {/* Decorative Quote Mark */}
                <div className="mb-12 flex justify-center opacity-30">
                    <svg className="h-24 w-24 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21L14.017 18C14.017 16.0547 14.8398 14.5508 16.4854 13.4883C15.0039 12.8359 14.2627 11.6094 14.2627 9.80859C14.2627 7.74609 15.7031 6.27344 18.583 5.39062L19.4922 7.03125C17.5859 7.625 16.6348 8.42578 16.6348 9.43359C16.6348 9.92188 17.0674 10.3633 17.9326 10.7578C19.7822 11.5977 20.707 13.2383 20.707 15.6797C20.707 18.332 18.4766 21 14.017 21ZM5.32324 21L5.32324 18C5.32324 16.0547 6.14551 14.5508 7.79102 13.4883C6.30957 12.8359 5.56836 11.6094 5.56836 9.80859C5.56836 7.74609 7.00879 6.27344 9.88867 5.39062L10.7979 7.03125C8.8916 7.625 7.94043 8.42578 7.94043 9.43359C7.94043 9.92188 8.37305 10.3633 9.23828 10.7578C11.0879 11.5977 12.0127 13.2383 12.0127 15.6797C12.0127 18.332 9.78223 21 5.32324 21Z" />
                    </svg>
                </div>

                {/* Quotes Sequence */}
                <div className="space-y-12">
                    {quotes.map((quote, index) => (
                        <div
                            key={index}
                            className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                            style={{ transitionDelay: `${index * 300}ms` }}
                        >
                            <p className="font-cormorant text-3xl font-medium italic leading-relaxed text-text-primary sm:text-4xl md:text-5xl">
                                {quote}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Closing Line */}
                <div className={`mt-24 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                    <div className="mx-auto mb-6 h-px w-24 bg-emotional-accent"></div>
                    <p className="font-playfair text-2xl font-bold text-accent-dark sm:text-3xl">
                        That's not ingratitude. <span className="text-secondary">That's awareness.</span>
                    </p>
                </div>

            </div>
        </section>
    );
}
