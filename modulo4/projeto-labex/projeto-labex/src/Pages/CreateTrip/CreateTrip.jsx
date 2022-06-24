// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPages";
import useForm from "../../hooks/useForm"
import axios from "axios";
const CreateTrip = ()=>{

    useProtectedPage()

    const navigate = useNavigate()

    const backButton = (value) =>{
        navigate(value);
    };

    const {form, onChange} = useForm ({
        name:"",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",

    })

    const cadastrar = (event) =>{
        const URL="https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberta/trips"
        const body = form

        axios.post(URL, body, {
            headers: {
               auth: localStorage.getItem("token")
            }} )
        .then(()=>{
            alert("Viagem cadastrada com sucesso!")
        }).catch(()=>{
            alert("Algo deu errado!")
        })           
            

        event.preventDefault()
        console.log(body);
        // cleanField();
    }
   
    return(
        <>
       
           <button onClick={() => backButton("/")}>Voltar</button>
            <h1>Criar uma nova viagem</h1>
            <form onSubmit={cadastrar}>
                <input 
                name={"name"}
                value={form.name}
                onChange={onChange}
                placeholder="Nome"
                required
                pattern={"^.{6,}"}
                title={" O nome deve ter no mínino 6 letras"}
                /> 
                <select 
                name={"planet"}
                value={form.planet}
                onChange={onChange}
                required>
                    <option>Escolha um planeta</option>
                    <option>Mércurio</option>
                    <option>Vênus</option>
                    <option>Terra</option>
                    <option>Marte</option>
                    <option>Jupiter</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Neturno</option>
                    <option>Plutão</option>
                </select> 
                <input
                 name={"date"}
                 value={form.date}
                 onChange={onChange}
                 placeholder="dd/mm/yyyy"
                 type="calendar"
                 required />

                <input 
                name={"description"}
                value={form.description}
                onChange={onChange}
                placeholder="Descrição"
                required  />

                <input 
                name={"durationInDays"}
                value={form.durationInDays}
                onChange={onChange}
                type="number" 
                placeholder="Duração em dias"
                required/>    

                <button>Criar</button>
            </form>
           
            
        </>

        
    )

}
export default CreateTrip;