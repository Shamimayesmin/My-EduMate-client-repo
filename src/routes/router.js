import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../layout/Main";

export const routes = createBrowserRouter([
    {
        path : "/",
        element :<Main></Main>,
        children : [
            {
                path : '/',
                element : <Header></Header>
            },
            {
                path : '/home',
                element : <Header></Header>
            }
        ]
    }
])