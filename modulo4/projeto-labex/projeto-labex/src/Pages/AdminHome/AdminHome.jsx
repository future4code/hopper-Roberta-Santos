import { useNavigate } from "react-router-dom";

const AdminHome = ()=>{
    const navigate = useNavigate()

    const backButton = (value) =>{
        navigate(value);
    };

   


    return(
        <>
       
           
           <button onClick={() => backButton("/")}>Voltar</button>
           <button>Acessar</button>
           <button>Criar Nova Viagem</button>
           <button>Logout</button>
            <h1>Lista de viagens disponíveis</h1>
        </>


    )

}
export default AdminHome;