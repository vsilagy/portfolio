import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import DarkModeToggle from './DarkModeToggle';

function NavLink({ href, children }) {
	const router = useRouter();
	const isActive = router.asPath === href;

	return (
		<Link href={href}>
			<a
				className={cn(
					isActive ? 'font-bold' : 'font-normal',
					'py-2 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800',
				)}>
				{children}
			</a>
		</Link>
	);
}

export default function Nav() {
	return (
		<nav className="flex justify-end items-center py-5">
			<NavLink href="/">Home</NavLink>
			<NavLink href="/projects">Projects</NavLink>
			{/* <NavLink href="/resume">Resume</NavLink> */}
			<DarkModeToggle />
		</nav>
	);
}
