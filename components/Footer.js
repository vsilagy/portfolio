import React from "react";
import SocialLink from "./SocialLink";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <div className="text-2xl flex gap-2 justify-center items-center text-slate-700 dark:text-slate-300">
        <p className=" text-base ">© 2022 Vlad Silagy</p>
        <SocialLink
          href={"https://github.com/vsilagy/portfolio-nextjs"}
          icon={<AiFillGithub />}
        />
      </div>
    </footer>
  );
}
