import { useNavigate } from "react-router-dom";

const Login = ()=>{
    const navigate = useNavigate()

    const backButton = (value) =>{
        navigate(value);
    };

   


    return(
        <>
       
           
           <button onClick={() => backButton("/")}>Voltar</button>
           <button>Acessar</button>
        
        <h1>Login Área restrita</h1>
        </>)

}
export default Login;