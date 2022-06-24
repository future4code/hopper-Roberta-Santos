import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPages";
import { useState } from "react";
import { useEffect } from "react";

const AdminHome = ()=>{

    useProtectedPage();

    const navigate = useNavigate()

    const backButton = (value) =>{
        navigate(value);
    };
    const newTrip = (value) => {
        navigate(value);
    }
    const detailing = (value) => {
        navigate(value)

    }


    const[trips, setTrips] = useState([]);

    useEffect(()=>{
        

        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberta/trips"
        axios.get(URL)
        .then((res)=>{
            setTrips(res.data.trips);
        })
        // .catch((err)=>{
        //     // console.log(err)
        // });
    },[trips])
    
    
    // colocar lista no map 
   
    const listaViagens = trips.map((trip)=>{
        return <div>
            <button key={trip.id} onClick={() => detailing(`/tripdetails/${trip.id}`)}>{trip.name}</button>
            <button key={trip.name} onClick={() => deletarViagem(trip.id)}>Deletar</button>
        </div>
    })
    //deletar viagem
    const deletarViagem = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberta/trips/${id}`
        
        axios.delete(url, {
         headers: {
            auth:localStorage.getItem("token")
         }   
        }).then (()=>{
            alert("Viagem apagada!")

           
        }).catch ((err)=>{
            console.log(err)
        })
    }
    

   
    return(
        <>
       
           
           <button onClick={() => backButton("/login")}>Voltar</button>
           <button onClick={() => newTrip("/createtrip")}>Criar Nova Viagem</button>
           <button onClick={() => backButton("/")}>Logout</button>

            <h1>Lista de viagens disponíveis</h1>
            {listaViagens}
        </>


    )

}
export default AdminHome;