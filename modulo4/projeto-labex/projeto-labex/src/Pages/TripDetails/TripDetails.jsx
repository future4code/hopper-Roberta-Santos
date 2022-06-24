import { useNavigate, useParams } from "react-router-dom";
// import React, { useEffect } from "react";
import axios from "axios";
import { useProtectedPage } from "../../hooks/useProtectedPages";
import { useEffect, useState } from "react";


const TripDetails = ()=>{
   
    useProtectedPage();

    const navigate = useNavigate();

    const backButton = (value) =>{
        navigate(value);
    };

    const params = useParams();

    const [trips, setTrips] = useState([])

       

    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberta/trip/${params}`
        const headers = {
            headers:{
                auth:localStorage.getItem("token")
            }
        }
        axios.get(URL, headers).then((res)=>{
            setTrips([res.data.trip])
        }).catch((err)=>{
            console.log(err.response);
        })

   
    
    
    
    console.log(trips)
    const tripsItems = trips.map((trip)=>{
        return(<div>

            <p>{trips.id}</p>
        </div>)
         

    })


    return(
        <>
       
           <button onClick={() => backButton("/adminhome")}>Voltar</button>
            <h1>Detalhes da viagem</h1>
            {/* <img></img> */}
            {tripsItems}
        </>


    )

}
export default TripDetails;