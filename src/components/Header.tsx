'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/90 py-4 shadow-sm backdrop-blur-md'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <Logo className={`h-10 w-auto text-accent-dark transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`} />
                </div>

                {/* Desktop Navigation / CTAs */}
                <div className="hidden items-center gap-4 sm:flex">
                    <button className="rounded-full border border-accent-dark px-6 py-2.5 font-dm-sans text-sm font-bold uppercase tracking-wider text-accent-dark transition-all hover:bg-accent-dark hover:text-white">
                        Book a Call
                    </button>

                    <button className="rounded-full bg-secondary px-6 py-2.5 font-dm-sans text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-cta-hover hover:shadow-lg">
                        Take Quiz
                    </button>
                </div>

                {/* Mobile Menu Button (Placeholder) */}
                <div className="sm:hidden">
                    <button className="text-accent-dark">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

            </div>
        </header>
    );
}
