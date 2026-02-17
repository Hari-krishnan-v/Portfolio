"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Award, Trophy, ChevronRight } from 'lucide-react';
import { MacWindow } from '@/components/ui/MacWindow';

export function Certifications() {
    const { certifications, achievements } = portfolioData;

    return (
        <section id="certifications" className="py-20 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <MacWindow id="certifications" title="awards_and_certs.sh" className="border-terminal-border bg-[#0d1117] min-h-[500px]">
                    <div className="font-mono text-xs md:text-sm space-y-8">

                        {/* Certifications Selection */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-terminal-blue font-bold">
                                <Award size={16} />
                                <span>$ list certifications --verified</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4">
                                {certifications.map((cert, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="group flex items-start gap-3 p-3 rounded border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-terminal-blue/30 transition-all cursor-default"
                                    >
                                        <div className="mt-1">
                                            <ChevronRight size={14} className="text-terminal-green opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <span className="text-[#c9d1d9] leading-relaxed group-hover:text-white transition-colors">
                                            {cert}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements Section */}
                        <div className="space-y-4 pt-4 border-t border-[#30363d]">
                            <div className="flex items-center gap-2 text-terminal-yellow font-bold">
                                <Trophy size={16} />
                                <span>$ grep "milestone" ./achievements.txt</span>
                            </div>

                            <div className="space-y-2 pl-4">
                                {achievements.map((ach, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="flex items-center gap-3 py-1 group"
                                    >
                                        <span className="text-[#8b949e] font-bold">[*]</span>
                                        <span className="text-[#c9d1d9] group-hover:text-terminal-yellow transition-colors">
                                            {ach}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Terminal Footer */}
                        <div className="flex items-center gap-2 pt-4">
                            <span className="text-terminal-green">user@portfolio:~/certifications$</span>
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="w-2 h-4 bg-terminal-green block"
                            />
                        </div>
                    </div>
                </MacWindow>
            </div>
        </section>
    );
}
