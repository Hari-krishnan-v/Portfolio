"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { MacWindow } from '@/components/ui/MacWindow';
import { TerminalBlock, CommentBlock } from '@/components/ui/TerminalBlock';

export function About() {
    const { professionalSummary, education, experience } = portfolioData;

    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">

            <div className="max-w-4xl mx-auto px-6">
                <MacWindow id="about" title="README.md" className="border-terminal-border">
                    <div className="font-mono text-sm md:text-base space-y-6">
                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-2"
                        >
                            <div className="flex gap-2">
                                <span className="text-terminal-blue font-bold">#</span>
                                <h2 className="text-xl md:text-2xl font-bold text-foreground">About Me</h2>
                            </div>
                            <CommentBlock>
                                {"> Passionate about creating digital experiences that matter."}
                            </CommentBlock>
                            <p className="text-[#c9d1d9] leading-relaxed pl-4 border-l-2 border-[#30363d]">
                                {professionalSummary}
                            </p>
                        </motion.div>

                        <div className="h-px bg-[#30363d] w-full my-6" />

                        {/* Experience Section as Code/List */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-4"
                        >
                            <div className="flex gap-2 items-center">
                                <span className="text-terminal-blue font-bold">##</span>
                                <h3 className="text-lg font-bold text-foreground">Latest Experience</h3>
                            </div>

                            <div className="pl-4 space-y-4">
                                {experience.slice(0, 2).map((exp, idx) => (
                                    <div key={idx} className="group">
                                        <div className="flex flex-wrap items-baseline gap-2">
                                            <span className="text-terminal-purple">-</span>
                                            <span className="text-terminal-yellow font-bold">[{exp.role}]</span>
                                            <span className="text-[#8b949e]">@</span>
                                            <span className="text-terminal-green hover:underline cursor-pointer">
                                                {exp.company}
                                            </span>
                                            <span className="text-[#8b949e] text-xs">({exp.employmentType})</span>
                                        </div>
                                        {exp.companyDescription && (
                                            <p className="text-[#8b949e] text-xs mt-1 ml-6 pl-2 border-l border-[#30363d]">
                                                {/* Simulated comment for description */}
                                                // {exp.companyDescription}
                                            </p>
                                        )}
                                    </div>
                                ))}
                                <div className="text-[#8b949e] text-xs mt-2 ml-6">
                                    <a href="#experience" className="hover:text-terminal-blue underline">...view_full_log</a>
                                </div>
                            </div>
                        </motion.div>

                        <div className="h-px bg-[#30363d] w-full my-6" />

                        {/* Education Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4"
                        >
                            <div className="flex gap-2 items-center">
                                <span className="text-terminal-blue font-bold">##</span>
                                <h3 className="text-lg font-bold text-foreground">Education</h3>
                            </div>

                            <div className="pl-4 space-y-4">
                                {education.map((edu, idx) => (
                                    <div key={idx}>
                                        <div className="flex flex-wrap items-baseline gap-2">
                                            <span className="text-terminal-purple">-</span>
                                            <span className="text-[#c9d1d9] ">{edu.degree}</span>
                                        </div>
                                        <div className="flex flex-wrap items-baseline gap-2 ml-4 text-sm">
                                            <span className="text-[#8b949e]">in</span>
                                            <span className="text-terminal-cyan ">{edu.university}</span>
                                            <span className="text-[#8b949e]">({edu.year})</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </MacWindow>
            </div>
        </section>
    );
}
