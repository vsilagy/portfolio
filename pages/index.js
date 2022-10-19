import Head from "next/head";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import MainProjects from "../components/MainProjects";
import Footer from "../components/Footer";
import { Main } from "next/document";



export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Frontend developer based in Greenwich, CT" />
        <link rel="icon" href="/favicon.ico" />
        <title>Vlad Silagy - Frontend Developer</title>
      </Head>
      <main className="max-w-screen-md mx-auto px-3 md:px-5">
        <NavBar />
        <Hero />
        <MainProjects />
        <Footer />
      </main>
    </div>
  );
}
