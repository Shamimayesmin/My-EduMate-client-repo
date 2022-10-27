import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const [courses, setCourse] = useState([]);

	useEffect(() => {
		fetch("https://assignment-10-server-smoky.vercel.app/category")
			.then((res) => res.json())
			.then((data) => setCourse(data));
	}, []);

	return (
		<div className='mt-10 font-mono'>
		    <h2 className='text-3xl p-4'>Course Name : {courses.length}</h2>
		   <div className='border p-10'>
		        {
		            courses.map(course =>
		            <p key={course.id}>
		                <Link className='hover:bg-orange-200 rounded-md text-2xl my-4' to={`/courses/${course.id}`}>{course.name}</Link>
		            </p>)
		        }
		   </div>
		</div>
	);
};

export default Sidebar;
