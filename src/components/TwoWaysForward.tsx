'use client';

export default function TwoWaysForward() {
    return (
        <section className="bg-bg-light py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <h2 className="font-playfair mb-16 text-center text-3xl font-bold text-accent-dark sm:text-4xl">
                    Two Ways to Move Forward
                </h2>

                <div className="mx-auto grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 lg:items-start">

                    {/* Card 1: Quiz (Funnel Entry) */}
                    <div className="flex flex-col rounded-3xl border-t-8 border-secondary bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl lg:p-10">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-highlight-bg text-3xl">
                            💡
                        </div>
                        <h3 className="font-dm-sans mb-2 text-sm font-bold uppercase tracking-widest text-secondary">
                            Option 1: Get Clarity
                        </h3>
                        <h4 className="font-playfair mb-4 text-3xl font-bold text-accent-dark">
                            Understand Your Stage
                        </h4>
                        <p className="font-inter mb-8 flex-auto text-lg text-text-primary">
                            Name what's happening. Stop guessing. Get a personalized roadmap for your rebirth.
                        </p>
                        <div className="mt-6">
                            <button className="w-full rounded-full bg-secondary py-4 font-dm-sans text-base font-bold uppercase tracking-wider text-white transition-colors hover:bg-cta-hover">
                                Take the Quiz →
                            </button>
                            <p className="mt-4 text-center font-inter text-sm text-text-secondary">
                                Free. 2–3 minutes.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Book Call (High Value) */}
                    <div className="flex flex-col rounded-3xl bg-accent-dark p-8 shadow-xl transition-all duration-300 hover:shadow-2xl lg:scale-105 lg:transform lg:p-10">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-3xl backdrop-blur-sm">
                            🔑
                        </div>
                        <h3 className="font-dm-sans mb-2 text-sm font-bold uppercase tracking-widest text-white/70">
                            Option 2: Begin the Work
                        </h3>
                        <h4 className="font-playfair mb-4 text-3xl font-bold text-white">
                            Private Coaching
                        </h4>
                        <ul className="font-inter mb-8 flex-auto space-y-3 text-lg text-bg-light/90">
                            <li className="flex gap-3">
                                <span className="text-secondary">✓</span> For women ready to own their authority
                            </li>
                            <li className="flex gap-3">
                                <span className="text-secondary">✓</span> Done outsourcing their worth
                            </li>
                            <li className="flex gap-3">
                                <span className="text-secondary">✓</span> Ready to rebuild on their own terms
                            </li>
                        </ul>
                        <div className="mt-6">
                            <button className="w-full rounded-full bg-white py-4 font-dm-sans text-base font-bold uppercase tracking-wider text-accent-dark transition-colors hover:bg-bg-light">
                                Book a Call →
                            </button>
                            <p className="mt-4 text-center font-inter text-sm text-white/60">
                                Serious inquiries only.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
