"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { MacWindow } from '@/components/ui/MacWindow';
import { SkillIcon } from '@/components/ui/SkillIcon';

export function TechStack() {
    const { skills } = portfolioData;

    const categories = [
        { id: "languages", name: "Languages", items: skills.languages },
        { id: "frontend", name: "Frontend / UI", items: skills.frontend },
        { id: "backend", name: "Backend / API", items: skills.backend },
        { id: "database", name: "Databases", items: skills.databases },
        { id: "tools", name: "Tools / DevOps", items: skills.devopsAndTools },
    ];

    return (
        <section id="skills" className="py-20 bg-background relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <MacWindow id="skills" title="package.json" className="bg-[#0d1117] border-terminal-border">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8 font-mono text-xs">

                        {/* JSON View */}
                        <div className="overflow-x-auto">
                            <span className="text-terminal-yellow line-number">1 </span>
                            <span className="text-terminal-yellow">{`{`}</span>
                            {categories.map((cat, catIdx) => (
                                <div key={cat.id} className="pl-4">
                                    <span className="text-terminal-blue">"{cat.id}"</span>
                                    <span className="text-[#c9d1d9]">: </span>
                                    <span className="text-terminal-yellow">{"["}</span>
                                    <div className="pl-4">
                                        {cat.items.map((item, i) => (
                                            <div key={i}>
                                                <span className="text-terminal-green">"{item}"</span>
                                                {i < cat.items.length - 1 && <span className="text-[#c9d1d9]">,</span>}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-terminal-yellow">{"]"}</span>
                                    {catIdx < categories.length - 1 && <span className="text-[#c9d1d9]">,</span>}
                                </div>
                            ))}
                            <span className="text-terminal-yellow line-number">{categories.length * 10} </span>
                            <span className="text-terminal-yellow">{`}`}</span>
                        </div>

                        {/* Interactive Icons View */}
                        <div className="hidden lg:flex flex-col gap-6 border-l border-[#30363d] pl-8">
                            {categories.map((cat) => (
                                <div key={cat.id + "-icons"}>
                                    <h4 className="text-[#8b949e] text-[10px] uppercase tracking-wider mb-3">
                                        // {cat.name}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.items.map((item) => (
                                            <SkillIcon key={item} name={item} className="w-8 h-8 p-1.5" />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </MacWindow>
            </div>
        </section>
    );
}
