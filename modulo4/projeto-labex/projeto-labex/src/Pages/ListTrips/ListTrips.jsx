import { useNavigate } from "react-router-dom";

const ListTrips = ()=>{

    const navigate = useNavigate()

    const backButton = (value) =>{
        navigate(value);
    };

    const application = (value) =>{
        navigate(value);
    };


    return(
        <>
       
           <button onClick={() => backButton("/")}>Voltar</button>
           <button onClick={() => application("/ApplicationForm")}>Inscreva-se</button>
        
        <h1>Lista de Viagens</h1>
           
        </>)

}
export default ListTrips;