"use client"
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TerminalBlockProps {
    children?: React.ReactNode;
    text?: string;
    typingDelay?: number;
    className?: string;
    showPrompt?: boolean;
    user?: string;
    path?: string;
}

export const TerminalBlock: React.FC<TerminalBlockProps> = ({
    children,
    text,
    typingDelay = 20,
    className,
    showPrompt = true,
    user = "visitor",
    path = "~"
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        if (!text) {
            if (children) setIsTyping(false);
            return;
        }

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, typingDelay);

        return () => clearInterval(interval);
    }, [text, typingDelay, children]);

    return (
        <div className={cn("terminal-text font-mono text-sm md:text-base", className)}>
            {showPrompt && (
                <div className="flex flex-wrap gap-2 mb-2 items-center">
                    <span className="text-terminal-green font-bold">{user}@portfolio</span>
                    <span className="text-terminal-border">:</span>
                    <span className="text-terminal-blue font-bold">{path}</span>
                    <span className="text-terminal-border">$</span>
                </div>
            )}

            <div className="whitespace-pre-wrap leading-relaxed text-[#c9d1d9]">
                {text ? displayedText : children}
                {isTyping && <span className="cursor-blink" />}
            </div>
        </div>
    );
};

export const CommentBlock: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
    <div className={cn("text-[#8b949e] font-mono italic", className)}>
        {/* // {children} */}
        {children}
    </div>
);
