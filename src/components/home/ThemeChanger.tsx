"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <button className="absolute right-2 top-2.5 md:static" onClick={toggle}>
        {theme === "dark" ? (
          <Moon className="text-6xl" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </button>
    </>
  );
}

export default ThemeChanger;
