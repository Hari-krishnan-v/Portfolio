"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Project } from '@/data/portfolio';
import { X, Github, ExternalLink, Quote, Layers, CheckCircle, Terminal, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const overlayVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.3 },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.2 },
        },
    };

    const modalVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            y: 20,
            transition: { duration: 0.2 },
        },
    };


    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-mono">
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    />

                    <motion.div
                        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d1117] border border-[#30363d] rounded-xl shadow-2xl overflow-hidden flex flex-col"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Header Image Area */}
                        <div className="h-48 sm:h-64 w-full bg-[#161b22] relative flex-shrink-0 overflow-hidden border-b border-[#30363d]">
                            {project.banner ? (
                                <>
                                    <Image
                                        src={project.banner}
                                        alt={project.name}
                                        fill
                                        className="object-cover opacity-40"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117]/60 to-[#161b22]/60 mix-blend-overlay" />
                                </>
                            ) : (
                                <>
                                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
                                    {/* Abstract Decorative Elements */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-terminal-blue/10 rounded-full blur-[50px]" />
                                </>
                            )}
                            <div className="absolute top-0 right-0 p-6">
                                <button
                                    onClick={onClose}
                                    className="p-2 bg-black/50 hover:bg-black/70 rounded hover:rounded-xl text-white/70 hover:text-white transition-all backdrop-blur-md border border-white/10"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="absolute bottom-6 left-6 sm:left-10">
                                <div className="flex flex-wrap gap-3 mb-3">
                                    <span className="px-3 py-1 bg-terminal-blue/10 border border-terminal-blue/30 rounded text-xs font-semibold text-terminal-blue">
                                        {project.tag || 'Project'}
                                    </span>
                                    {project.status && (
                                        <span className="px-3 py-1 bg-terminal-green/10 border border-terminal-green/30 rounded text-xs font-semibold text-terminal-green">
                                            {project.status}
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-[#c9d1d9] tracking-tight">{project.name}</h2>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar bg-[#0d1117]">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                {/* Main Content Column */}
                                <div className="lg:col-span-2 space-y-10">

                                    {/* About */}
                                    <section>
                                        <h3 className="text-xl font-semibold text-[#c9d1d9] mb-4 flex items-center gap-2 border-b border-[#30363d] pb-2">
                                            Overview
                                        </h3>
                                        <p className="text-[#8b949e] leading-relaxed text-base sm:text-lg">
                                            {project.longDescription || project.description || "No description available."}
                                        </p>
                                    </section>

                                    {/* Key Features */}
                                    {project.features && (
                                        <section>
                                            <h3 className="text-xl font-semibold text-[#c9d1d9] mb-4 flex items-center gap-2 border-b border-[#30363d] pb-2">
                                                <Layers size={20} className="text-terminal-blue" /> Key Features
                                            </h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {project.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 bg-[#161b22] p-3 rounded border border-[#30363d] hover:border-terminal-blue/50 transition-colors">
                                                        <CheckCircle size={18} className="text-terminal-green mt-0.5 flex-shrink-0" />
                                                        <span className="text-[#c9d1d9] text-sm">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    )}

                                    {/* Technical Challenges */}
                                    {project.challenges && (
                                        <section>
                                            <h3 className="text-xl font-semibold text-[#c9d1d9] mb-4 flex items-center gap-2 border-b border-[#30363d] pb-2">
                                                <Terminal size={20} className="text-terminal-yellow" /> Technical Challenges
                                            </h3>
                                            <div className="space-y-3">
                                                {project.challenges.map((challenge, idx) => (
                                                    <div key={idx} className="flex gap-3 text-[#8b949e] text-sm">
                                                        <span className="text-terminal-yellow font-bold">{">"}</span>
                                                        {challenge}
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    {/* Instructions */}
                                    {project.instructions && (
                                        <section className="bg-[#161b22] border border-[#30363d] rounded p-5 font-mono text-sm">
                                            <h3 className="text-[#c9d1d9] font-semibold mb-3 border-b border-[#30363d] pb-2">Quick Start</h3>
                                            <pre className="whitespace-pre-wrap text-[#8b949e] leading-relaxed">
                                                {project.instructions}
                                            </pre>
                                        </section>
                                    )}
                                </div>

                                {/* Sidebar Column */}
                                <div className="space-y-8">

                                    {/* Links */}
                                    <div className="flex flex-col gap-3">
                                        {project.github && (
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                className="flex items-center justify-between w-full p-4 bg-[#c9d1d9] text-[#0d1117] rounded font-medium hover:bg-white transition-colors"
                                            >
                                                <span className="flex items-center gap-2"><Github size={18} /> Source Code</span>
                                                <ExternalLink size={16} />
                                            </Link>
                                        )}
                                        {project.link && (
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="flex items-center justify-between w-full p-4 bg-[#161b22] text-[#c9d1d9] border border-[#30363d] rounded font-medium hover:bg-[#1c2128] transition-colors"
                                            >
                                                <span className="flex items-center gap-2 md:gap-3"><ExternalLink size={18} /> Live Demo</span>
                                                <ExternalLink size={16} />
                                            </Link>
                                        )}
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wider mb-4 border-b border-[#30363d] pb-2">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1.5 bg-[#161b22] text-[#c9d1d9] rounded text-xs font-medium border border-[#30363d]">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Developer Thought */}
                                    {project.developerThought && (
                                        <div className="relative p-6 bg-[#161b22] rounded border border-[#30363d]">
                                            <Quote size={24} className="text-terminal-blue/40 absolute top-4 left-4" />
                                            <p className="text-[#8b949e] text-sm italic relative z-10 pt-4">
                                                "{project.developerThought}"
                                            </p>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
