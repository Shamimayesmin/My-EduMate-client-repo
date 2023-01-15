import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCourse from "../AllCourse/AllCourse";
import Sidebar from "../SideBar/Sidebar";

const Courses = () => {
	const courseCategory = useLoaderData();
	// console.log(courseCategory)
	return (
		<>
			<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between sm:w-full bg-base-100">
				<div class="lg:w-1/3 sm:w-full bg-sky-900 text-white rounded-lg">
					<Sidebar></Sidebar>
				</div>
				<div class="lg:w-2/3 justify-center mx-auto rounded-lg">
					<h3 className="text-2xl font-mono p-4">
						Our Popular Courses: {courseCategory.length}
					</h3>

					<div className="grid sm:grid-cols-1 lg:grid-cols-2 justify-center p-3 gap-8 mx-auto">
						{courseCategory.map((item) => (
							<AllCourse key={item._id} item={item}></AllCourse>
						))}
					</div>
				</div>
			</div>

            <div className="p-6 py-12 bg-slate-500 text-white dark:bg-violet-400 dark:text-gray-900">
					<div className="container mx-auto">
						<div className="flex flex-col lg:flex-row items-center justify-between">
							<h2 className="text-center text-6xl tracking-tighter font-bold">
								Up to
								<br className="sm:hidden" />
								70% Off
							</h2>
							<div className="space-x-2 text-center py-2 lg:py-0">
								<span>Plus free Enroll! Use code:</span>
								<span className="font-bold text-lg">SITRANG</span>
							</div>
							<a
								href="/"
								rel="noreferrer noopener"
								className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 hover:bg-cyan-500 dark:text-gray-900 dark:border-gray-400"
							>
								Get Premium
							</a>
						</div>
					</div>
				</div>
		</>
	);
};

export default Courses;
