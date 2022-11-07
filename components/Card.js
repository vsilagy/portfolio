import Image from 'next/image';
import { HiCode, HiExternalLink } from 'react-icons/hi';

export default function Card({ title, image, live, link }) {
	return (
		<div className="flex-1 w-[20rem] p-2 rounded-lg shadow-xl md:w-[25rem] md:basis-1/3  dark:bg-gray-700">
			<h4 className="text-2xl font-mono py-2">{title}</h4>
			<Image
				src={image}
				alt="project screenshot"
				className="rounded-lg object-cover"
				width={'100%'}
				height={'100%'}
				layout="responsive"
			/>
			<div className="flex justify-center gap-5 py-5">
				<a
					href={live}
					target="_blank"
					rel="noopener noreferrer"
					className="w-28 flex justify-center gap-2 items-center bg-sky-500 hover:bg-sky-600 text-white  py-2 px-4 rounded-lg md:text-lg md:w-32 hover:scale-105 ease-in duration-200">
					Live
					<HiExternalLink />
				</a>
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className="w-28 flex justify-center gap-2 items-center bg-sky-500 hover:bg-sky-600 text-white  py-2 px-4 rounded-lg md:text-lg md:w-32 hover:scale-105 ease-in duration-200">
					Source
					<HiCode />
				</a>
			</div>
		</div>
	);
}
