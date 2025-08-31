'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse"></div>
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-24 right-4 z-50 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-yellow-500 transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 transition-transform duration-300 rotate-0 scale-100" />
      )}
    </button>
  );
}