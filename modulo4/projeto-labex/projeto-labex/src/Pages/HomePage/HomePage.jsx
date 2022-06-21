import { useNavigate } from "react-router-dom";



const HomePage = ()=>{

    const navigate = useNavigate()

    const changeAdmin = (value) =>{
        navigate(value);
    };

    const listTrips = (value) =>{
        navigate(value);
    };


    return(
        <>
       
           <button onClick={() => listTrips("/listtrips")}>Viagens Disponíveis</button>
           <button onClick={() => changeAdmin("/login")}>Acesso área admin</button>
        
        <h1>HomePage</h1>
           
        </>
    )

}
export default HomePage;