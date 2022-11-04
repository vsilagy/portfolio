import SocialLink from './SocialLink';
import Image from 'next/image';
import profile from '../public/profile-img.png';
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';

export default function Hero() {
	return (
		<section className="min-w-full mb-20">
			<div className="text-center py-5 mb-5 md:flex">
				<div className="mx-auto mb-5 rounded-full md:basis-1/3 md:order-2">
					<Image
						src={profile}
						alt="Vlad V Silagy"
						height={240}
						width={240}
						className="rounded-full border-8"
					/>
				</div>
				<div className=" flex-1 md:text-start md:basis-1/2 md:mr-10">
					<h1 className="text-5xl py-2 text-sky-500 font-bold lg:text-6xl">
						Vlad Silagy
					</h1>
					<h2 className="text-xl py-2 font-mono font-bold md:text-3xl">
						Frontend Developer
					</h2>
					<p className="text-md py-2">
						I'm a self-taught frontend developer from Greenwich, CT.
					</p>
					<div className="text-4xl flex justify-center gap-8 py-5 ease-in-out md:justify-start">
						<SocialLink
							href={'https://github.com/vsilagy'}
							label={'Github'}
							icon={<SiGithub />}
						/>
						<SocialLink
							href={'https://www.linkedin.com/in/vsilagy/'}
							label={'LinkedIn'}
							icon={<SiLinkedin />}
						/>
						<SocialLink
							href={'mailto:vladsilagy@gmail.com'}
							label={'Gmail'}
							icon={<SiGmail />}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
