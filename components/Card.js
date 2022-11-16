import Image from 'next/image';
import { HiCode, HiExternalLink } from 'react-icons/hi';

export default function Card({
	title,
	image,
	description,
	live,
	link,
}) {
	return (
		<div className="flex-1 w-[20rem] h-[44rem] bg-white  border border-gray-300 p-2 rounded-md  md:basis-1/3 dark:bg-gray-800 dark:border-gray-700">
			<h4 className="text-2xl text-center font-mono py-2 md:text-start">
				{title}
			</h4>
			<Image
				src={image}
				alt="project screenshot"
				className="rounded-lg object-cover"
				width={'100%'}
				height={'100%'}
				layout="responsive"
				priority="true"
			/>
			<p className="py-4 px-2">{description}</p>
			<div className="flex justify-center gap-5 py-5">
				<a
					href={live}
					target="_blank"
					rel="noopener noreferrer"
					className="btn w-32 md:text-lg">
					Live
					<HiExternalLink />
				</a>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="btn w-32 md:text-lg">
					Source
					<HiCode />
				</a>
			</div>
		</div>
	);
}
