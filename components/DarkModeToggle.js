import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function DarkModeToggle() {
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
          className="text-xl md:text-2xl md:ml-2 hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MdDarkMode
          className="text-xl md:text-2xl md:ml-2 hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return <li>{renderThemeChanger()}</li>;
}
