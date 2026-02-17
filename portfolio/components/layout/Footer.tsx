import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full bg-white/50 border-t border-gray-200 py-8 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <div className="mb-4 md:mb-0">
                    <p>&copy; {new Date().getFullYear()} Hari Krishnan. All rights reserved.</p>
                </div>

                <div className="flex items-center space-x-6">
                    <Link href="https://github.com/Hari-krishnan-v" target="_blank" className="hover:text-black transition-colors">
                        <Github size={18} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/hari-krishnan-v-3901b7317" target="_blank" className="hover:text-black transition-colors">
                        <Linkedin size={18} />
                    </Link>
                    <Link href="mailto:harikrishnanvimal777@gmail.com" className="hover:text-black transition-colors">
                        <Mail size={18} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
