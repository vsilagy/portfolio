export default function SocialLink({ href, label, icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className=" hover:text-sky-500 hover:scale-110 ease-in duration-200"
    >
      {icon}
    </a>
  );
}
