"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Briefcase, Calendar } from 'lucide-react';
import { Spotlight } from '@/components/ui/Spotlight';

export function Experience() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="py-32 bg-background relative">
            <div className="absolute inset-0 top-1/2 bg-gradient-to-b from-transparent to-blue-500/5 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-20 text-center text-white tracking-tight"
                >
                    Professional Journey
                </motion.h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent transform -translate-x-1/2 hidden md:block" />

                    <div className="space-y-16">
                        {experience.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-10 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-black border-4 border-blue-500 rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-1.5 z-10 hidden md:block shadow-[0_0_20px_rgba(59,130,246,0.5)]" />

                                <div className="flex-1 md:w-1/2">
                                    {/* Spacer for alternate side */}
                                </div>

                                <div className="flex-1 md:w-1/2">
                                    <Spotlight className={`bg-white/5 p-8 rounded-2xl border border-white/10 relative ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                        {/* Mobile Line and Dot */}
                                        <div className="absolute left-[-24px] top-8 w-3 h-3 bg-blue-500 rounded-full md:hidden shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                        <div className="absolute left-[-19px] top-12 bottom-[-80px] w-px bg-white/10 md:hidden last:hidden" />

                                        <div className="flex items-center gap-3 text-blue-400 text-sm mb-4 font-mono">
                                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                                                <Briefcase size={14} />
                                                <span>{exp.employmentType}</span>
                                            </div>
                                            {/* Placeholder for date/duration if available in future data updates */}
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                        <h4 className="text-lg font-medium text-gray-400 mb-6 flex items-center gap-2">
                                            {exp.company}
                                        </h4>

                                        {exp.previousRole && (
                                            <p className="text-sm text-gray-500 mb-6 italic border-l-2 border-white/10 pl-3">Previously: {exp.previousRole}</p>
                                        )}

                                        <ul className="space-y-4">
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-3">
                                                    <span className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                                                    {desc}
                                                </li>
                                            ))}
                                        </ul>
                                    </Spotlight>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
