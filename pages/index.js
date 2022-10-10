import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { HiCode, HiExternalLink } from "react-icons/hi";
import Image from "next/image";
import profile from "../public/profile-img.png";
import project1 from "../public/project-1.png";
import project2 from "../public/project-2.png";
import project3 from "../public/project-3.png";
import project4 from "../public/project-4.png";
import react from "react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vlad Silagy - Frontend Developer</title>
        <meta name="description" content="Frontend developer based in NYC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen-lg mx-auto px-5">
        <Header />
        <section className="min-h-full mb-20">
          <div className="text-center py-5 mb-5 md:flex">
            <div className="mx-auto mb-5 rounded-full md:basis-1/2 md:order-2">
              <Image
                src={profile}
                height={320}
                width={320}
                className="rounded-full"
              />
            </div>
            <div className=" flex-1 md:text-start md:basis-1/2">
              <h1 className="text-5xl py-2 text-blue-500  dark:text-orange-400 font-bold md:text-6xl">
                Vlad V Silagy
              </h1>
              <h2 className="text-2xl py-2 font-mono font-bold md:text-3xl">
                Frontend Developer
              </h2>
              <p className="text-md py-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                tempus posuere sem
              </p>
              <div className="text-5xl flex justify-center gap-8 ease-in-out md:justify-start">
                <a
                  href="https://github.com/vsilagy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/vsilagy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  hover:text-[#0072b1]"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://twitter.com/VladSilagy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  hover:text-[#1DA1F2]"
                >
                  <AiFillTwitterCircle />
                </a>
                <a
                  href="mailto:vladsilagy@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <AiOutlineMail />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="min-w-full mb-5">
          <h3 className="text-3xl text-center py-1 font-bold font-mono md:text-start">
            Projects
          </h3>
          <p className="text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus
            posuere sem, nec malesuada risus ultrices non. Suspendisse potenti!
          </p>
          <div className="flex flex-col items-center gap-10 py-10 md:flex-row md:flex-wrap  ">
            <div className="basis-1/3 flex-1 w-[25rem] p-2 rounded-lg shadow-xl dark:bg-gray-700">
              <Image
                src={project1}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div className="flex justify-center gap-5 py-5">
                <button className="w-28 bg-transparent hover:bg-blue-500  hover:text-white py-2 px-4 border border-black dark:border-white hover:border-transparent dark:hover:border-transparent rounded-md">
                  Source
                </button>
                <button className="w-28 bg-transparent hover:bg-blue-500  hover:text-white py-2 px-4 border border-black dark:border-white hover:border-transparent dark:hover:border-transparent rounded-md">
                  Live
                </button>
              </div>
            </div>
            <div className="basis-1/3 flex-1 w-[25rem] p-2 rounded-lg shadow-xl dark:bg-slate-700">
              <Image
                src={project2}
                className="rounded-lg object-cover "
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div className="flex justify-center gap-5 py-5">
                <button className="w-28 bg-transparent hover:bg-blue-500  hover:text-white py-2 px-4 border border-black dark:border-white hover:border-transparent dark:hover:border-transparent rounded-md">
                  Source
                </button>
                <button className="w-28 bg-transparent hover:bg-blue-500  hover:text-white py-2 px-4 border border-black dark:border-white hover:border-transparent dark:hover:border-transparent rounded-md">
                  Live
                </button>
              </div>
            </div>
            <div className="basis-1/3 flex-1 w-[25rem] p-2 rounded-lg shadow-xl dark:bg-gray-700">
              <Image
                src={project3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div className="flex justify-center gap-5 py-5">
                <button className="w-28 bg-transparent hover:bg-blue-500  hover:text-white py-2 px-4 border border-black dark:border-white hover:border-transparent dark:hover:border-transparent rounded-md">
                  Source
                </button>
                <button className="w-28 bg-transparent hover:bg-blue-500  hover:text-white py-2 px-4 border border-black dark:border-white hover:border-transparent dark:hover:border-transparent rounded-md">
                  Live
                </button>
              </div>
            </div>
            <div className="basis-1/3 flex-1 w-[25rem] p-2 rounded-lg shadow-xl dark:bg-gray-700">
              <Image
                src={project4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
              <div className="flex justify-center gap-5 py-5">
                <button className="w-28 flex justify-center gap-2 items-center bg-transparent hover:bg-blue-500  hover:text-white py-2 px-4 border border-black dark:border-white hover:border-transparent dark:hover:border-transparent rounded-md">
                  Live
                  <HiExternalLink />
                </button>
                <button className="w-28 flex justify-center gap-2 items-center bg-transparent hover:bg-blue-500  hover:text-white py-2 px-4 border border-black dark:border-white hover:border-transparent dark:hover:border-transparent rounded-md">
                  Source
                  <HiCode />
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
