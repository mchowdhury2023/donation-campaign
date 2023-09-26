import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../components/DonationDetails/DonationDetails";



const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element: <Home></Home>,
                loader: ()=> fetch('../../public/donation.json')
            },
            {
                path : "/donations",
                element : <Donation></Donation>,
                loader: ()=> fetch('../../public/donation.json')
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>
            },
            {
                path : "/donation-details/:id",
                element : <DonationDetails></DonationDetails>,
                loader: ()=> fetch('../../public/donation.json')
            },
        ]
        

    }
])

export default myCreatedRoute;