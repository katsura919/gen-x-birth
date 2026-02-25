'use client';

import { motion } from 'framer-motion';
import WebinarRegistrationForm from '@/components/WebinarRegistrationForm';
import {
    CheckCircle2,
    Sparkles,
    AlertCircle,
    Zap,
    Clock
} from 'lucide-react';
import Image from 'next/image';

export default function WebinarPage() {
    return (
        <main className="min-h-screen bg-bg-main overflow-x-hidden">
            {/* HER0 / REGISTRATION TOP */}
            <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-dm-sans text-sm font-bold uppercase tracking-wider">
                                <Sparkles className="w-4 h-4" />
                                Free Live Training
                            </div>

                            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary">
                                Gen X Authority: <br />
                                <span className="text-secondary">How to Leverage Your Income,</span> <br />
                                Influence & Experience in 2026
                            </h1>

                            <div className="font-inter text-lg sm:text-xl text-text-primary leading-relaxed max-w-xl space-y-4">
                                <p>Laid Off? Burned Out? Still in the Corporate Grind?</p>
                                <p className="text-secondary font-semibold italic">It’s Time to Leverage Your Experience — Not Start Over.</p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6 mt-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-accent-dark/30 text-primary">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-inter text-sm text-text-secondary uppercase tracking-wider">Date & Time</p>
                                        <p className="font-playfair text-lg font-bold text-primary">Tuesday, April 28th | 12 NN EST</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-primary/95 backdrop-blur-md rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl border border-white/10"
                        >
                            <h2 className="font-playfair text-3xl font-bold text-white mb-6 text-center">
                                <span className="text-white">Reserve Your Spot</span>
                            </h2>
                            <WebinarRegistrationForm tags={['linkedin webinar']} />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE TRUTH / PRE-VIDEO TEXT SECTION */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="space-y-8">
                            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-primary text-center">
                                You’ve built a career. You’ve led teams. You’ve solved problems. You’ve carried companies.
                            </h2>
                            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                <div className="space-y-6">
                                    <h3 className="font-playfair text-2xl font-bold text-primary">And now?</h3>
                                    <ul className="space-y-4">
                                        {[
                                            "You’ve been laid off and feel blindsided.",
                                            "Or you’re still employed but exhausted by corporate politics.",
                                            "Or you’re watching younger colleagues leapfrog while you carry the load.",
                                            "Or you’re asking yourself, “Is this really how I finish my career?”"
                                        ].map((item, i) => (
                                            <li key={i} className="flex gap-3 items-start">
                                                <AlertCircle className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                                                <span className="font-inter text-text-primary text-lg">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-bg-light/80 p-8 rounded-3xl border border-primary/10">
                                    <h3 className="font-playfair text-2xl font-bold text-secondary mb-6">Here’s the truth:</h3>
                                    <p className="font-inter text-lg text-text-primary mb-6">Gen X was never meant to fade quietly into the background.</p>
                                    <ul className="space-y-3 font-inter font-bold text-primary text-lg">
                                        <li>✓ You are not behind.</li>
                                        <li>✓ You are not obsolete.</li>
                                        <li>✓ You are not done.</li>
                                        <li className="text-secondary text-2xl pt-2 pb-1 font-playfair italic">★ You are positioned.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* WHO THIS IS FOR */}
            <section className="py-20 lg:py-32 bg-bg-light overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                            {/* Left Image Column */}
                            <div className="lg:col-span-5 relative">
                                <div className="space-y-8 lg:sticky lg:top-32 w-full max-w-lg mx-auto lg:max-w-none">
                                    <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-primary text-center lg:text-left">
                                        This Webinar Is <br className="hidden lg:block" /><span className="text-secondary italic">for You If:</span>
                                    </h2>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="relative w-full aspect-[4/5] sm:aspect-video lg:aspect-[4/5] xl:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                                    >
                                        <Image
                                            src="/images/webinar/Angelic Modern Office.png"
                                            alt="Modern Office"
                                            fill
                                            className="object-cover"
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Right Checklist Column */}
                            <div className="lg:col-span-7 xl:pl-6 pt-4 lg:pt-24">
                                <div className="flex flex-col gap-6 max-w-2xl mx-auto lg:max-w-none">
                                    {[
                                        "You’re unemployed and unsure of your next move",
                                        "You’re employed but exhausted",
                                        "You’re over 45 and feeling professionally invisible",
                                        "You’re ready to stop trading time for security",
                                        "You want clarity, confidence, and authority"
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1, duration: 0.6 }}
                                            viewport={{ once: true }}
                                            className={`bg-white p-6 md:p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all border border-primary/5 flex items-center gap-6 group relative overflow-hidden ${i % 2 !== 0 ? 'lg:ml-12' : ''
                                                }`}
                                        >
                                            <div className="absolute left-0 top-0 w-1.5 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                                            <div className="w-14 h-14 rounded-full bg-bg-main flex-shrink-0 flex items-center justify-center text-primary border border-secondary/20 shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                                <CheckCircle2 className="w-7 h-7" />
                                            </div>
                                            <p className="font-playfair font-bold text-text-primary text-xl md:text-2xl leading-snug group-hover:text-secondary transition-colors duration-300">
                                                {item}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT YOU'LL LEARN */}
            <section className="py-20 lg:py-32 bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center space-y-6 mb-20">
                            <h2 className="font-playfair text-4xl sm:text-5xl font-bold"><span className="text-white">In this free live training, you’ll learn:</span></h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-4xl mx-auto aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl mb-20 border-4 border-white/10"
                        >
                            <Image
                                src="/images/webinar/Angelic Income.png"
                                alt="Income Leverage"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {[
                                { title: "Income Leverage", desc: "How to turn decades of experience into income leverage" },
                                { title: "3 Income Pathways", desc: "The 3 income pathways Gen X professionals are using after layoffs" },
                                { title: "Strategic Repositioning", desc: "How to reposition yourself without “starting from scratch”" },
                                { title: "The Hidden Truth", desc: "What corporations don’t tell mid-career professionals" },
                                { title: "Operating From Authority", desc: "How to stop over-functioning and start operating from authority" },
                                { title: "Employee to Strategist", desc: "The mindset shift from employee thinking to strategic positioning" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center font-playfair text-2xl font-bold">
                                        {i + 1}
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-playfair text-2xl font-bold text-accent-dark"><span className="text-white">{item.title}</span></h3>
                                        <p className="font-inter text-white/70 leading-relaxed text-lg">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-24 text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                            <p className="font-inter text-2xl font-medium italic">
                                "This is not hustle culture.<br />
                                This is not “just start a side gig.”"
                            </p>
                            <p className="font-playfair text-3xl font-bold text-secondary mt-4">
                                This is about reclaiming economic power in midlife.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY THIS MATTERS (Layoffs & Corporate) */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto space-y-20">
                        <div className="text-center mb-16">
                            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-primary">The Choices Ahead...</h2>
                        </div>

                        <div className="space-y-24">
                            {[
                                {
                                    step: "01",
                                    title: "If You’ve Been Laid Off…",
                                    text: "You don’t need another résumé rewrite workshop. You need:",
                                    bullets: ["Strategic positioning", "Income diversification", "Authority-based leverage"],
                                    footer: "Your experience is an asset class. You just haven’t been taught how to monetize it properly.",
                                    image: "/images/webinar/Angelic Laid Off.png"
                                },
                                {
                                    step: "02",
                                    title: "If You’re Still in Corporate…",
                                    text: "You can stay — but stay strategically. Learn how to:",
                                    bullets: ["Increase influence without burning out", "Negotiate from strength", "Build parallel income streams", "Prepare for your next chapter on your terms"],
                                    footer: "No more reaction mode.",
                                    image: "/images/webinar/Angelic checking the time.png"
                                },
                                {
                                    step: "03",
                                    title: "Why This Matters Now",
                                    text: "Gen X (currently in their 40s to early 60s) is at a critical financial inflection point:",
                                    bullets: ["Retirement timelines are shifting", "Corporate loyalty is gone", "Layoffs are normalized", "AI is reshaping industries"],
                                    footer: "This is not the season to shrink. This is the season to leverage.",
                                    image: "/images/webinar/Angelic Group Professionals.png"
                                }
                            ].map((item, i) => {
                                const isEven = i % 2 === 0;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                                    >
                                        <div className="w-full lg:w-1/2">
                                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full lg:w-1/2 space-y-6">
                                            <span className="font-playfair text-6xl font-bold text-accent-dark/30 block leading-none">{item.step}</span>
                                            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-primary">{item.title}</h3>
                                            <p className="font-inter text-xl text-text-primary leading-relaxed font-semibold">{item.text}</p>
                                            <ul className="space-y-3 py-2">
                                                {item.bullets.map((bullet, idx) => (
                                                    <li key={idx} className="flex gap-3 items-center text-lg font-inter text-text-primary">
                                                        <Zap className="w-5 h-5 text-secondary shrink-0" />
                                                        {bullet}
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="inline-block px-6 py-4 rounded-2xl bg-bg-light border border-primary/10">
                                                <p className="font-inter text-lg text-secondary font-medium italic">{item.footer}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* MY STORY */}
            <section className="py-20 lg:py-32 bg-bg-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        <div className="relative order-last lg:order-first lg:col-span-5">
                            <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/webinar/Angelic Lavender Dress Green Accessories.png"
                                        alt="Celeste Angelic London"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-4 md:-right-8 p-6 md:p-8 bg-white rounded-2xl shadow-xl max-w-[280px] md:max-w-xs border border-primary/10">
                                    <p className="font-playfair text-xl italic text-primary">"If I can rise, so can you."</p>
                                    <p className="font-inter font-bold text-text-primary mt-3 flex flex-col">
                                        Hosted by Celeste London
                                        <span className="text-secondary font-normal text-sm">Gen X Authority Mentor</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 lg:col-span-7 lg:pl-8">
                            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-primary">My Story</h2>
                            <div className="space-y-6 font-inter text-lg text-text-primary leading-relaxed">
                                <p>
                                    As a woman of colour navigating the North American workforce, I’ve been laid off more than once — and each time, I had to rebuild. As a solo parent without a support network, there was no backup plan. <span className="font-bold text-secondary">I became the plan.</span>
                                </p>
                                <p>
                                    Through years of professional experience, resilience, and reinvention, I learned how to leverage my skills, pivot strategically, and turn passion into income — even when the road felt uncertain and uncomfortable.
                                </p>
                                <p>
                                    I know what it takes to step outside your comfort zone with courage and grit. And now, with dignity and deep compassion, I help women do the same — reclaim their authority, secure meaningful work, and create income aligned with who they are today.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-20 lg:py-32 bg-accent-dark/20 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-3xl mx-auto space-y-10">
                        <div className="space-y-4">
                            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-primary leading-tight">
                                <span>You don’t need reinvention.</span> <br />
                                <span className="text-secondary italic">You need to Reserve Your Spot Now.</span>
                            </h2>
                            <p className="font-inter text-xl text-text-primary max-w-2xl mx-auto">
                                This is a free live training for Gen X professionals ready to reclaim control of their income and future. <br />
                                <span className="font-bold text-secondary">Seats are limited.</span>
                            </p>
                        </div>

                        <div className="bg-primary backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-2xl border border-white max-w-xl mx-auto">
                            <p className=" text-white mb-8 text-lg uppercase tracking-widest flex items-center justify-center gap-2">
                                <span>Register here</span>
                            </p>
                            <WebinarRegistrationForm tags={['linked webinar']} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
