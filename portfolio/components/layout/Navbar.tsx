"use client";

import { FloatingDock } from '@/components/ui/FloatingDock';
import { Home, User, Briefcase, Code2, Mail, Award, FolderGit2 } from 'lucide-react';

export function Navbar() {
    const navLinks: { title: string; icon: React.ReactNode; id: any }[] = [
        { title: 'Home', icon: <Home size={20} />, id: 'hero' },
        { title: 'About', icon: <User size={20} />, id: 'about' },
        { title: 'Experience', icon: <Briefcase size={20} />, id: 'experience' },
        { title: 'Projects', icon: <FolderGit2 size={20} />, id: 'projects' },
        { title: 'Skills', icon: <Code2 size={20} />, id: 'skills' },
        { title: 'Contact', icon: <Mail size={20} />, id: 'contact' },
    ];

    return (
        <div className="relative w-full">
            <FloatingDock items={navLinks} />
        </div>
    );
}
