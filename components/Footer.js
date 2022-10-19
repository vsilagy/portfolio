import React from "react";
import SocialLink from "./SocialLink";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-1 justify-between items-center py-5 md:flex-row text-gray-700 dark:text-slate-300">
        <p >© Vlad Silagy, 2022</p>
        <div className="flex text-xl gap-2 justify-center items-center">
          <p className="text-base">Built with Next.js and Tailwind</p>
          <SocialLink
          href={"https://github.com/vsilagy/portfolio-nextjs"}
          label={"Github"}
          icon={<SiGithub />}
        />
        </div>
      </div>
    </footer>
  );
}
