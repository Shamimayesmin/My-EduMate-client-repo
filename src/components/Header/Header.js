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
							Dictum aliquam porta in condimentum ac integer
							<br className="hidden md:inline lg:hidden" />
							turpis pulvinar, est scelerisque ligula sem
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

			<section className="py-6 mt-10 rounded-2xl bg-gray-200 dark:bg-gray-800 dark:text-gray-50">
				<div className="container mx-auto flex flex-col justify-center p-6 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
					<div className="flex flex-col space-y-4 text-center lg:text-left">
						<h1 className="text-5xl font-bold leading-none">
							Get In Touch
						</h1>
						<p className="text-lg">
							Find out about our new courses & Free Resourch
						</p>
					</div>
					<div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
						<div className="flex flex-row">
							<input
								type="text"
								placeholder="example@email.com"
								className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
							/>
							<button
								type="button"
								className="w-2/5 p-3 bg-red-100 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
							>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Header;

//https://i.ibb.co/7Sbrdpz/header3.jpg  https://i.ibb.co/TbCWLq6/study6.jpg
