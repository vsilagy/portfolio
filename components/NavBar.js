import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const NavLink = ({ href, children }) => (
  <li>
    <Link href={href}>
      <a className=" hover:ring-2 hover:ring-blue-500 dark:hover:ring-orange-500 py-1 px-2 md:py-3 md:px-4 rounded-md">
        {children}
      </a>
    </Link>
  </li>
);

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <a className="text-sm font-mono font-bold md:text-2xl hover:text-blue-500 dark:hover:text-orange-500">
          &lt;vsilagy/&gt;
        </a>
      </Link>
      <ul className="flex items-center text-sm gap-1 md:text-base md:gap-3">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/resume">Resume</NavLink>
        <DarkModeToggle />
      </ul>
    </nav>
  );
}
