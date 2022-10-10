export default function CardButton({ name, link, icon }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-28 flex justify-center gap-2 items-center bg-transparent hover:bg-blue-500  hover:text-white py-2 px-4 border border-black dark:border-white hover:border-transparent dark:hover:border-transparent rounded-md"
    >
      {name}
      {icon}
    </a>
  );
}
