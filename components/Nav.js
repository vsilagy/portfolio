import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import DarkModeToggle from './DarkModeToggle';
import { Cross as Hamburger } from 'hamburger-react';

function NavLink({ href, children }) {
	const router = useRouter();
	const isActive = router.asPath === href;

	return (
		<Link href={href}>
			<a
				className={cn(
					isActive ? 'font-bold' : 'font-normal',
					'py-2 px-3 rounded-lg antialiased hover:bg-gray-300 dark:hover:bg-gray-800',
				)}>
				{children}
			</a>
		</Link>
	);
}

export default function Nav() {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<nav className="relative flex justify-between px-3 md:justify-end items-center py-5 md:px-0">
				<div className="hidden md:flex justify-end items-center py-5">
					<NavLink href="/">Home</NavLink>
					<NavLink href="/projects">Projects</NavLink>
				</div>
				<div className="md:hidden" onClick={() => setOpen(!isOpen)}>
					<Hamburger
						direction="left"
						size={24}
						label="Show menu"
						toggled={isOpen}
						toggle={setOpen}
						duration={0.5}
					/>
					{isOpen && (
						<div className="absolute w-full h-screen z-10 flex flex-col items-start justify-start text-3xl py-2 mt-2 rounded-md bg-gray-100 dark:bg-neutral-900">
							<NavLink href="/">Home</NavLink>
							<NavLink href="/projects">Projects</NavLink>
						</div>
					)}
				</div>
				<DarkModeToggle />
			</nav>
		</>
	);
}
