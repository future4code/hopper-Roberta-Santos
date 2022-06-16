import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ListTrips from "../Pages/ListTrips";
import ApplicationForm from "../Pages/ApplicationForm";
import Login from "../Pages/Login";
import AdminHome from "../Pages/AdminHome";
import TripDetails from "../Pages/TripDetails";
import CreateTrip from "../Pages/CreateTrip";
import ErrorPage from "../Pages/ErrorPage";


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