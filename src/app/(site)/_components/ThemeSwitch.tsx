'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from "next/image"

const ThemeButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => (
    <button 
        onClick={onClick}
        className="fixed top-18 right-6 z-50 p-2 rounded-full bg-black/90 dark:bg-gray-500 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-200 border border-gray-200 dark:border-gray-700"
        aria-label="Toggle theme"
    >
        {children}
    </button>
);

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return (
        <div className="fixed top-6 right-6 z-50 p-2">
            <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                width={24}
                height={24}
                sizes="24x24"
                alt="Loading Light/Dark Toggle"
                priority={false}
                title="Loading Light/Dark Toggle"
            />
        </div>
    );

    if (resolvedTheme === 'dark') {
        return (
            <ThemeButton onClick={() => setTheme('light')}>
                <FiSun className="w-5 h-5 text-yellow-400" />
            </ThemeButton>
        );
    }

    if (resolvedTheme === 'light') {
        return (
            <ThemeButton onClick={() => setTheme('dark')}>
                <FiMoon className="w-5 h-5 text-gray-200" />
            </ThemeButton>
        );
    }

}