import { useRef, useState } from "react";
import { useDesktop, WindowId } from "@/context/DesktopContext";
import { cn } from "@/lib/utils";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}: {
    items: { title: string; icon: React.ReactNode; id: WindowId }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; id: WindowId }[];
    className?: string;
}) => {
    const [open, setOpen] = useState(false);
    const { toggleWindow } = useDesktop();

    return (
        <div className={cn("fixed right-6 bottom-6 md:hidden z-50", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                            >
                                <button
                                    onClick={() => {
                                        toggleWindow(item.id);
                                        setOpen(false);
                                    }}
                                    className="h-12 w-12 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)]"
                                >
                                    <div className="h-5 w-5 text-neutral-300">{item.icon}</div>
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="h-14 w-14 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] text-neutral-300"
            >
                <span className="sr-only">Open Menu</span>
                <div className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; id: WindowId }[];
    className?: string;
}) => {
    let mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "hidden md:flex h-16 gap-4 items-end rounded-2xl bg-[#161b22]/40 backdrop-blur-xl border border-white/10 px-4 pb-3 fixed bottom-6 left-1/2 -translate-x-1/2 z-50",
                className
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

function IconContainer({
    mouseX,
    title,
    icon,
    id,
}: {
    mouseX: MotionValue;
    title: string;
    icon: React.ReactNode;
    id: WindowId;
}) {
    let ref = useRef<HTMLDivElement>(null);
    const { toggleWindow, windows } = useDesktop();
    const windowState = windows[id];

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    let widthTransform = useTransform(distance, [-150, 0, 150], [40, 70, 40]);
    let heightTransform = useTransform(distance, [-150, 0, 150], [40, 70, 40]);

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <button onClick={() => toggleWindow(id)} className="relative">
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="aspect-square rounded-xl bg-[#0d1117]/80 border border-white/10 flex items-center justify-center relative shadow-lg group hover:border-terminal-blue transition-colors"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="px-2 py-0.5 whitespace-pre rounded bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] absolute left-1/2 -translate-x-1/2 -top-10 w-fit text-[10px] font-mono"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="flex items-center justify-center text-[#c9d1d9] group-hover:text-terminal-blue transition-colors">{icon}</div>

                {/* Active Indicator Dot */}
                {windowState?.isOpen && (
                    <div className={cn(
                        "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full",
                        windowState.isMinimized ? "bg-gray-600" : "bg-[#c9d1d9]"
                    )} />
                )}
            </motion.div>
        </button>
    );
}
