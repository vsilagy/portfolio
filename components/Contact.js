import React, { useState } from 'react';
import Image from 'next/image';
import telegrams from '../public/telegrams.svg';
export default function Contact() {
	const [query, setQuery] = useState({
		name: '',
		email: '',
	});

	const handleParam = () => (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setQuery((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		Object.entries(query).forEach(([key, value]) => {
			formData.append(key, value);
		});
		fetch(
			'https://getform.io/f/f0e3f79a-e965-4256-a4f6-31e23226edbe',
			{
				method: 'POST',
				body: formData,
			},
		).then(() => setQuery({ name: '', email: '', message: '' }));
	};
	return (
		<section className="max-w-full ">
			<h3 className="text-3xl text-center underline py-1 mb-5 font-bold font-mono md:text-start">
				Contact
			</h3>
			<div className="relative rounded-md mb-10">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">
					<form
						onSubmit={handleSubmit}
						className="flex flex-col  w-[20rem] mx-auto py-4 px-2 border rounded-md  border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 md:flex-1 md:basis-1/2">
						<label htmlFor="name" className="text-sm  mx-4">
							{' '}
							Your Name
						</label>
						<input
							type="text"
							name="name"
							required
							value={query.name}
							onChange={handleParam()}
							className="py-2 mt-2 px-1 mx-4 rounded-md border-2 focus:outline-none dark:bg-gray-800 dark:border-gray-700 focus:border-2 focus:border-blue-500 dark:focus:border-blue-400"
						/>
						<label htmlFor="email" className="text-sm  mx-4 mt-4">
							Your Email
						</label>
						<input
							type="text"
							name="email"
							required
							value={query.email}
							onChange={handleParam()}
							className="py-2 mt-2 px-1 mx-4 rounded-md border-2 focus:outline-none dark:bg-gray-800 dark:border-gray-700 focus:border-2 focus:border-blue-500 dark:focus:border-blue-400"
						/>
						<label htmlFor="message" className="text-sm  mx-4 mt-4">
							Write your message
						</label>
						<textarea
							type="text"
							name="message"
							required
							value={query.message}
							onChange={handleParam()}
							rows="4"
							className="py-2 mt-2 px-1 mx-4 rounded-md border-2 focus:outline-none dark:bg-gray-800 dark:border-gray-700 focus:border-2 focus:border-blue-500 dark:focus:border-blue-400"></textarea>
						<button
							type="submit"
							className="text-base font-semibold m-4 mt-8 py-2 px-4 w-40 bg-white text-blue-500 ring-2 ring-blue-500 dark:text-blue-400 dark:ring-blue-400 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md ease-in duration-200 ">
							Send Message
						</button>
					</form>
					<div className="hidden p-6 md:basis-1/2 md:flex">
						<Image
							src={telegrams}
							alt="telegrams"
							height={420}
							width={420}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
