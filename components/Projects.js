import { useEffect, useState } from 'react';
import { HiCode, HiExternalLink } from 'react-icons/hi';

import data from '../public/data';

export default function Projects() {
	const [repos, setRepos] = useState([]);
	let username = data.username;

	useEffect(() => {
		const fetchRepos = async () => {
			const response = await fetch(
				`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-ascs`,
			);
			const repo = await response.json();
			setRepos(repo.items);
		};
		fetchRepos();
	}, []);
	return (
		<section className="min-w-full my-3">
			<div className="flex justify-between mb-5">
				<h1 className="text-3xl text-center underline py-1 font-bold font-mono md:text-start">
					Personal Projects
				</h1>
				<a
					href={data.links.github}
					target="_blank"
					rel="noopener noreferrer"
					className="flex gap-1 items-center bg-white hover:bg-gray-200 border border-gray-300 px-8 py-4 rounded-md text-xl font-semibold dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
					View Github <HiExternalLink />
				</a>
			</div>

			<div className="flex flex-col items-center gap-10 py-10 md:flex-row md:flex-wrap">
				{repos.map((repo, idx) => (
					<RepoCard repo={repo} key={idx} />
				))}
			</div>
		</section>
	);
}

function RepoCard({ repo }) {
	return (
		<div className="flex-1 w-[20rem] h-52 border border-gray-300 bg-white p-4 space-y-4 rounded-md md:w-[25rem] md:basis-1/3 dark:bg-gray-800  dark:border-gray-700">
			<a
				href={repo.html_url}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-1 font-mono font-bold text-2xl text-blue-500 dark:text-blue-400">
				{repo.name}
				<HiExternalLink />
			</a>
			<p>{repo.description}</p>
			<a
				href={repo.homepage}
				target="_blank"
				rel="noopener noreferrer"
				className="text-md font-semibold flex items-center gap-1">
				View Live
				<HiExternalLink />
			</a>
			<p className="text-gray-500">{repo.topics.join(' ')}</p>
		</div>
	);
}
