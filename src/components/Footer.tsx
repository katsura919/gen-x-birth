export default function Footer() {
    return (
        <footer className="bg-accent-dark py-20 text-center text-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Main Message */}
                <div className="mb-20 space-y-6">
                    <p className="font-original font-playfair text-2xl font-light text-white/80 sm:text-3xl">
                        You are not too old.
                    </p>
                    <p className="font-original font-playfair text-2xl font-light text-white/80 sm:text-3xl">
                        You are not too late.
                    </p>
                    <div className="pt-8">
                        <p className="mx-auto max-w-4xl font-playfair text-3xl font-bold leading-tight text-secondary drop-shadow-[0_0_15px_rgba(110,198,202,0.3)] sm:text-4xl md:text-5xl">
                            Gen X Rebirth is what happens when a woman stops surviving and starts choosing.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="mx-auto mb-12 h-px w-full max-w-xs bg-white/10"></div>

                {/* Links */}
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <p className="font-inter text-sm text-white/40">
                        &copy; 2026 Gen X Rebirth. All rights reserved.
                    </p>

                    <div className="flex gap-8">
                        <a href="#" className="font-inter text-sm text-white/60 transition-colors hover:text-white">Privacy Policy</a>
                        <a href="#" className="font-inter text-sm text-white/60 transition-colors hover:text-white">Terms of Service</a>
                        <a href="#" className="font-inter text-sm text-white/60 transition-colors hover:text-white">Contact</a>
                    </div>

                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                        <div className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"></div>
                        <div className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"></div>
                        <div className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"></div>
                    </div>
                </div>

            </div>
        </footer>
    );
}
