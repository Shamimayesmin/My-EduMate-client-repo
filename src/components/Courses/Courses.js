import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourse from '../AllCourse/AllCourse';
import Sidebar from '../SideBar/Sidebar';

const Courses = () => {
    const courseCategory = useLoaderData()
    // console.log(courseCategory)
    return (
        <div className='container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between'>
            <div class="lg:w-1/3 sm:w-full bg-slate-400 rounded-lg">
                <Sidebar></Sidebar>
            </div>
            <div class="lg:w-2/3 justify-center mx-auto bg-sky-900 rounded-lg">
                <h3 className='text-2xl font-mono p-4 text-white'>Our All Courses: {courseCategory.length}</h3>
                
                <div className='grid sm:grid-cols-1 lg:grid-cols-2 justify-center p-3 gap-8 mx-auto'>
                    {
                        courseCategory.map(item =><AllCourse key={item._id} item={item}>

                        </AllCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;