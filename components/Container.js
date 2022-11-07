import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Nav from './Nav';
import Footer from './Footer';

export default function Container(props) {
	const router = useRouter();

	const { children, ...customMeta } = props;
	const meta = {
		title: 'Vlad Silagy - Frontend Developer',
		description: 'Front-end developer based in Greenwich CT',
		image: '/profile-img.png',
		type: 'website',
		...customMeta,
	};
	return (
		<div>
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta content={meta.description} name="description" />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@vladsilagy" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.image} />
				{meta.date && (
					<meta
						property="article:published_time"
						content={meta.date}
					/>
				)}
			</Head>
			<main className="max-w-screen-lg mx-auto px-3 md:px-5">
				<Nav />
				<div>{children}</div>
				<Footer />
			</main>
		</div>
	);
}
