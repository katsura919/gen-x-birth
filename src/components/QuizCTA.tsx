'use client';

export default function QuizCTA({ placement = "first" }: { placement?: "first" | "second" }) {
    return (
        <section className="bg-accent-dark py-20 text-center">
            <div className="mx-auto max-w-4xl px-6">

                {/* Headline */}
                <h2 className="font-playfair mb-8 text-3xl font-bold leading-tight text-white sm:text-4xl">
                    {placement === "first"
                        ? "BEFORE YOU GO ANY FURTHER — TAKE THE FREE QUIZ"
                        : "READY TO UNCOVER WHAT'S HOLDING YOU BACK?"}
                </h2>

                {/* Body Text */}
                <p className="font-inter mb-10 text-lg leading-relaxed text-bg-light/90">
                    Find out exactly where you are in the Gen X Rebirth cycle and get a personalized roadmap for your next chapter.
                </p>

                {/* CTA Button */}
                <div className="flex flex-col items-center gap-4">
                    <button className="group relative overflow-hidden rounded-full bg-secondary px-10 py-5 font-dm-sans text-lg font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(110,198,202,0.3)] transition-all duration-300 hover:bg-cta-hover hover:shadow-[0_0_30px_rgba(58,158,163,0.5)] active:scale-95">
                        <span className="relative z-10 flex items-center gap-2">
                            Take the Free Gen X Rebirth Quiz
                            <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </button>

                    <p className="font-inter text-sm text-bg-light/60">
                        2–3 minutes. Private. No pressure.
                    </p>
                </div>

            </div>
        </section>
    );
}
