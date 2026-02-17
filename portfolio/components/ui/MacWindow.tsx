import React from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useDesktop, WindowId } from '@/context/DesktopContext';

interface MacWindowProps {
    id?: WindowId;
    children: React.ReactNode;
    title?: string;
    className?: string;
    headerClassName?: string;
    noPadding?: boolean;
}

export const MacWindow: React.FC<MacWindowProps> = ({
    id,
    children,
    title,
    className,
    headerClassName,
    noPadding = false
}) => {
    const desktop = id ? useDesktop() : null;
    const windowState = id && desktop ? desktop.windows[id] : { isOpen: true, isMinimized: false, zIndex: 1 };

    if (!windowState.isOpen) return null;

    return (
        <AnimatePresence mode="wait">
            {!windowState.isMinimized && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        zIndex: windowState.zIndex
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.5,
                        y: 500, // Move toward bottom dock
                        filter: "blur(10px)"
                    }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 300
                    }}
                    onClick={() => id && desktop?.focusWindow(id)}
                    className={cn(
                        "mac-window flex flex-col w-full relative",
                        id && "cursor-default",
                        className
                    )}
                    style={{ zIndex: windowState.zIndex }}
                >
                    {/* Window Header */}
                    <div className={cn("mac-header shrink-0 relative flex items-center justify-between px-4", headerClassName)}>
                        <div className="flex space-x-2">
                            <button
                                onClick={(e) => { e.stopPropagation(); id && desktop?.closeWindow(id); }}
                                className="mac-dot bg-[#ff5f56] border border-[#e0443e] hover:bg-[#ff5f56]/80 flex items-center justify-center group"
                            >
                                <span className="text-[8px] text-black/50 opacity-0 group-hover:opacity-100">×</span>
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); id && desktop?.minimizeWindow(id); }}
                                className="mac-dot bg-[#ffbd2e] border border-[#dea123] hover:bg-[#ffbd2e]/80 flex items-center justify-center group"
                            >
                                <span className="text-[8px] text-black/50 opacity-0 group-hover:opacity-100">−</span>
                            </button>
                            <div className="mac-dot bg-[#27c93f] border border-[#1aab29] hover:bg-[#27c93f]/80" />
                        </div>

                        {/* Title centered */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="text-xs font-mono text-[#8b949e] opacity-80 flex items-center gap-2">
                                {title && (
                                    <>
                                        <span>📂</span>
                                        {title}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Window Content */}
                    <div className={cn("flex-1 overflow-auto bg-[#0d1117]/95", noPadding ? "" : "p-6")}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
