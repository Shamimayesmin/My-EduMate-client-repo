import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [courses, setCourse] = useState([])

    useEffect(() =>{
        fetch("http://localhost:5000/category")
			.then((res) => res.json())
			.then((data) => setCourse(data));
    },[])

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
    );
};

export default Sidebar;