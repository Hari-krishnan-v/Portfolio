"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const words = children.split(" ");

    // 👇 container with dynamic variant
    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.04 * i + delay,
            },
        }),
    };

    // 👇 child variant
    const child: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            style={{ display: "flex", flexWrap: "wrap", columnGap: "0.25em" }} // preserve spaces
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
