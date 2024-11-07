"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="text-background text-2xl">
      {theme === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </button>
  );
}
