export default function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className=" hover:text-blue-500"
    >
      {icon}
    </a>
  );
}
