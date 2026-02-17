"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioData } from '@/data/portfolio';
import { Magnetic } from '@/components/ui/Magnetic';
import { TextReveal } from '@/components/ui/TextReveal';

export function Hero() {
    const { personalInfo } = portfolioData;

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-background text-foreground">
            {/* Ambient Background with continuous breathing animation */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[120px]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-start z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-gray-400 backdrop-blur-sm">
                            Available for work
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-gray-500 block text-3xl md:text-4xl font-normal mb-2"
                        >
                            I'm {personalInfo.name}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-gradient-accent block"
                        >
                            {personalInfo.role}
                        </motion.span>
                    </h1>

                    <div className="text-xl md:text-2xl text-gray-400 mb-10 max-w-lg leading-relaxed mix-blend-plus-lighter">
                        <TextReveal delay={0.5}>
                            Building digital experiences that blend aesthetic perfection with technical excellence.
                        </TextReveal>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <Magnetic strength={0.2}>
                            <Link
                                href="#projects"
                                className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium transition-all hover:bg-gray-200"
                            >
                                View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Magnetic>
                        <Magnetic strength={0.1}>
                            <Link
                                href="#contact"
                                className="px-8 py-4 bg-neutral-900 border border-white/10 text-white rounded-full font-medium transition-all hover:bg-neutral-800"
                            >
                                Contact Me
                            </Link>
                        </Magnetic>
                    </motion.div>

                    <div className="flex items-center gap-6">
                        {[
                            { icon: Github, href: personalInfo.github },
                            { icon: Linkedin, href: personalInfo.linkedin },
                            { icon: Mail, href: `mailto:${personalInfo.email}` }
                        ].map((social, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                            >
                                <Magnetic strength={0.2}>
                                    <Link
                                        href={social.href}
                                        target="_blank"
                                        className="p-3 text-gray-400 hover:text-white transition-colors block"
                                    >
                                        <social.icon size={24} />
                                    </Link>
                                </Magnetic>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                    {/* Modern Abstract Shape or 3D Element Placeholder with float animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: [0, -20, 0]
                        }}
                        transition={{
                            opacity: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                            scale: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
                        <div className="relative w-full h-full rounded-[2rem] border border-white/5 bg-neutral-900/50 backdrop-blur-xl flex items-center justify-center overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            <Image
                                src="/me.jpg"
                                alt={personalInfo.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
