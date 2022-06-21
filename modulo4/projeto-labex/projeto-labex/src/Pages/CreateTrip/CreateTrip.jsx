import { useNavigate } from "react-router-dom";

const CreateTrip = ()=>{

    const navigate = useNavigate()

    const backButton = (value) =>{
        navigate(value);
    };

    


    return(
        <>
       
           <button onClick={() => backButton("/")}>Voltar</button>
            <h1>Criar uma nova viagem</h1>
            <input>Nome</input>
            <select>Escolha um planeta</select>
            <input>Data    </input>
            <input> Descrição</input>
            <input>Duração</input>
            <button>Criar</button>
        </>


    )

}
export default CreateTrip;