import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../components/DonationDetails/DonationDetails";
import NotFoundPage from "../Pages/ErrorPage/NotFoundPage";



const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element: <Home></Home>,
                loader: ()=> fetch('/donation.json')
            },
            {
                path : "/donations",
                element : <Donation></Donation>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>,
                loader: ()=> fetch('/donation.json')
            },
            {
                path : "/donation-details/:id",
                element : <DonationDetails></DonationDetails>,
                loader: ()=> fetch('/donation.json')
            },
            {
                path: "*", 
                element: <NotFoundPage></NotFoundPage>
            }
        ]
        

    }
])

export default myCreatedRoute;