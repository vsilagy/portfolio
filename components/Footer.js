import React from "react";
import SocialLink from "./SocialLink";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-2 justify-between items-center py-5 md:flex-row text-slate-700 dark:text-slate-300">
        <p >© Vlad Silagy, 2022</p>
        <div className="flex gap-2 items-center">
          <p className="text-bases">Built with Next.js and Tailwind</p>
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
