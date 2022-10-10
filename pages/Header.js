import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <MdLightMode
          className="text-2xl hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MdDarkMode
          className="text-2xl hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <nav className="flex justify-between items-start py-10">
      <Link href="/">
        <a className="text-lg font-mono font-bold md:text-2xl hover:text-blue-500">
          {" "}
          &lt;vsilagy/&gt;
        </a>
      </Link>
      <ul className="flex items-center gap-2 md:gap-4">
        <li>
          <a
            className="px-2 py-1 rounded-md hover:ring-2 hover:ring-blue-500 md:px-4 md:py-2"
            href="#"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="px-2 py-1 rounded-md hover:ring-2 hover:ring-blue-500 md:px-4 md:py-2"
            href="#"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="px-2 py-1 rounded-md hover:ring-2 hover:ring-blue-500 md:px-4 md:py-2"
            href="#"
          >
            Resume
          </a>
        </li>
        <li>{renderThemeChanger()}</li>
      </ul>
    </nav>
  );
}
