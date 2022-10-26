import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const [courses, setCourse] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/category")
			.then((res) => res.json())
			.then((data) => setCourse(data));
	}, []);

	return (
		<div className='mt-10 font-mono'>
		    <h2 className='text-3xl'>Course Name : {courses.length}</h2>
		   <div className='border p-10'>
		        {
		            courses.map(course =>
		            <p key={course.id}>
		                <Link className='hover:bg-orange-200 rounded-md p-1 my-4' to={`/courses/${course.id}`}>{course.name}</Link>
		            </p>)
		        }
		   </div>
		</div>

		// <aside className="w-full sm:warp p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
		// 	<nav className="space-y-8 text-sm">
		// 		<div className="space-y-2">
		// 			<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
		// 				Getting Started
		// 			</h2>
		// 			<div className="flex flex-col space-y-1">
		// 				<a rel="noopener noreferrer" href="#">
		// 					Installation
		// 				</a>
						
		// 			</div>
		// 		</div>
				
				
		// 	</nav>
		// </aside>
	);
};

export default Sidebar;
