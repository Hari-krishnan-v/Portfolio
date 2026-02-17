"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Terminal } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';
import { Magnetic } from '@/components/ui/Magnetic';
import { MacWindow } from '@/components/ui/MacWindow';
import { TerminalBlock } from '@/components/ui/TerminalBlock';

export function Hero() {
    const { personalInfo } = portfolioData;

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 text-foreground">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-terminal-green/20 blur-[120px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

                {/* Left Column: Terminal Interface */}
                <div className="order-2 lg:order-1 flex flex-col items-start z-10 w-full">
                    <MacWindow id="hero" title="user@portfolio: ~" className="shadow-2xl shadow-terminal-green/10">
                        <TerminalBlock
                            text={`> initializing system...\n> loading profile data...\n> access granted.\n\nHello, I'm ${personalInfo.name}.\n\n${personalInfo.role}\n\nBuilding digital experiences that blend aesthetic perfection with technical excellence.`}
                            typingDelay={30}
                            className="text-base md:text-lg min-h-[200px]"
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.5, duration: 0.5 }}
                            className="mt-6 flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-4">
                                <Magnetic strength={0.2}>
                                    <Link
                                        href="#projects"
                                        className="group flex items-center gap-2 px-6 py-3 bg-terminal-green/10 border border-terminal-green text-terminal-green hover:bg-terminal-green hover:text-black rounded transition-all font-mono text-sm"
                                    >
                                        ./view_work.sh <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Magnetic>
                                <Magnetic strength={0.1}>
                                    <Link
                                        href="#contact"
                                        className="px-6 py-3 bg-transparent border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white rounded transition-all font-mono text-sm"
                                    >
                                        ./contact_me.sh
                                    </Link>
                                </Magnetic>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <span className="text-gray-500 font-mono text-xs">Find me on:</span>
                                {[
                                    { icon: Github, href: personalInfo.github },
                                    { icon: Linkedin, href: personalInfo.linkedin },
                                    { icon: Mail, href: `mailto:${personalInfo.email}` }
                                ].map((social, index) => (
                                    <Magnetic key={index} strength={0.2}>
                                        <Link
                                            href={social.href}
                                            target="_blank"
                                            className="text-gray-500 hover:text-terminal-green transition-colors"
                                        >
                                            <social.icon size={20} />
                                        </Link>
                                    </Magnetic>
                                ))}
                            </div>
                        </motion.div>
                    </MacWindow>
                </div>

                {/* Right Column: Profile Image / Visual */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                    <MacWindow title="preview.jpg" className="max-w-md rotate-1 hover:rotate-0 transition-transform duration-500" noPadding>
                        <div className="relative aspect-square w-full grayscale hover:grayscale-0 transition-all duration-700">
                            <Image
                                src="/me.jpg"
                                alt={personalInfo.name}
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Scanline overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
                        </div>
                    </MacWindow>
                </div>
            </div>
        </section>
    );
}
