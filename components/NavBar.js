import React from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const NavLink = ({ href, children }) => (
  <>
    <Link href={href}>
      <a className="font-semibold hover:bg-gray-200 rounded-lg dark:hover:bg-gray-700 py-2 px-3">
        {children}
      </a>
    </Link>
  </>
);

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center py-10">
      <Link href="/">
        <a className="text-base font-mono font-bold hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2 md:text-2xl">
          &lt;vsilagy/&gt;
        </a>
      </Link>
      <div className="flex items-center text-base gap-1 md:gap-3">
        <NavLink href="/">Projects</NavLink>
        {/* <NavLink href="/">Resume</NavLink> */}
        <DarkModeToggle />
      </div>
    </nav>
  );
}
