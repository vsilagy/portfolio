import React from 'react';
import SocialLink from './SocialLink';
import { SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';

export default function Footer() {
	return (
		<footer>
			<div className="flex flex-col-reverse gap-1 justify-between items-center py-5 md:flex-row text-gray-700 dark:text-slate-300">
				<div className="flex flex-col gap-1">
					<p>© Vlad Silagy, 2022</p>
					<div className="flex text-xl gap-2 justify-center items-center">
						<p className="text-base">
							Built with{' '}
							<a
								href="https://nextjs.org/"
								target={'_blank'}
								rel={'noreferrer'}
								className="font-medium hover:text-sky-500 hover:border-b-2 hover:border-sky-500">
								NextJS
							</a>{' '}
							and{' '}
							<a
								href="https://tailwindcss.com/"
								target={'_blank'}
								rel={'noreferrer'}
								className="font-medium hover:text-sky-500 hover:border-b-2 hover:border-sky-500">
								Tailwind CSS
							</a>
						</p>
					</div>
				</div>
				<div className="text-3xl flex justify-center gap-8 py-5 ease-in-out md:gap-6">
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
						href={'https://twitter.com/vladsilagy'}
						label={'Twitter'}
						icon={<SiTwitter />}
					/>
				</div>
			</div>
		</footer>
	);
}
