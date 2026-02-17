"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Award, Trophy } from 'lucide-react';
import { Spotlight } from '@/components/ui/Spotlight';

export function Certifications() {
    const { certifications, achievements } = portfolioData;

    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 border border-blue-500/20">
                                <Award size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Certifications</h2>
                        </div>

                        <div className="space-y-4">
                            {certifications.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, type: "spring", stiffness: 50 }}
                                >
                                    <Spotlight className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-colors flex items-start gap-4 cursor-default">
                                        <motion.div
                                            className="mt-1.5 min-w-[8px] h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                                            whileHover={{ scale: 1.5 }}
                                        />
                                        <span className="font-medium text-gray-200 group-hover:text-white transition-colors leading-relaxed">{cert}</span>
                                    </Spotlight>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, type: "spring", stiffness: 50, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-400 border border-yellow-500/20">
                                <Trophy size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Achievements</h2>
                        </div>

                        <div className="space-y-4">
                            {achievements.map((ach, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, type: "spring", stiffness: 50 }}
                                >
                                    <Spotlight className="group p-6 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-colors flex items-start gap-4 cursor-default">
                                        <motion.div
                                            className="mt-1.5 min-w-[8px] h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"
                                            whileHover={{ scale: 1.5 }}
                                        />
                                        <span className="font-medium text-gray-200 group-hover:text-white transition-colors leading-relaxed">{ach}</span>
                                    </Spotlight>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
