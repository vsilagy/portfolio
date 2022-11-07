export default function SocialBtn({ href, name, label, icon }) {
	return (
		<a
			href={href}
			aria-label={label}
			target="_blank"
			rel="noopener noreferrer"
			className="btn text-xl md:text-2xl">
			{name}
			{icon}
		</a>
	);
}
