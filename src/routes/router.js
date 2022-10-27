import { createBrowserRouter } from "react-router-dom";
import AllCourse from "../components/AllCourse/AllCourse";
import Blog from "../components/Blog/Blog";
import CheckOut from "../components/CheckOut/CheckOut";
import CourseDetails from "../components/CourseDetails/CourseDetails";
// import Category from "../components/Category/Category";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Header from "../components/Header/Header";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Sidebar from "../components/SideBar/Sidebar";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path : "/",
        element :<Main></Main>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Header></Header>
            },
            {
                path : '/home',
                element : <Header></Header>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            {
                path : '/faq',
                element : <Faq></Faq>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/login',
                element : <Login></Login>
            },
             {
                path: '/checkout',
                 element : <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
                
             },
            {
                path: '/course',
                element : <Courses></Courses>,
                loader : () =>fetch('https://assignment-10-server-smoky.vercel.app/course')
            },
            {   path : '/category',
                element : <Sidebar></Sidebar>,
                loader : () =>fetch('https://assignment-10-server-smoky.vercel.app/category')

            },
            {
                path : '/category/:id',
                element :<Sidebar></Sidebar> ,
                loader : ({params}) =>fetch(`https://assignment-10-server-smoky.vercel.app/category/${params.id}`)
            },
            
            {
                path : '/course/:id',
                element :<AllCourse></AllCourse> ,
                loader : ({params}) =>fetch(`https://assignment-10-server-smoky.vercel.app/course/${params.id}`)
            },
            {
                path : '/courses/:id',
                element :<CourseDetails></CourseDetails> ,
                loader : ({params}) =>fetch(`https://assignment-10-server-smoky.vercel.app/course/${params.id}`)
            }
        ]
    }
])