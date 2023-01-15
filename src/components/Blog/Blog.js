import React from "react";

const Blog = () => {
	return (
		<div>
			<section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
				<div className="container p-6 mx-auto space-y-8">
					<div className="space-y-2 text-center">
						<h2 className="text-3xl font-bold">Our Upcomming courses</h2>
						
					</div>
					<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
						<article className="flex flex-col rounded-lg bg-slate-200 dark:bg-gray-900">
							<a
								rel="noopener noreferrer"
								href="/"
								aria-label="Te nulla oportere reprimique his dolorum"
							>
								<img
									alt=""
									className="object-cover w-full h-52 dark:bg-gray-500"
									src="https://i.ibb.co/FJ2DYP1/study2.jpg"
								/>
							</a>
							<div className="flex flex-col flex-1 p-6">
								
								<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
									Our English language program
								</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>June 1, 2020</span>
									<span>2.1K views</span>
								</div>
							</div>
						</article>
						<article className="flex flex-col rounded-lg bg-slate-100 dark:bg-gray-900">
							<a
								rel="noopener noreferrer"
								href="/"
								aria-label="Te nulla oportere reprimique his dolorum"
							>
								<img
									alt=""
									className="object-cover w-full h-52 dark:bg-gray-500"
									src="https://i.ibb.co/vY0m1p6/study4.jpg"
								/>
							</a>
							<div className="flex flex-col flex-1 p-6">
								
								<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
								Latest	Micro Eonomics Program Basic Workshop for Reserch	
								</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>June 2, 2020</span>
									<span>2.2K views</span>
								</div>
							</div>
						</article>
						<article className="flex flex-col rounded-lg bg-slate-200 dark:bg-gray-900">
							<a
								rel="noopener noreferrer"
								href="/"
								aria-label="Te nulla oportere reprimique his dolorum"
							>
								<img
									alt=""
									className="object-cover w-full h-52 dark:bg-gray-500"
									src="https://i.ibb.co/YPD2Gcp/study6.jpg"
								/>
							</a>
							<div className="flex flex-col flex-1 p-6">
								
								<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
								Resourse For JAVA developer and UX design
								</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>June 3, 2020</span>
									<span>2.3K views</span>
								</div>
							</div>
						</article>
						<article className="flex flex-col rounded-lg bg-slate-200 dark:bg-gray-900">
							<a
								rel="noopener noreferrer"
								href="/"
								aria-label="Te nulla oportere reprimique his dolorum"
							>
								<img
									alt=""
									className="object-cover w-full h-52 dark:bg-gray-500"
									src="https://i.ibb.co/HXWZy9C/study7.jpg"
								/>
							</a>
							<div className="flex flex-col flex-1 p-6">
								
								<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
									New JavaScript Bacis Tutorial Resourch
								</h3>
								<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
									<span>June 4, 2020</span>
									<span>2.4K views</span>
								</div>
							</div>
						</article>
					</div>
				</div>
			</section>

			<div>
				<section className="container p-6 bg-base-100 rounded-lg dark:bg-gray-800 dark:text-gray-100 shadow-2xl">
					<div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
						<div className="flex flex-col justify-start m-2 lg:m-6">
							<p className="text-4xl font-bold leading-none lg:text-6xl">50+</p>
							<p className="text-sm sm:text-base">Courses</p>
						</div>
						<div className="flex flex-col justify-start m-2 lg:m-6">
							<p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
							<p className="text-sm sm:text-base">Students on social media</p>
						</div>
						<div className="flex flex-col justify-start m-2 lg:m-6">
							<p className="text-4xl font-bold leading-none lg:text-6xl">3</p>
							<p className="text-sm sm:text-base">Published books</p>
						</div>
						<div className="flex flex-col justify-start m-2 lg:m-6">
							<p className="text-4xl font-bold leading-none lg:text-6xl">8</p>
							<p className="text-sm sm:text-base">TED talks</p>
						</div>
						<div className="flex flex-col justify-start m-2 lg:m-6">
							<p className="text-4xl font-bold leading-none lg:text-6xl">22</p>
							<p className="text-sm sm:text-base">Years of experience</p>
						</div>
						<div className="flex flex-col justify-start m-2 lg:m-6">
							<p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
							<p className="text-sm sm:text-base">Seminer</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Blog;
