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
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
                        >
                            <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-blue-500"></span>
                                Latest Experience
                            </h4>

                            {experience.slice(0, 2).map((exp, idx) => (
                                <div key={idx} className="mb-6 last:mb-0">
                                    <div className="flex justify-between items-baseline mb-1">
                                        <h5 className="text-lg font-medium text-white">{exp.role}</h5>
                                        <span className="text-sm text-gray-500">{exp.employmentType}</span>
                                    </div>
                                    <p className="text-blue-400 text-sm mb-2">{exp.company}</p>
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
