import React from 'react';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

const NavLink = ({ href, children }) => (
	<>
		<Link href={href}>
			<a className="font-semibold hover:bg-gray-200 rounded-lg dark:hover:bg-gray-700 py-2 px-3">
				{children}
			</a>
		</Link>
	</>
);

export default function Nav() {
	return (
		<nav className="flex justify-between items-center py-5 z-10">
			<Link href="/">
				<a className="text-md font-mono font-bold  p-2 ">
					&lt;vsilagy/&gt;
				</a>
			</Link>
			<div className="flex items-center text-base font-bold gap-1 md:gap-3">
				<NavLink href="/">Projects</NavLink>
				{/* <NavLink href="/">Resume</NavLink> */}
				<DarkModeToggle />
			</div>
		</nav>
	);
}
