import { useNavigate } from "react-router-dom";

const ApplicationForm = ()=>{

    
    const navigate = useNavigate()

    const backButton = (value) =>{
        navigate(value);
    };

 


    return(
        <>
       
           <button onClick={() => backButton("/")}>Voltar</button>
           <button>Inscreva-se</button>
        
        <h1>Inscreva-se para uma viagem</h1>
           
        </>)

 

}
export default ApplicationForm;