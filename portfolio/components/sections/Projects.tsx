"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData, Project } from '@/data/portfolio';
import { Github, ExternalLink, ArrowRight, Folder, FileCode, FolderGit2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { MacWindow } from '@/components/ui/MacWindow';

export function Projects() {
    const { projects } = portfolioData;
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="projects" className="py-20 bg-background relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">
                <MacWindow id="projects" title="~/projects (File Explorer)" className="bg-[#0d1117] min-h-[600px] border-terminal-border">
                    {/* Toolbar / Breadcrumbs */}
                    <div className="flex items-center gap-4 px-2 py-3 border-b border-[#30363d] mb-6 text-sm text-[#8b949e]">
                        <div className="flex gap-2">
                            <div className="p-1 hover:bg-[#30363d] rounded cursor-pointer">
                                <ArrowRight className="rotate-180" size={16} />
                            </div>
                            <div className="p-1 hover:bg-[#30363d] rounded cursor-pointer">
                                <ArrowRight size={16} />
                            </div>
                        </div>
                        <div className="bg-[#161b22] px-3 py-1 rounded border border-[#30363d] flex-1 font-mono text-xs">
                            ~/home/user/projects
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => {
                                    setSelectedProject(project);
                                    setIsModalOpen(true);
                                }}
                                className="group cursor-pointer relative bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-terminal-blue hover:bg-[#1c2128] transition-all duration-200"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="shrink-0 text-terminal-blue group-hover:text-terminal-cyan transition-colors">
                                        <FolderGit2 size={40} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-[#c9d1d9] font-semibold truncate group-hover:text-terminal-blue font-mono text-sm">
                                            {project.name}
                                        </h3>
                                        <p className="text-[#8b949e] text-xs mt-1 truncate">
                                            Last modified: {new Date().toLocaleDateString()}
                                        </p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {project.stack.slice(0, 3).map((tech, i) => (
                                                <span key={i} className="text-[10px] px-1.5 py-0.5 rounded-sm bg-[#30363d] text-[#c9d1d9] border border-white/5 font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover details */}
                                <div className="mt-4 pt-4 border-t border-[#30363d] opacity-60 group-hover:opacity-100 transition-opacity">
                                    <p className="text-[#8b949e] text-xs line-clamp-2">
                                        {project.highlights && project.highlights[0]}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer Status Bar */}
                    <div className="mt-8 pt-3 border-t border-[#30363d] flex justify-between text-xs text-[#8b949e] font-mono px-2">
                        <div>{projects.length} objects</div>
                        <div>Total Size: 42MB</div>
                    </div>
                </MacWindow>
            </div>

            <AnimatePresence>
                {selectedProject && isModalOpen && (
                    <ProjectModal
                        project={selectedProject}
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
