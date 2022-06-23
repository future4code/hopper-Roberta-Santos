import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPages";

const CreateTrip = ()=>{

    useProtectedPage()

    const navigate = useNavigate()

    const backButton = (value) =>{
        navigate(value);
    };

    const [form, setForm] = useState(
        {nome:"", select:"", data:"", descricao:"", duracao:""})

    const onChange = (event)=>{
        const{name, value} = event.target;
        setForm({...form, [name] :value});
    }
    return(
        <>
       
           <button onClick={() => backButton("/")}>Voltar</button>
            <h1>Criar uma nova viagem</h1>
            <form>
                <input placeholder="Nome"/> 
                <select placeholder="Escolha um planeta">
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
                <input placeholder="dd/mm/yyyy" type="calendar" />      
                <input placeholder="Descrição"  />
                <input type="number" placeholder="Duração em dias"/>    


            </form>
           
            <button>Criar</button>
        </>


    )

}
export default CreateTrip;