"use client";

import { motion } from 'framer-motion';
import { portfolioData, Project } from '@/data/portfolio';
import { Github, ExternalLink, ArrowRight, FolderGit2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { TiltCard } from '@/components/ui/3d-card';
import { useState } from 'react';
import { ProjectModal } from '@/components/ui/ProjectModal';

export function Projects() {
    const { projects } = portfolioData;
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section id="projects" className="py-32 bg-background relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A selection of projects that demonstrate my passion for building scalable and intelligent systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            onClick={() => {
                                setSelectedProject(project);
                                setIsModalOpen(true);
                            }}
                            className="cursor-pointer h-full"
                        >
                            <TiltCard className="h-full">
                                <ProjectCardContent project={project} />
                            </TiltCard>
                        </div>
                    ))}

                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

function ProjectCardContent({ project }: { project: Project }) {
    return (
        <div className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 shadow-xl h-full flex flex-col transition-all duration-300">
            <div className="h-48 bg-neutral-900 relative overflow-hidden group">
                {/* Banner Image or Abstract Pattern */}
                {project.banner ? (
                    <>
                        <Image
                            src={project.banner}
                            alt={project.name}
                            fill
                            className="object-cover opacity-40 transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 mix-blend-multiply" />
                    </>
                ) : (
                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FolderGit2 size={48} className="text-white/20" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <span className="px-3 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 rounded-full text-xs font-semibold text-blue-300 shadow-sm">
                        {project.tag || 'Project'}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.name}
                    </h3>
                    <div className="flex gap-3 relative z-20">
                        {project.github && (
                            <Link href={project.github} target="_blank" className="text-gray-400 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                                <Github size={20} />
                            </Link>
                        )}
                        {project.link && (
                            <Link href={project.link} target="_blank" className="text-gray-400 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                                <ExternalLink size={20} />
                            </Link>
                        )}
                    </div>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-xs text-gray-300 bg-white/5 border border-white/5 px-2 py-1 rounded">
                            {tech}
                        </span>
                    ))}
                    {project.stack.length > 4 && (
                        <span className="text-xs text-gray-500 px-1 py-1">+{project.stack.length - 4}</span>
                    )}
                </div>

                <ul className="space-y-2 mb-6 flex-grow">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="mt-1.5 w-1 h-1 bg-blue-500 rounded-full flex-shrink-0" />
                            {highlight}
                        </li>
                    ))}
                </ul>

                <button className="text-sm font-medium text-white flex items-center gap-1 hover:gap-2 transition-all mt-auto group/btn">
                    View Details <ArrowRight size={16} className="text-blue-500 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
}
