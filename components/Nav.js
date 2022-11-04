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
		<nav className="flex justify-end items-center py-5">
			<NavLink href="/">Projects</NavLink>
			{/* <NavLink href="/">Contact</NavLink> */}
			<DarkModeToggle />
		</nav>
	);
}
