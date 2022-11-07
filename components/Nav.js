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
					isActive
						? 'font-semibold  hover:bg-gray-200  dark:hover:bg-gray-700'
						: 'font-normal  hover:bg-gray-200  dark:hover:bg-gray-700',
					'py-2 px-2 rounded-lg',
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
