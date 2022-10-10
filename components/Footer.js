import React from "react";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="flex gap-2 justify-center items-center text-slate-700 dark:text-slate-300">
        <p>© 2022 Vlad Silagy</p>
        <a
          href="https://github.com/vsilagy/portfolio-nextjs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-blue-500"
        >
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
}
