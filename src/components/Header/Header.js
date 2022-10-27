import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<section className="bg-sky-800 dark:text-gray-100 p-10">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-5xl font-serif text-white font-bold leading-none sm:text-6xl">
							Education is the most powerful Weapon
						</h1>
						<p className="mt-6 font-serif mb-8 text-white text-lg sm:mb-12">
							Since, learners’ can’t physically go to schools, colleges,
							universities and other institutions,
							<br className="hidden md:inline lg:hidden" />
							the only way they can learn and enhance their skills is through
							the online courses that many e-learning platforms offer.
						</p>
						<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
							<Link
								rel="noopener noreferrer"
								href="#"
								className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 bg-teal-400 dark:text-gray-900"
							>
								Visit
							</Link>
							<Link
								rel="noopener noreferrer"
								to="/register"
								className="px-8 py-3 bg-purple-500 text-lg font-semibold border rounded dark:border-gray-100"
							>
								Register
							</Link>
						</div>
					</div>
					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<img
							src="https://i.ibb.co/7Sbrdpz/header3.jpg"
							alt=""
							className="object-contain w-full rounded-md h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
						/>
					</div>
				</div>
			</section>

			<section className="py-6 bg-slate-400 dark:bg-gray-800 dark:text-gray-50">
				<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
					<div className="py-6 md:py-0 md:px-6">
						<h1 className="text-4xl font-bold">Get in touch</h1>
						<p className="pt-2 pb-4">
							Fill in the form to contact with us
						</p>
						<div className="space-y-4">
							<p className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5 mr-2 sm:mr-6"
								>
									<path
										fillRule="evenodd"
										d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
										clipRule="evenodd"
									></path>
								</svg>
								<span>Fake address, 9999 City</span>
							</p>
							<p className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5 mr-2 sm:mr-6"
								>
									<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
								</svg>
								<span>123456789</span>
							</p>
							<p className="flex items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-5 h-5 mr-2 sm:mr-6"
								>
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
								</svg>
								<span>contact@business.com</span>
							</p>
						</div>
					</div>
					<form
						novalidate=""
						className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
					>
						<label className="block">
							<span className="mb-1">Full name</span>
							<input
								type="text"
								placeholder="Leroy Jenkins"
								className="block p-2 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
							/>
						</label>
						<label className="block">
							<span className="mb-1">Email address</span>
							<input
								type="email"
								placeholder="Email"
								className="block p-3 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
							/>
						</label>
						<label className="block">
							<span className="mb-1">Message</span>
							<textarea
								rows="3"
								className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"
							></textarea>
						</label>
						<button
							type="button"
							className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400 bg-sky-500 hover:bg-emerald-600 text-white"
						>
							Submit
						</button>
					</form>
				</div>
			</section>

		</div>
	);
};

export default Header;

//https://i.ibb.co/7Sbrdpz/header3.jpg  https://i.ibb.co/TbCWLq6/study6.jpg
