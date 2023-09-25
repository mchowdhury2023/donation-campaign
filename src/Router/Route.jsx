import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";



const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element: <Home></Home>
        //         loader : ()=> fetch('/phones.json')
            },
        //     {
        //         path : "/favorites",
        //         element : <Favorites></Favorites>
        //     },
        //     {
        //         path : "/login",
        //         element : <Login></Login>
        //     },
        //     {
        //         path : "/phones/:id",
        //         element : <Phone></Phone>,
        //         loader:()=>fetch('/phones.json')
        //     }
        ]

    }
])

export default myCreatedRoute;