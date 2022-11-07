import React from 'react';
import Container from '../components/Container';
import Hero from '../components/Hero';
import MainProjects from '../components/MainProjects';
import Contact from '../components/Contact';

export default function Home() {
	return (
		<Container>
			<Hero />
			<MainProjects />
			<Contact />
		</Container>
	);
}
