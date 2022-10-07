import Head from "next/head";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineMail,
} from "react-icons/ai";
import Image from "next/image";
import profile from "../public/profile-img.png";
import project1 from "../public/project-1.png";
import project2 from "../public/project-2.png";
import project3 from "../public/project-3.png";
import project4 from "../public/project-4.png";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <MdLightMode
          className="text-2xl hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MdDarkMode
          className="text-2xl hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div>
      <Head>
        <title>Vlad Silagy Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen-lg mx-auto p-4">
        <section className="min-h-full mb-20">
          <nav className="flex justify-between py-10">
            <a className="text-xl font-mono font-bold" href="#">
              {" "}
              &lt;vsilagy/&gt;
            </a>
            <ul className="flex items-center gap-2">
              <li>
                <a
                  className="px-4 py-2 rounded-md hover:ring-2 hover:ring-amber-500"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="px-4 py-2 rounded-md hover:ring-2 ring-amber-500 "
                  href="#"
                >
                  Resume
                </a>
              </li>
              <li>{renderThemeChanger()}</li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <div className="mx-auto w-64 h-64 mb-5 md:w-80 md:h-80">
              <Image src={profile} className="rounded-full" />
            </div>
            <h1 className="text-5xl py-2 text-blue-500 dark:text-amber-500 font-bold md:text-6xl">
              Vlad Silagy
            </h1>
            <h2 className="text-2xl py-2 font-mono font-bold md:text-3xl">
              Frontend Developer
            </h2>
            <p className="text-md py-5 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus
              posuere sem, nec malesuada risus ultrices non. Suspendisse
              potenti!
            </p>
          </div>
          <div className="text-3xl flex justify-center gap-10 ease-in-out md:text-5xl">
            <a
              href="https://github.com/vsilagy"
              target="_blank"
              className="text-[#171515] dark:text-white hover:animate-pulse"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vsilagy/"
              target="_blank"
              className="text-[#0072b1] dark:text-white hover:animate-pulse"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://twitter.com/VladSilagy"
              target="_blank"
              className="text-[#1DA1F2] dark:text-white hover:animate-pulse"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="mailto:vladsilagy@gmail.com"
              target="_blank"
              className="hover:animate-pulse"
            >
              <AiOutlineMail />
            </a>
          </div>
        </section>
        <section className="min-w-full">
          <h3 className="text-3xl text-center py-1 font-bold font-mono md:text-start">
            Projects
          </h3>
          <p className="text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus
            posuere sem, nec malesuada risus ultrices non. Suspendisse potenti!
          </p>
          <div className="flex flex-col items-center gap-10 py-10 md:flex-row md:flex-wrap  ">
            <div className="basis-1/3 flex-1 w-[25rem] p-2 rounded-lg shadow-xl">
              <Image
                src={project1}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 w-[25rem] p-2 rounded-lg shadow-xl">
              <Image
                src={project2}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 w-[25rem] p-2 rounded-lg shadow-xl">
              <Image
                src={project3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 w-[25rem] p-2 rounded-lg shadow-xl">
              <Image
                src={project4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
        <footer></footer>
      </main>
    </div>
  );
}
