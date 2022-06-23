import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import axios from "axios";
import { useProtectedPage } from "../../hooks/useProtectedPages";


const TripDetails = ()=>{
   
    useProtectedPage()

    useEffect(()=>{
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberta/trip/7QNnQjgC0iTqyIv7MWDm";
        const headers = {
            headers:{
                auth:localStorage.getItem("token")
            }
        }
        axios.get(URL, headers).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err.response);
        })

    },[])
    
    const navigate = useNavigate();

    const backButton = (value) =>{
        navigate(value);
    };

    


    return(
        <>
       
           <button onClick={() => backButton("/")}>Voltar</button>
            <h1>Detalhes da viagem</h1>
            {/* <img></img> */}
            <h2>CAndidatos Pendentes</h2>
            <h2>CAndidatos Aprovados</h2>
        </>


    )

}
export default TripDetails;