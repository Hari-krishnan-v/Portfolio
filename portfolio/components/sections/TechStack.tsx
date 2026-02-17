"use client";

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Spotlight } from '@/components/ui/Spotlight';

export function TechStack() {
    const { skills } = portfolioData;

    const categories = [
        { name: 'Languages', items: skills.languages },
        { name: 'Frontend', items: skills.frontend },
        { name: 'Backend', items: skills.backend },
        { name: 'Databases', items: skills.databases },
        { name: 'DevOps & Tools', items: skills.devopsAndTools },
        { name: 'Architecture', items: skills.architecture },
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-32 relative bg-background">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Technical Arsenal</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">The tools and technologies I use to bring ideas to life.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={container}
                            custom={idx}
                        >
                            <Spotlight className="h-full rounded-2xl border border-white/10 bg-white/5 p-8">
                                <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
                                    {cat.name}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {cat.items.map((skill, sIdx) => (
                                        <motion.div
                                            key={sIdx}
                                            variants={item}
                                            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-md text-sm transition-all border border-white/5 hover:border-white/20"
                                        >
                                            {skill}
                                        </motion.div>
                                    ))}
                                </div>
                            </Spotlight>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
