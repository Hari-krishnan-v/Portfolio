"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { TextReveal } from '@/components/ui/TextReveal';

export function About() {
    const { professionalSummary, education, experience } = portfolioData;

    return (
        <section id="about" className="py-32 bg-background relative overflow-hidden">
            {/* Decorative gradient blob */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-semibold text-blue-500 tracking-wider uppercase mb-4">About Me</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                            Passionate about creating digital experiences that matter.
                        </h3>

                        <div className="text-lg text-gray-400 leading-relaxed space-y-6">
                            <TextReveal delay={0.2}>
                                {professionalSummary}
                            </TextReveal>
                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        {/* Experience Highlight */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors relative"
                        >
                            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-blue-500"></span>
                                Latest Experience
                            </h4>

                            {experience.slice(0, 2).map((exp, idx) => (
                                <div
                                    key={idx}
                                    className="mb-6 last:mb-0 relative group"
                                >
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h5 className="text-lg font-medium text-white">{exp.role}</h5>
                                        <span className="text-sm text-gray-500">{exp.employmentType}</span>
                                    </div>
                                    <p className="text-blue-400 text-sm mb-2">{exp.company}</p>

                                    {/* Hover Card */}
                                    {exp.companyDescription && (
                                        <div className="absolute left-0 bottom-full mb-4 w-72 p-4 bg-gray-900/90 backdrop-blur-md rounded-xl border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="flex items-center justify-between mb-2">
                                                <h6 className="font-semibold text-white">{exp.company}</h6>
                                                {exp.companyLocation && (
                                                    <span className="text-xs text-gray-400">{exp.companyLocation}</span>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-300 leading-relaxed mb-3">
                                                {exp.companyDescription}
                                            </p>
                                            {exp.companyUrl && (
                                                <a
                                                    href={exp.companyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                                                >
                                                    Visit Website
                                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                </a>
                                            )}
                                            {/* Arrow */}
                                            <div className="absolute -bottom-2 left-8 w-4 h-4 bg-gray-900/90 border-r border-b border-white/10 transform rotate-45"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </motion.div>

                        {/* Education Highlight */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                        >
                            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-purple-500"></span>
                                Education
                            </h4>

                            {education.map((edu, idx) => (
                                <div key={idx} className="mb-4 last:mb-0">
                                    <h5 className="text-lg font-medium text-white">{edu.degree}</h5>
                                    <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
                                        <span>{edu.university}</span>
                                        <span>{edu.year}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
