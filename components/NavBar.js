import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-start py-10">
      <Link href="/">
        <a className="text-lg font-mono font-bold md:text-2xl hover:text-blue-500">
          &lt;vsilagy/&gt;
        </a>
      </Link>
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/About">
            <a className="bg-transparent hover:bg-blue-500 hover:text-white py-2 px-4 hover:border-transparent rounded-md">
              About
            </a>
          </Link>
        </li>
        <li>
          <a
            className="bg-transparent hover:bg-blue-500 hover:text-white py-2 px-4 hover:border-transparent rounded-md"
            href="/About.js"
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
        <DarkModeToggle />
      </ul>
    </nav>
  );
}
