"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { useState } from 'react';
import { Magnetic } from '@/components/ui/Magnetic';

export function Contact() {
    const { personalInfo } = portfolioData;
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-background">
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Let's Work Together</h2>
                    <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
                        I'm currently available for freelance projects and open to new full-time opportunities.
                        If you have a project that needs some creative touch, or just want to say hi, feel free to drop me a message.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium mb-1">Email</p>
                                <div className="flex items-center gap-3">
                                    <a href={`mailto:${personalInfo.email}`} className="text-xl font-medium text-white hover:text-blue-400 transition-colors">
                                        {personalInfo.email}
                                    </a>
                                    <button onClick={handleCopy} className="text-gray-500 hover:text-white transition-colors p-1" title="Copy email">
                                        {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                                <Phone size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium mb-1">Phone</p>
                                <p className="text-xl font-medium text-white">{personalInfo.phone}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 group">
                            <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 font-medium mb-1">Location</p>
                                <p className="text-xl font-medium text-white">{personalInfo.location}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-neutral-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl relative"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder:text-gray-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder:text-gray-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white placeholder:text-gray-600"
                                placeholder="Project Inquiry"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-white placeholder:text-gray-600"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <Magnetic strength={0.2} >
                            <button
                                type="submit"
                                className="
    group relative w-full overflow-hidden
    rounded-xl px-5 py-3
    bg-neutral-900/50 backdrop-blur-xl
    border border-white/10
    text-white font-semibold tracking-wide

    flex items-center justify-center gap-2

    transition-all duration-300 ease-out
    hover:bg-neutral-800/70
    hover:border-blue-500/40
    hover:shadow-lg hover:shadow-blue-500/20

    active:scale-[0.98]
  "
                            >
                                {/* subtle glow */}
                                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-500/10" />

                                {/* content */}
                                <span className="relative flex items-center gap-2">
                                    Send Message
                                    <Send
                                        size={18}
                                        className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </span>
                            </button>

                        </Magnetic>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
