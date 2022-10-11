import { HiCode, HiExternalLink } from "react-icons/hi";

export default function CardButton({ href, name }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-28 flex justify-center gap-2 items-center bg-transparent hover:bg-blue-500  hover:text-white py-2 px-4 border border-black dark:border-white hover:border-transparent dark:hover:border-transparent dark:hover:bg-orange-500 rounded-md "
    >
      {name}
      {name === "Live" ? <HiExternalLink /> : <HiCode />}
    </a>
  );
}
