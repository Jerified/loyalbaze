"use client";

import { ThemeProvider } from "next-themes";

interface Prop {
    children: React.ReactNode
}

export default function Providers({ children }: Prop) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-00 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
