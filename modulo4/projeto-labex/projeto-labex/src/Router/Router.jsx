import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import ListTrips from "../Pages/ListTrips/ListTrips";
import ApplicationForm from "../Pages/ApplicationForm/ApplicationForm";
import Login from "../Pages/Login/Login";
import AdminHome from "../Pages/AdminHome/AdminHome";
import TripDetails from "../Pages/TripDetails/TripDetails";
import CreateTrip from "../Pages/CreateTrip/CreateTrip";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const Router = ()=>{
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/listtrips" element={<ListTrips/>}/>
                    <Route path="/applicationform" element={<ApplicationForm/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/adminhome" element={<AdminHome/>}/>
                    <Route path="/createtrip" element={<CreateTrip/>}/>
                    <Route path="/tripdetails" element={<TripDetails/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                    
                    
                </Routes>
            </BrowserRouter>
        </>


    )

}
export default Router;