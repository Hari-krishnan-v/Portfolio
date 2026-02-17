"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/portfolio';
import { X, Github, ExternalLink, Quote, Layers, CheckCircle, Terminal, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
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

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.2 } },
    };

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 300 } },
        exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } },
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    />

                    <motion.div
                        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0F0F0F] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {/* Header Image Area (Placeholder Gradient since no actual images) */}
                        <div className="h-48 sm:h-64 w-full bg-gradient-to-br from-neutral-800 to-neutral-900 relative flex-shrink-0">
                            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
                            {/* Abstract Decorative Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-[50px]" />
                            <div className="absolute top-0 right-0 p-6">
                                <button
                                    onClick={onClose}
                                    className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white/70 hover:text-white transition-colors backdrop-blur-md"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="absolute bottom-6 left-6 sm:left-10">
                                <div className="flex flex-wrap gap-3 mb-3">
                                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-300">
                                        {project.tag || 'Project'}
                                    </span>
                                    {project.status && (
                                        <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs font-semibold text-green-300">
                                            {project.status}
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{project.name}</h2>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                {/* Main Content Column */}
                                <div className="lg:col-span-2 space-y-10">

                                    {/* About */}
                                    <section>
                                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                            Overview
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                                            {project.longDescription || project.description || "No description available."}
                                        </p>
                                    </section>

                                    {/* Key Features */}
                                    {project.features && (
                                        <section>
                                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                                <Layers size={20} className="text-blue-400" /> Key Features
                                            </h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {project.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                                        <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                        <span className="text-gray-300 text-sm">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>
                                    )}

                                    {/* Technical Challenges */}
                                    {project.challenges && (
                                        <section>
                                            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                                                <Terminal size={20} className="text-orange-400" /> Technical Challenges
                                            </h3>
                                            <div className="space-y-3">
                                                {project.challenges.map((challenge, idx) => (
                                                    <div key={idx} className="flex gap-3 text-gray-400 text-sm">
                                                        <span className="text-orange-500 font-bold">•</span>
                                                        {challenge}
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    )}

                                    {/* Instructions */}
                                    {project.instructions && (
                                        <section className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 font-mono text-sm">
                                            <h3 className="text-gray-300 font-semibold mb-3 border-b border-gray-800 pb-2">Quick Start</h3>
                                            <pre className="whitespace-pre-wrap text-gray-400 leading-relaxed">
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
                                                className="flex items-center justify-between w-full p-4 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition-colors"
                                            >
                                                <span className="flex items-center gap-2"><Github size={18} /> Source Code</span>
                                                <ExternalLink size={16} />
                                            </Link>
                                        )}
                                        {project.link && (
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                                className="flex items-center justify-between w-full p-4 bg-white/10 text-white border border-white/10 rounded-xl font-medium hover:bg-white/20 transition-colors"
                                            >
                                                <span className="flex items-center gap-2 md:gap-3"><ExternalLink size={18} /> Live Demo</span>
                                                <ExternalLink size={16} />
                                            </Link>
                                        )}
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.stack.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1.5 bg-neutral-800 text-gray-300 rounded-lg text-xs font-medium border border-neutral-700">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Developer Thought */}
                                    {project.developerThought && (
                                        <div className="relative p-6 bg-gradient-to-br from-blue-900/10 to-purple-900/10 rounded-2xl border border-blue-500/10">
                                            <Quote size={24} className="text-blue-500/40 absolute top-4 left-4" />
                                            <p className="text-gray-300 text-sm italic relative z-10 pt-4">
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
