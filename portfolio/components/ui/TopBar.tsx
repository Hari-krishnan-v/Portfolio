"use client";

import React, { useState, useEffect } from 'react';
import { Apple, Battery, Wifi, Search, Command } from 'lucide-react';

export function TopBar() {
    const [time, setTime] = useState<string>('');
    const [date, setDate] = useState<string>('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }));
            setDate(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-8 bg-[#161b22]/90 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 z-[100] text-xs font-medium text-white/90 select-none">
            {/* Left Side: Apple Menu & App Name */}
            <div className="flex items-center gap-4">
                <Apple size={14} className="text-white fill-current" />
                <span className="font-bold hidden sm:inline-block">Hari's Portfolio</span>

                {/* Menu Items (Hidden on mobile) */}
                <div className="hidden md:flex items-center gap-4 text-white/70">
                    <span className="hover:text-white cursor-default transition-colors">File</span>
                    <span className="hover:text-white cursor-default transition-colors">Edit</span>
                    <span className="hover:text-white cursor-default transition-colors">View</span>
                    <span className="hover:text-white cursor-default transition-colors">Go</span>
                    <span className="hover:text-white cursor-default transition-colors">Window</span>
                    <span className="hover:text-white cursor-default transition-colors">Help</span>
                </div>
            </div>

            {/* Right Side: Status Icons & Time */}
            <div className="flex items-center gap-3 sm:gap-4">
                <div className="hidden sm:flex items-center gap-3 text-white/70">
                    <Battery size={16} className="rotate-90" />
                    <Wifi size={14} />
                    <Search size={14} />
                </div>

                <div className="flex gap-2">
                    <span className="hidden sm:inline-block">{date}</span>
                    <span>{time}</span>
                </div>
            </div>
        </div>
    );
}
