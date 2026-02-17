"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type WindowId = 'about' | 'experience' | 'projects' | 'skills' | 'contact' | 'hero';

interface WindowState {
    id: WindowId;
    isOpen: boolean;
    isMinimized: boolean;
    zIndex: number;
}

interface DesktopContextType {
    windows: Record<WindowId, WindowState>;
    openWindow: (id: WindowId) => void;
    closeWindow: (id: WindowId) => void;
    minimizeWindow: (id: WindowId) => void;
    focusWindow: (id: WindowId) => void;
    toggleWindow: (id: WindowId) => void;
    maxZIndex: number;
}

const DesktopContext = createContext<DesktopContextType | undefined>(undefined);

const initialWindows: Record<WindowId, WindowState> = {
    hero: { id: 'hero', isOpen: true, isMinimized: false, zIndex: 1 },
    about: { id: 'about', isOpen: true, isMinimized: false, zIndex: 1 },
    experience: { id: 'experience', isOpen: true, isMinimized: false, zIndex: 1 },
    projects: { id: 'projects', isOpen: true, isMinimized: false, zIndex: 1 },
    skills: { id: 'skills', isOpen: true, isMinimized: false, zIndex: 1 },
    contact: { id: 'contact', isOpen: true, isMinimized: false, zIndex: 1 },
};

export function DesktopProvider({ children }: { children: ReactNode }) {
    const [windows, setWindows] = useState<Record<WindowId, WindowState>>(initialWindows);
    const [maxZIndex, setMaxZIndex] = useState(1);

    const focusWindow = (id: WindowId) => {
        setWindows(prev => {
            const newMaxZ = maxZIndex + 1;
            setMaxZIndex(newMaxZ); // Side effect in render? No, this is inside handler.

            return {
                ...prev,
                [id]: { ...prev[id], isMinimized: false, zIndex: newMaxZ }
            };
        });
        // We have to update maxZIndex separately or calculate it from values. 
        // Better:
        setMaxZIndex(prev => prev + 1);
    };

    const openWindow = (id: WindowId) => {
        setWindows(prev => ({
            ...prev,
            [id]: { ...prev[id], isOpen: true, isMinimized: false, zIndex: maxZIndex + 1 }
        }));
        setMaxZIndex(prev => prev + 1);
    };

    const closeWindow = (id: WindowId) => {
        setWindows(prev => ({
            ...prev,
            [id]: { ...prev[id], isOpen: false }
        }));
    };

    const minimizeWindow = (id: WindowId) => {
        setWindows(prev => ({
            ...prev,
            [id]: { ...prev[id], isMinimized: true }
        }));
    };

    const toggleWindow = (id: WindowId) => {
        const win = windows[id];
        if (win.isMinimized || !win.isOpen) {
            // Restore/Open
            setWindows(prev => ({
                ...prev,
                [id]: { ...prev[id], isOpen: true, isMinimized: false, zIndex: maxZIndex + 1 }
            }));
            setMaxZIndex(prev => prev + 1);
        } else {
            // Minimize
            minimizeWindow(id);
        }
    };

    return (
        <DesktopContext.Provider value={{ windows, openWindow, closeWindow, minimizeWindow, focusWindow, toggleWindow, maxZIndex }}>
            {children}
        </DesktopContext.Provider>
    );
}

export function useDesktop() {
    const context = useContext(DesktopContext);
    if (context === undefined) {
        throw new Error('useDesktop must be used within a DesktopProvider');
    }
    return context;
}
