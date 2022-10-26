import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourse from '../AllCourse/AllCourse';
import Sidebar from '../SideBar/Sidebar';

const Courses = () => {
    const courseCategory = useLoaderData()
    console.log(courseCategory)
    return (
        <div className='container flex sm:flex-wrap lg:flex-nowrap '>
            <div class=" lg:w-1/3 sm:w-full bg-slate-400">
                <Sidebar></Sidebar>
            </div>
            <div class="lg:w-2/3 sm:w-full bg-red-300 ">
                <h3 className='text-2xl font-mono p-4'>Our All Courses: {courseCategory.length}</h3>
                
                <div className='grid sm:grid-cols-1 ml-6 lg:grid-cols-2 p-3 gap-8 mx-auto'>
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