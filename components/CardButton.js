import { HiCode, HiExternalLink } from "react-icons/hi";

export default function CardButton({ href, name }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-28 flex justify-center gap-2 items-center bg-sky-500 hover:bg-sky-600 text-white  py-2 px-4 rounded-lg md:text-lg md:w-32 hover:scale-105 ease-in duration-200"
    >
      {name}
      {name === "Live" ? <HiExternalLink /> : <HiCode />}
    </a>
  );
}
