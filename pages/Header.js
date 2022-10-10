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
      <ul className="flex items-center gap-4">
        <li>
          <a
            className="bg-transparent hover:bg-blue-500 hover:text-white py-2 px-4 hover:border-transparent rounded-md"
            href="#"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="bg-transparent hover:bg-blue-500 hover:text-white py-2 px-4 hover:border-transparent rounded-md"
            href="#"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="bg-transparent hover:bg-blue-500 hover:text-white py-2 px-4 hover:border-transparent rounded-md"
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
