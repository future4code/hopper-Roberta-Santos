import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    };
    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    };
    const backButton = (value) =>{
        navigate(value);
    };
    const submitLogin = () =>{
        const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/roberta/login";
    
    const body = {
        email: email,
        password: password
    };
    axios.post(URL, body)
    .then((res)=>{
        localStorage.setItem("token", res.data.token);
        navigate("/adminhome");
    })
    .catch((err)=>{
        console.log(err.response.data)
    });
    };
   


    return(
        <>
       
           
           <button onClick={() => backButton("/")}>Voltar</button>
           <input type="email" placeholder="Email" value={email} onChange={onChangeEmail} />
           <input type="password" placeholder="Senha"value={password} onChange={onChangePassword}/>
           <button onClick={submitLogin}>Acessar</button>
        
        <h1>Login Área restrita</h1>
        </>)

}
export default Login;