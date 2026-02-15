"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const HeroBackground = ({ className }: { className?: string }) => {
    return (
        <div
            className={cn(
                "absolute inset-0 overflow-hidden pointer-events-none select-none bg-[#FDFBFF]",
                className
            )}
        >
            {/* SVG Container */}
            <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                viewBox="0 0 1440 800"
            >
                <defs>
                    <linearGradient id="grad-lavender" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#b186e0" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#7B6A9B" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="grad-teal" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3A9EA3" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#82c2b4" stopOpacity="0.1" />
                    </linearGradient>
                    <filter id="blur-filter" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
                    </filter>
                </defs>

                {/* Top Left Lavender Wave */}
                <path
                    d="M0,0 C300,0 400,200 200,400 C0,600 -100,200 0,0 Z"
                    fill="url(#grad-lavender)"
                    transform="scale(1.5)"
                />

                {/* Top Left Swoosh */}
                <path
                    d="M-100,0 C100,0 600,100 800,0 L0,0 Z"
                    fill="#b186e0"
                    fillOpacity="0.1"
                />


                {/* Bottom Left Teal Wave */}
                <path
                    d="M0,800 C300,800 600,600 400,400 C200,200 0,500 0,800 Z"
                    fill="url(#grad-teal)"
                />

                {/* Bottom Wave flowing across */}
                <path
                    d="M0,800 C400,700 800,600 1440,800 L0,800 Z"
                    fill="#82c2b4"
                    fillOpacity="0.15"
                />

                {/* Top Right Decorative Shape */}
                <circle cx="1300" cy="100" r="300" fill="#7B6A9B" fillOpacity="0.05" filter="url(#blur-filter)" />
                <circle cx="1400" cy="0" r="150" fill="#b186e0" fillOpacity="0.1" />


                {/* Bubbles / Circles */}
                {/* Lavender Bubbles */}
                <circle cx="100" cy="150" r="20" fill="#b186e0" fillOpacity="0.2" />
                <circle cx="150" cy="400" r="10" fill="#7B6A9B" fillOpacity="0.3" />
                <circle cx="50" cy="600" r="30" fill="#b186e0" fillOpacity="0.1" filter="url(#blur-filter)" />

                {/* Teal Bubbles */}
                <circle cx="300" cy="700" r="15" fill="#3A9EA3" fillOpacity="0.2" />
                <circle cx="500" cy="750" r="25" fill="#82c2b4" fillOpacity="0.1" />
                <circle cx="1200" cy="200" r="40" fill="#82c2b4" fillOpacity="0.1" filter="url(#blur-filter)" />

            </svg>

            {/* Additional blurred blobs for soft ambiance using div/css if svg is too sharp */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-[#b186e0] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob"></div>
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-[#82c2b4] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-[#3A9EA3] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-4000"></div>
            </div>
        </div>
    );
};
