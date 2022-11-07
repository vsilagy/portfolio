import React from 'react';
import Head from 'next/head';
import { userRouter } from 'next/router';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import MainProjects from '../components/MainProjects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<div>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta
					name="description"
					content="Frontend developer based in Greenwich, CT"
				/>
				<link rel="icon" href="/favicon.ico" />
				<title>Vlad Silagy - Frontend Developer</title>
			</Head>
			<main className="max-w-screen-lg mx-auto px-3 md:px-5">
				<Nav />
				<Hero />
				<MainProjects />
				<Contact />
				<Footer />
			</main>
		</div>
	);
}
