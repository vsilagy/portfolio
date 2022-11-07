import { useEffect, useState } from 'react';
import userData from '../public/data';

export default function Projects() {
	const [repos, setRepos] = useState([]);
	let username = userData.username;

	useEffect(() => {
		const fetchRepos = async () => {
			const response = await fetch(
				`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-ascs`,
			);
			const data = await response.json();
			setRepos(data.items);
		};
		fetchRepos();
	}, []);

	console.log(repos);
	return (
		<section>
			<h1> Personal Projects</h1>
			{repos.map((repo, idx) => (
				<RepoCard repo={repo} key={idx} />
			))}
		</section>
	);
}

function RepoCard({ repo }) {
	return (
		<div>
			<h2>{repo.name}</h2>
			<p>{repo.description}</p>
			<p>{repo.homepage}</p>
			<p>{repo.html_url}</p>
		</div>
	);
}
