"use client";

import { useEffect, useState } from "react";

export function useTypewriter(words: string[], speed = 150, deleteSpeed = 100, delay = 1500) {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const handleType = () => {
            const currentWord = words[wordIndex % words.length];

            if (isDeleting) {
                setText(currentWord.substring(0, text.length - 1));
            } else {
                setText(currentWord.substring(0, text.length + 1));
            }

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), delay);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setWordIndex((prev) => prev + 1);
            }
        };

        const timer = setTimeout(handleType, isDeleting ? deleteSpeed : speed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, delay]);

    return text;
}
