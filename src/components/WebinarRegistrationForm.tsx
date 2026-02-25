'use client';

import { useState } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface WebinarRegistrationFormProps {
    onSuccess?: () => void;
}

export default function WebinarRegistrationForm({ onSuccess }: WebinarRegistrationFormProps) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    tags: ['webinar'],
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.error === 'duplicate') {
                    setStatus('success');
                    onSuccess?.();
                    return;
                }
                throw new Error(data.message || 'Failed to register. Please try again.');
            }

            setStatus('success');
            onSuccess?.();
        } catch (error: any) {
            console.error('Registration error:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again later.');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-transparent p-8 text-center animate-fade-in">
                <div className="flex justify-center mb-4">
                    <CheckCircle2 className="w-16 h-16 text-secondary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-4"><span className="text-white">You're In!</span></h3>
                <p className="font-inter text-white/80 mb-6">
                    Check your email for the webinar details. We've reserved your seat!
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label htmlFor="firstName" className="block text-sm font-medium text-white/80 ml-1">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors"
                    />
                </div>
                <div className="space-y-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-white/80 ml-1">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors"
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-white/80 ml-1">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors"
                />
            </div>

            {errorMessage && (
                <p className="text-red-400 text-sm ml-1 animate-fade-in">
                    {errorMessage}
                </p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full group relative overflow-hidden rounded-full bg-secondary py-3 sm:py-4 px-2 sm:px-4 font-dm-sans text-[13px] sm:text-base font-bold uppercase tracking-wide sm:tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-cta-hover hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 cursor-pointer"
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'loading' ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing...
                        </>
                    ) : (
                        'RESERVE MY SEAT!'
                    )}
                </span>
            </button>

            <p className="text-center text-xs text-white/40 pt-2">
                By registering, you agree to our Terms of Service and Privacy Policy.
            </p>
        </form>
    );
}
