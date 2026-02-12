'use client';

export default function TwoWaysForward() {
    return (
        <section className="bg-bg-light py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="relative overflow-hidden rounded-3xl bg-[#0F5A5C] shadow-2xl lg:flex lg:gap-x-20">

                    {/* Content - Left Side */}
                    <div className="px-6 py-12 sm:px-12 md:pt-16 lg:w-1/2 lg:px-16 lg:py-24 relative z-10">
                        <div className="mx-auto max-w-md text-center lg:mx-0 lg:text-left">
                            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl font-playfair leading-tight">
                                <span className="text-white">Ready to Transform Your</span><br />
                                <span className="text-white">Leadership Journey?</span>
                            </h2>
                            <p className="mt-4 text-base leading-7 text-white/90 font-inter">
                                It's time to take the next step in your professional growth.
                                You're not alone, Gen X Rebirth has helped hundreds of professionals like you step into leadership with confidence and clarity.
                            </p>
                            <div className="mt-8 flex items-center justify-center gap-x-6 lg:justify-start">
                                <a
                                    href="https://calendly.com/genxrebirth/new-meeting?back=1"
                                    target="_blank"
                                    className="rounded-md bg-white px-6 py-3 text-sm font-bold text-[#0F5A5C] shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white font-dm-sans uppercase tracking-wider transition-all hover:-translate-y-1"
                                >
                                    Book a Call
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Image - Right Side with Fade */}
                    <div className="relative h-64 lg:h-auto lg:w-1/2">
                        {/* Gradient Mask Overlay - Mobile Only */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0F5A5C] via-transparent to-transparent lg:hidden"></div>

                        <img
                            className="h-full w-full object-cover object-center"
                            src="/images/6.png"
                            alt="Transformation success"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
