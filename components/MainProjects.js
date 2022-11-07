import Card from '../components/Card';
import data from '../public/data';
import imageCalc from '../public/image-calculator.png';
import imageCoffee from '../public/image-coffee.png';
import imageDev from '../public/image-dev-search.png';
import imageTic from '../public/image-tic-tac-toe.png';

export default function MainProjects() {
	const { projects } = data;
	console.log(projects);
	return (
		<section className="min-w-full mb-5">
			<h3 className="text-3xl text-center underline py-1 font-bold font-mono md:text-start">
				Projects
			</h3>
			<p className="text-center md:text-start"></p>
			<div className="flex flex-col items-center gap-10 py-10 md:flex-row md:flex-wrap  ">
				<Card
					title={'Github Dev Search'}
					image={imageDev}
					live={'https://gh-dev-search.netlify.app/'}
					link={'https://github.com/vsilagy/gh-dev-search/'}
				/>
				<Card
					title={'Toucan Coffee'}
					image={imageCoffee}
					live={'https://toucan-coffee.netlify.app/'}
					link={
						'https://github.com/chingu-voyages/v41-toucans-team-04'
					}
				/>
				<Card
					title={'Calculator'}
					image={imageCalc}
					live={'https://vsilagy.github.io/calculator/'}
					link={'https://github.com/vsilagy/calculator/'}
				/>
				<Card
					title={'Tic-Tac-Toe'}
					image={imageTic}
					live={'https://vsilagy.github.io/tic-tac-toe/'}
					link={'https://github.com/vsilagy/tic-tac-toe/'}
				/>
				{/* {projects.map((project, idx) => {
					<Card
						title={project.title}
						// image={project.imgUrl}

						live={project.live}
						link={project.link}
						key={idx}
					/>;
				})} */}
			</div>
		</section>
	);
}
