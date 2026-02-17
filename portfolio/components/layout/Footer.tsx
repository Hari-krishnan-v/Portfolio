"use client";

import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="w-full border-t border-white/10 py-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <p className="font-medium text-lg">
                        <span className="text-white">Designed & Built by </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 font-bold">
                            Hari Krishnan
                        </span>
                    </p>
                    <p className="text-gray-500">&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex items-center space-x-6">
                        <Link href="https://github.com/Hari-krishnan-v" target="_blank" className="hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                            <Github size={20} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/hari-krishnan-v-3901b7317" target="_blank" className="hover:text-blue-400 transition-colors p-2 hover:bg-white/5 rounded-full">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="mailto:harikrishnanvimal777@gmail.com" className="hover:text-red-400 transition-colors p-2 hover:bg-white/5 rounded-full">
                            <Mail size={20} />
                        </Link>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="text-xs text-gray-500 hover:text-blue-400 transition-colors flex items-center gap-1 group"
                    >
                        Back to Top
                        <span className="group-hover:-translate-y-1 transition-transform">↑</span>
                    </button>
                </div>
            </div>
        </footer>
    );
}
