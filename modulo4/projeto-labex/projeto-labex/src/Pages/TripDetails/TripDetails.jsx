import { useNavigate } from "react-router-dom";

const TripDetails = ()=>{

    
    const navigate = useNavigate()

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