import React from 'react';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
	return (
		<Container>
			<Hero />
			<Projects />
			<Contact />
		</Container>
	);
}
