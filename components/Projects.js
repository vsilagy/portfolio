import Card from './Card';
import imageCalc from '../public/image-calculator.png';
import imageCoffee from '../public/image-coffee.png';
import imageDev from '../public/image-dev-search.png';
import imageTic from '../public/image-tic-tac-toe.png';

export default function Projects() {
	return (
		<section className="min-w-full mb-5">
			<h3
				id="projects"
				className="text-3xl text-center underline py-1 font-bold font-mono md:text-start">
				Projects
			</h3>
			<div className="flex flex-col items-center gap-10 py-10 md:flex-row md:flex-wrap">
				<Card
					title={'Github Dev Search'}
					image={imageDev}
					description={
						'A react app that uses GitHub REST API to find users and display their info, styled with Tailwind CSS'
					}
					live={'https://gh-dev-search.netlify.app/'}
					link={'https://github.com/vsilagy/github-dev-search'}
				/>
				<Card
					title={'Toucan Coffee'}
					image={imageCoffee}
					description={`A coffee ecommerce site built with React. Part of collaborative project from Chingu Voyages`}
					live={'https://toucan-coffee.netlify.app/'}
					link={
						'https://github.com/chingu-voyages/v41-toucans-team-04'
					}
				/>
				<Card
					title={'Calculator'}
					image={imageCalc}
					description={
						'A simple calculator built with JavaScript, CSS and HTML'
					}
					live={'https://vsilagy.github.io/calculator/'}
					link={'https://github.com/vsilagy/calculator/'}
				/>
				<Card
					title={'Tic-Tac-Toe'}
					image={imageTic}
					description={
						'A game of Tic-Tac-Toe built with JavaScript, CSS and HTML'
					}
					live={'https://vsilagy.github.io/tic-tac-toe/'}
					link={'https://github.com/vsilagy/tic-tac-toe/'}
				/>
			</div>
		</section>
	);
}
