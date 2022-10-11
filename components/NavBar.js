import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const NavLink = ({ href, children }) => (
  <li>
    <Link href={href}>
      <a className="bg-transparent hover:bg-blue-500 hover:text-white py-3 px-4  rounded-md">
        {children}
      </a>
    </Link>
  </li>
);

export default function NavBar() {
  return (
    <nav className="flex justify-between items-start py-10">
      <Link href="/">
        <a className="text-lg font-mono font-bold md:text-2xl hover:text-blue-500 dark:hover:text-orange-400 ">
          &lt;vsilagy/&gt;
        </a>
      </Link>
      <ul className="flex items-center gap-3">
        {/* <NavLink href="/about">About</NavLink> */}
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/resume">Resume</NavLink>
        <DarkModeToggle />
      </ul>
    </nav>
  );
}
