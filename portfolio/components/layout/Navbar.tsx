"use client";

import { FloatingDock } from '@/components/ui/FloatingDock';
import { Home, User, Briefcase, Code2, Mail, Award, FolderGit2 } from 'lucide-react';

export function Navbar() {
    const navLinks = [
        { title: 'Home', icon: <Home size={20} />, href: '#hero' },
        { title: 'About', icon: <User size={20} />, href: '#about' },
        { title: 'Experience', icon: <Briefcase size={20} />, href: '#experience' },
        { title: 'Projects', icon: <FolderGit2 size={20} />, href: '#projects' },
        { title: 'Skills', icon: <Code2 size={20} />, href: '#tech-stack' },
        { title: 'Awards', icon: <Award size={20} />, href: '#certifications' },
        { title: 'Contact', icon: <Mail size={20} />, href: '#contact' },
    ];

    return (
        <div className="relative w-full">
            <FloatingDock items={navLinks} />
        </div>
    );
}
