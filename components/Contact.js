import messages from '../public/messages.svg';
import Image from 'next/image';
export default function Contact() {
	return (
		<section className="max-w-full ">
			<h3 className="text-3xl text-center underline py-1 mb-5 font-bold font-mono md:text-start">
				Contact
			</h3>
			<div className="relative rounded-md mb-10">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">
					<form
						action="https://formsubmit.co/45253232dac18859338cf10293e893fc"
						method="post"
						className="flex flex-col  w-[20rem] mx-auto py-4 px-2 border rounded-md  border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 md:flex-1 md:basis-1/2">
						<label htmlFor="name" className="text-sm  mx-4">
							{' '}
							Your Name
						</label>
						<input
							type="text"
							className="py-2 mt-2 px-1 mx-4 rounded-md border-2 focus:outline-none dark:bg-gray-800 dark:border-gray-700 focus:border-2 focus:border-blue-500 dark:focus:border-blue-400"
							name="name"
						/>
						<label htmlFor="email" className="text-sm  mx-4 mt-4">
							Your Email
						</label>
						<input
							type="text"
							className="py-2 mt-2 px-1 mx-4 rounded-md border-2 focus:outline-none dark:bg-gray-800 dark:border-gray-700 focus:border-2 focus:border-blue-500 dark:focus:border-blue-400"
							name="email"
						/>
						<label htmlFor="message" className="text-sm  mx-4 mt-4">
							Write your message
						</label>
						<textarea
							rows="4"
							type="text"
							className="py-2 mt-2 px-1 mx-4 rounded-md border-2 focus:outline-none dark:bg-gray-800 dark:border-gray-700 focus:border-2 focus:border-blue-500 dark:focus:border-blue-400"
							name="message"></textarea>
						<button
							type="submit"
							className="text-base font-semibold m-4 mt-8 py-2 px-4 w-40 bg-white text-blue-500 ring-2 ring-blue-500 dark:text-blue-400 dark:ring-blue-400 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md ease-in duration-200 ">
							Send Message
						</button>
					</form>
					<div className="hidden p-4 md:basis-1/2 md:flex">
						<Image
							src={messages}
							alt="message"
							height={420}
							width={420}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

console.log({
	/* <div className="md:ml-4 ">
						<header className="">
							<h1 className="font-semibold text-2xl">
								Get in touch, let's talk.
							</h1>
							<p className="font-light text-base mt-2">
								Fill in the details and I'll get back to you as soon
								as I can.
							</p>
						</header>
						<div className="icons-container inline-flex flex-col my-20">
							<div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-telephone-fill h-4 w-4 text-blue-500"
									viewBox="0 0 16 16">
									<path
										fillRule="evenodd"
										d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
									/>
								</svg>
								<p className="font-light text-sm">{data.phone}</p>
							</div>
							<div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-envelope-fill h-4 w-4 text-blue-500"
									viewBox="0 0 16 16">
									<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
								</svg>
								<p className="font-light text-sm">{data.email}</p>
							</div>
							<div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-pin-fill h-4 w-4 text-blue-500"
									viewBox="0 0 16 16">
									<path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
								</svg>
								<p className="font-light text-sm">{data.address}</p>
							</div>
						</div>
						<div className="social-icons flex flex-row space-x-8">
							<a
								href={data.links.twitter}
								className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer">
								<svg
									width="24"
									height="24"
									className="text-gray-50"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
										fill="currentColor"
									/>
								</svg>
							</a>
							{/* <a
								href={data.socialLinks.instagram}
								className="h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer">
								<svg
									width="24"
									height="24"
									className="text-gray-50"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
										fill="currentColor"
									/>
									<path
										d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
										fill="currentColor"
									/>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
										fill="currentColor"
									/>
								</svg>
							</a>
							</div>
						</div> */
});
