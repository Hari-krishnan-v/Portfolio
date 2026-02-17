"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { MacWindow } from '@/components/ui/MacWindow';
import { TerminalBlock } from '@/components/ui/TerminalBlock';

export function Experience() {
    const { experience } = portfolioData;

    return (
        <section id="experience" className="py-20 bg-background relative overflow-hidden">

            <div className="max-w-5xl mx-auto px-6">
                <MacWindow id="experience" title="system_logs.log" className="border-terminal-border bg-[#0d1117] min-h-[600px]">
                    <div className="font-mono text-xs md:text-sm space-y-4 text-[#c9d1d9]">

                        {/* Header Logs */}
                        <div className="text-[#8b949e] mb-6">
                            <div>[SYSTEM] Initializing audit log...</div>
                            <div>[SYSTEM] Fetching user history...</div>
                            <div>[SUCCESS] User history loaded.</div>
                            <div className="opacity-50">----------------------------------------</div>
                        </div>

                        {experience.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-1 mb-8 border-l border-[#30363d] pl-4 ml-2 hover:bg-[#161b22]/50 hover:border-terminal-blue transition-colors rounded-r"
                            >
                                <div className="flex flex-wrap items-baseline gap-2">
                                    <span className="text-[#8b949e]">
                                        [{new Date().getFullYear() - idx}]:
                                    </span>
                                    <span className="text-terminal-blue font-bold">INFO</span>
                                    <span className="text-terminal-yellow font-bold">
                                        Action detected: ROLE_UPDATE
                                    </span>
                                </div>

                                <div className="pl-4">
                                    <div className="grid grid-cols-[100px_1fr] gap-2">
                                        <span className="text-[#8b949e]">Target:</span>
                                        <span className="text-terminal-green font-bold">{exp.company}</span>
                                    </div>
                                    <div className="grid grid-cols-[100px_1fr] gap-2">
                                        <span className="text-[#8b949e]">Role:</span>
                                        <span className="text-[#c9d1d9]">{exp.role}</span>
                                    </div>
                                    <div className="grid grid-cols-[100px_1fr] gap-2">
                                        <span className="text-[#8b949e]">Type:</span>
                                        <span className="text-[#c9d1d9]">{exp.employmentType}</span>
                                    </div>

                                    {exp.previousRole && (
                                        <div className="grid grid-cols-[100px_1fr] gap-2">
                                            <span className="text-[#8b949e] opacity-70">Prev_State:</span>
                                            <span className="text-[#c9d1d9] opacity-70 italic">{exp.previousRole}</span>
                                        </div>
                                    )}

                                    <div className="mt-2 text-[#8b949e]">
                                        <div>Payload (Accomplishments):</div>
                                        <ul className="list-none pl-2 mt-1 space-y-1 border-l border-[#30363d]">
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="text-terminal-border">{`>`}</span>
                                                    <span className="text-gray-400">{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <div className="flex items-center gap-2 animate-pulse mt-8">
                            <span className="text-terminal-green">user@portfolio:~$</span>
                            <span className="w-2 h-5 bg-terminal-green block" />
                        </div>

                    </div>
                </MacWindow>
            </div>
        </section>
    );
}
