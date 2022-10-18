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
        <button className="text-xl p-1 md:text-2xl md:ml-2 bg-gray-700 focus:outline-none rounded-lg hover:text-amber-500 md:p-2"
          onClick={() => setTheme("light")}>
          <MdLightMode/>
        </button>
      );
    } else {
      return (
        <button className="text-xl p-1 md:text-2xl md:ml-2 bg-gray-200 focus:outline-none  rounded-xl hover:text-amber-500 md:p-2" 
          onClick={() => setTheme("dark")}>
          <MdDarkMode/>
        </button>
      );
    }
  };
  return <li>{renderThemeChanger()}</li>;
}
