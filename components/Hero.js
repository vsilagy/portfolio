import SocialBtn from './SocialBtn';
import Image from 'next/image';
import data from '../public/data';
import { SiLinkedin, SiGithub } from 'react-icons/si';

export default function Hero() {
	return (
		<section className="min-w-full mb-20">
			<div className="text-center py-5 mb-5 md:flex">
				<div className="mx-auto mb-5 rounded-full md:basis-1/3 md:order-2">
					<Image
						src={data.profile}
						alt={data.name}
						height={240}
						width={240}
						className="rounded-full"
					/>
				</div>
				<div className=" flex-1 md:text-start md:basis-1/2 md:mr-10">
					<h1 className="text-5xl py-2 font-bold lg:text-6xl">
						{data.name}
					</h1>
					<h2 className="text-xl py-2 font-mono font-bold md:text-3xl">
						{data.role}
					</h2>
					<p className="text-md py-2">{data.description}</p>
					<div className="flex justify-center gap-4 py-5 ease-in-out md:justify-start md:gap-8">
						<SocialBtn
							href={data.links.github}
							label={'Github'}
							name={'Github'}
							icon={<SiGithub />}
						/>
						<SocialBtn
							href={data.links.linkedin}
							label={'LinkedIn'}
							name={'LinkedIn'}
							icon={<SiLinkedin />}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
