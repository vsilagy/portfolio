import Head from "next/head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import SocialLink from "../components/SocialLink";
import { SiLinkedin, SiGithub, SiTwitter, SiGmail } from "react-icons/si";
import Image from "next/image";
import profile from "../public/profile-img.png";
import project1 from "../public/project-1.png";
import project2 from "../public/project-2.png";
import project3 from "../public/project-3.png";
import project4 from "../public/project-4.png";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Frontend developer based in NYC" />
        <link rel="icon" href="/favicon.ico" />
        <title>Vlad Silagy - Frontend Developer</title>
      </Head>
      <main className="max-w-screen-lg mx-auto px-5">
        <NavBar />
        <section className="min-w-full mb-20">
          <div className="text-center py-5 mb-5 md:flex">
            <div className="mx-auto mb-5 rounded-full md:basis-1/2 md:order-2">
              <Image
                src={profile}
                alt="Vlad V Silagy"
                height={360}
                width={360}
                className="rounded-full"
                // layout="responsive"
              />
            </div>
            <div className=" flex-1 md:text-start md:basis-1/2 md:mr-10">
              <h1 className="text-6xl py-2 text-blue-500  dark:text-orange-400 font-bold lg:text-7xl">
                Vlad Silagy
              </h1>
              <h2 className="text-2xl py-2 font-mono font-bold md:text-3xl">
                Frontend Developer
              </h2>
              <p className="text-md py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                tempus posuere sem Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Ut tempus
              </p>
              <div className="text-4xl flex justify-center gap-8 py-5 ease-in-out md:justify-start">
                <SocialLink
                  href={"https://github.com/vsilagy"}
                  label={"Github"}
                  icon={<SiGithub />}
                />
                <SocialLink
                  href={"https://www.linkedin.com/in/vsilagy/"}
                  label={"LinkedIn"}
                  icon={<SiLinkedin />}
                />
                <SocialLink
                  href={"https://twitter.com/VladSilagy"}
                  label={"Twitter"}
                  icon={<SiTwitter />}
                />

                <SocialLink
                  href={"mailto:vladsilagy@gmail.com"}
                  label={"Gmail"}
                  icon={<SiGmail />}
                />
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
            <Card
              title={"Calculator"}
              image={project1}
              live={"Live"}
              liveLink={"https://vsilagy.github.io/calculator/"}
              source={"Source"}
              sourceLink={"https://github.com/vsilagy/calculator/"}
            />
            <Card
              title={"Tic-Tac-Toe"}
              image={project2}
              live={"Live"}
              liveLink={"https://vsilagy.github.io/tic-tac-toe/"}
              source={"Source"}
              sourceLink={"https://github.com/vsilagy/tic-tac-toe/"}
            />
            <Card
              title={"Library app"}
              image={project3}
              live={"Live"}
              liveLink={"https://vsilagy.github.io/library/"}
              source={"Source"}
              sourceLink={"https://github.com/vsilagy/library/"}
            />
            <Card
              title={"Rock Paper Scissors"}
              image={project4}
              live={"Live"}
              liveLink={"https://vsilagy.github.io/rock-paper-scissors/"}
              source={"Source"}
              sourceLink={"https://github.com/vsilagy/rock-paper-scissors/"}
            />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
