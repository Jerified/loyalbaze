"use client";

import { ThemeProvider } from "next-themes";

interface Prop {
    children: React.ReactNode
}

export default function Providers({ children }: Prop) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-700 text-gray-200  transition-colors duration-300 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
