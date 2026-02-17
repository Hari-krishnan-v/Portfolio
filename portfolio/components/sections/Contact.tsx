"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, MapPin, Copy, Check, Send, Terminal } from 'lucide-react';
import { useState } from 'react';
import { MacWindow } from '@/components/ui/MacWindow';

export function Contact() {
    const { personalInfo } = portfolioData;
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

                {/* Contact Info (Left Side) */}
                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <Terminal className="text-terminal-green" size={32} />
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-mono">
                                ./contact_me
                            </h2>
                        </div>

                        <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg font-mono">
                            {">"} I'm currently available for freelance projects and new opportunities.
                            <br /><span className="text-terminal-blue">{"//"} Drop a line below.</span>
                        </p>

                        <div className="space-y-6 font-mono text-sm">
                            <div className="flex items-center gap-4 group">
                                <span className="text-terminal-purple">{">"}</span>
                                <span className="w-24 text-gray-500">const email</span>
                                <span className="text-terminal-yellow">=</span>
                                <div className="flex items-center gap-2">
                                    <a href={`mailto:${personalInfo.email}`} className="text-terminal-green hover:underline">
                                        "{personalInfo.email}"
                                    </a>
                                    <button onClick={handleCopy} className="text-gray-600 hover:text-white transition-colors" title="Copy">
                                        {copied ? <Check size={14} /> : <Copy size={14} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <span className="text-terminal-purple">{">"}</span>
                                <span className="w-24 text-gray-500">const phone</span>
                                <span className="text-terminal-yellow">=</span>
                                <span className="text-terminal-green">"{personalInfo.phone}"</span>
                            </div>

                            <div className="flex items-center gap-4 group">
                                <span className="text-terminal-purple">{">"}</span>
                                <span className="w-24 text-gray-500">const loc</span>
                                <span className="text-terminal-yellow">=</span>
                                <span className="text-terminal-green">"{personalInfo.location}"</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Form (Right Side) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <MacWindow id="contact" title="send_message.sh" className="bg-[#0d1117] border-terminal-border">
                        <form className="space-y-4 font-mono text-sm p-2">
                            <div className="space-y-1">
                                <label htmlFor="name" className="block text-[#8b949e] text-xs"># Enter your name</label>
                                <div className="flex items-center gap-2 bg-[#161b22] border border-[#30363d] rounded px-3 py-2 text-[#c9d1d9] focus-within:border-terminal-blue">
                                    <span className="text-terminal-pink">$</span>
                                    <input
                                        type="text"
                                        id="name"
                                        className="bg-transparent border-none outline-none w-full placeholder-gray-700"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="email" className="block text-[#8b949e] text-xs"># Enter your email</label>
                                <div className="flex items-center gap-2 bg-[#161b22] border border-[#30363d] rounded px-3 py-2 text-[#c9d1d9] focus-within:border-terminal-blue">
                                    <span className="text-terminal-pink">$</span>
                                    <input
                                        type="email"
                                        id="email"
                                        className="bg-transparent border-none outline-none w-full placeholder-gray-700"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label htmlFor="message" className="block text-[#8b949e] text-xs"># Enter your message</label>
                                <div className="flex items-start gap-2 bg-[#161b22] border border-[#30363d] rounded px-3 py-2 text-[#c9d1d9] focus-within:border-terminal-blue">
                                    <span className="text-terminal-pink mt-1">{">"}</span>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="bg-transparent border-none outline-none w-full resize-none placeholder-gray-700"
                                        placeholder="System status report..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-4 bg-terminal-green/10 text-terminal-green border border-terminal-green hover:bg-terminal-green hover:text-black py-3 rounded font-bold transition-all flex items-center justify-center gap-2 group"
                            >
                                <span>./send_message</span>
                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </MacWindow>
                </motion.div>
            </div>
        </section>
    );
}
