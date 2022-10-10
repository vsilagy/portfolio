export default function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className=" hover:text-blue-500"
    >
      {icon}
    </a>
  );
}
