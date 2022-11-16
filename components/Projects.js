import { useEffect, useState } from 'react';
import { HiCode, HiExternalLink } from 'react-icons/hi';

import data from '../public/data';

export default function Projects() {
	const [repos, setRepos] = useState([]);
	let username = data.username;

	useEffect(() => {
		const fetchRepos = async () => {
			const response = await fetch(
				`https://api.github.com/search/repositories?q=user:${username}+sort:updated-desc`,
			);
			const repo = await response.json();
			let latestRepos = repo.items.splice(0, 16);
			setRepos(latestRepos);
		};
		fetchRepos();
	}, []);
	return (
		<section className="min-w-full my-5">
			<div className="flex flex-col gap-4 justify-between items-center px-4 md:flex-row md:px-0">
				<h1 className="text-3xl text-center underline py-1 font-bold font-mono md:text-start md:text-4xl">
					Projects
				</h1>
				<a
					href={data.links.github}
					target="_blank"
					rel="noopener noreferrer"
					className="flex gap-1 items-center text-md font-semibold bg-white hover:bg-gray-200 border border-gray-300 px-4 py-2 rounded-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 md:text-xl md:px-6 md:py-3">
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
	const { topics } = repo;

	return (
		<div className="flex-1 w-[20rem] h-64 border border-gray-300 bg-white p-6  space-y-4 rounded-md md:w-[25rem] md:basis-1/3 dark:bg-gray-800  dark:border-gray-700">
			<a
				href={repo.html_url}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-1 font-mono font-bold text-2xl text-blue-500 dark:text-blue-400">
				{repo.name}
				<HiExternalLink />
			</a>
			<p className="md:h-12">{repo.description}</p>
			<a
				href={repo.homepage}
				target="_blank"
				rel="noopener noreferrer"
				className="text-md font-semibold flex items-center gap-1">
				View Live
				<HiExternalLink />
			</a>
			<p className="flex flex-wrap gap-2">
				{topics.map((topic, idx) => (
					<span
						className="py-1 px-2 bg-slate-300 dark:bg-slate-600 rounded"
						key={idx}>
						{topic}
					</span>
				))}
			</p>
		</div>
	);
}
