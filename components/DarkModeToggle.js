import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

export default function DarkModeToggle() {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const renderThemeChanger = () => {
		if (!mounted) return null;

		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<button
					className="text-xl p-2 md:text-2xl md:ml-1 bg-gray-700 focus:outline-none hover:ring-2 hover:ring-gray-500 rounded-lg hover:text-amber-500"
					onClick={() => setTheme('light')}>
					<MdLightMode />
				</button>
			);
		} else {
			return (
				<button
					className="text-xl p-2 md:text-2xl md:ml-1 bg-gray-200 focus:outline-none hover:ring-2 hover:ring-gray-400  rounded-lg hover:text-amber-500 transition duration-1000 "
					onClick={() => setTheme('dark')}>
					<MdDarkMode />
				</button>
			);
		}
	};
	return <>{renderThemeChanger()}</>;
}
