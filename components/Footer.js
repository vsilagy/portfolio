import React from "react";
import SocialLink from "./SocialLink";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer>
      <div className="text-xl flex gap-2 justify-center items-center p-5 text-slate-700 dark:text-slate-300">
        <p className="text-sm">© 2022 Made by vsilagy</p>
        <SocialLink
          href={"https://github.com/vsilagy/portfolio-nextjs"}
          label={"Github"}
          icon={<SiGithub />}
        />
      </div>
    </footer>
  );
}
