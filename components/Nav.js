import React from 'react';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

const NavLink = ({ href, children }) => (
	<>
		<Link href={href}>
			<a className="hover:bg-gray-200 rounded-lg dark:hover:bg-gray-700 py-2 px-3">
				{children}
			</a>
		</Link>
	</>
);

export default function Nav() {
	return (
		<nav className="flex justify-end items-center py-5">
			<NavLink href="/">Home</NavLink>
			<NavLink href="/projects">Projects</NavLink>
			<NavLink href="/#contact">Contact</NavLink>
			<DarkModeToggle />
		</nav>
	);
}
