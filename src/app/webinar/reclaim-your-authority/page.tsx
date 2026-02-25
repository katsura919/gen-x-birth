'use client';

import { motion } from 'framer-motion';
import WebinarRegistrationForm from '@/components/WebinarRegistrationForm';
import {
    CheckCircle2,
    ArrowRight,
    Play,
    Heart,
    UserPlus,
    Sparkles,
    Target,
    Briefcase,
    Shield,
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
                                Free 30 Minutes Live Webinar
                            </div>

                            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-primary">
                                Own Your Life. <br />
                                <span className="text-secondary">Reclaim Your Authority.</span> <br />
                                Begin Again — On Your Terms.
                            </h1>

                            <p className="font-inter text-xl sm:text-2xl text-text-primary leading-relaxed max-w-xl">
                                For Gen X Women Ready to Stop Over-Functioning and Start Leading
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 mt-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-xl bg-accent-dark/30 text-primary">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-inter text-sm text-text-secondary uppercase tracking-wider">Date & Time</p>
                                        <p className="font-playfair text-lg font-bold text-primary">Tuesday, March 31st | 12 PM EST</p>
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
                            <WebinarRegistrationForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-primary italic">A Personal Message from Celeste</h2>
                            <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full" />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-bg-light"
                        >
                            <video
                                className="w-full h-full object-cover"
                                controls
                            >
                                <source src="https://res.cloudinary.com/drpxke63n/video/upload/v1771848988/0223_yis3q1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MY STORY */}
            <section className="py-20 lg:py-32 bg-bg-light relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-last lg:order-first">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://res.cloudinary.com/drpxke63n/image/upload/v1771849721/Angelic_Sunset_Power_qtyqbl.png"
                                    alt="Celeste Angelic London"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 p-8 bg-white rounded-2xl shadow-xl max-w-xs border border-primary/10">
                                <p className="font-playfair text-xl italic text-primary">"High-functioning isn't the same as fulfilled."</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-primary">My Story</h2>
                            <div className="space-y-6 font-inter text-lg text-text-primary leading-relaxed">
                                <p className="font-bold text-secondary text-xl">I am a Gen X woman who understands what it means to carry everything.</p>
                                <p>We were raised between independence and expectation. We learned to survive. We learned to perform. We learned to over-give.</p>
                                <p>I built my life, rebuilt my life, and rebuilt again. And what I discovered is this:</p>

                                <ul className="space-y-4 pt-4">
                                    {[
                                        { text: "High-functioning isn't the same as fulfilled.", icon: <Shield className="w-5 h-5" /> },
                                        { text: "Strong isn't the same as supported.", icon: <Heart className="w-5 h-5" /> },
                                        { text: "Successful isn't the same as sovereign.", icon: <Target className="w-5 h-5" /> },
                                    ].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-4 bg-white/50 p-4 rounded-xl border border-primary/5 shadow-sm"
                                        >
                                            <div className="text-secondary">{item.icon}</div>
                                            <span className="font-medium">{item.text}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                <p className="pt-4">This webinar is the framework I wish I had sooner. It's not about burning everything down. It's about repositioning the woman you already are.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO THIS IS FOR */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
                        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-primary">Who This Is For</h2>
                        <p className="font-inter text-xl text-text-secondary">If you're tired of being the backbone and ready to become the authority — this is for you.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "Gen X women who took the Gen X Authority Quiz and are ready for the next step",
                            "Over-functioning solopreneur women",
                            "Single Gen X solopreneur moms",
                            "High-achieving, career-oriented Gen X women",
                            "Women navigating career transitions and rediscovering passion",
                            "Gen X women healing from toxic relationships",
                            "Women stuck in chronic over-giving"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-bg-light/50 p-6 rounded-2xl border border-primary/5 hover:border-secondary transition-all group"
                            >
                                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <p className="font-inter font-medium text-text-primary">{item}</p>
                            </motion.div>
                        ))}
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
                            <h2 className="font-playfair text-4xl sm:text-5xl font-bold"><span className="text-white">What You'll Learn</span></h2>
                            <p className="font-inter text-xl text-white/80">Inside this live training, you'll discover:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                            {[
                                { title: "The Gen X Legacy", desc: "The real cost of carrying the backbone mentality for decades." },
                                { title: "Over-Giving Exit Strategy", desc: "A step-by-step path to overcoming chronic over-giving and reclaiming your energy." },
                                { title: "Authority Boundaries", desc: "How to stop taking on work that was never yours without guilt." },
                                { title: "Pattern Breaking", desc: "A real formula for healing from toxic relationship patterns and choosing stability." },
                                { title: "Passion Blueprint", desc: "How to identify your Rediscovered Passion Blueprint and align it with your life." },
                                { title: "Wisdom to Income", desc: "How to turn your lived wisdom into aligned income and lasting impact." },
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
                                        <p className="font-inter text-white/70 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-24 text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <p className="font-inter text-2xl font-medium italic">
                                "You will walk away with clarity and actionable steps that work for your unique Gen X woman situation."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY THIS MATTERS */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-1">
                                <h2 className="font-playfair text-4xl font-bold text-primary sticky top-32">Why this matters...</h2>
                            </div>
                            <div className="lg:col-span-2 space-y-16">
                                {[
                                    {
                                        step: "01",
                                        title: "Gen X women have been the backbone.",
                                        text: "We followed the baby boomers' footsteps, taking on more than required to keep families, careers, and communities afloat."
                                    },
                                    {
                                        step: "02",
                                        title: "We ran on empty.",
                                        text: "We normalized exhaustion. We called it strength. But high-functioning survival is not the same as leadership."
                                    },
                                    {
                                        step: "03",
                                        title: "If we don't interrupt the pattern now, we pass it down.",
                                        text: "You need direct, proven strategies that are time-tested, not another inspirational quote. This is about breaking the cycle."
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="space-y-4"
                                    >
                                        <span className="font-playfair text-6xl font-bold text-accent-dark/30 block leading-none">{item.step}</span>
                                        <h3 className="font-playfair text-2xl font-bold text-primary">{item.title}</h3>
                                        <p className="font-inter text-lg text-text-primary leading-relaxed">{item.text}</p>
                                    </motion.div>
                                ))}
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
                                <span>Spaces are limited.</span> <br />
                                <span className="text-secondary italic">Step into your authority now.</span>
                            </h2>
                            <p className="font-inter text-xl text-text-primary">
                                This will not be available as a replay forever. <br />
                                If you feel the shift happening, trust it.
                            </p>
                        </div>

                        <div className="bg-primary backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-2xl border border-white max-w-xl mx-auto">
                            <p className=" text-white mb-8 text-lg uppercase tracking-widest flex items-center justify-center gap-2">
                                <span>Register here</span>
                            </p>
                            <WebinarRegistrationForm />
                        </div>

                        <p className="font-inter text-sm text-text-secondary">
                            You'll get instant access to the webinar room after signing up.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
