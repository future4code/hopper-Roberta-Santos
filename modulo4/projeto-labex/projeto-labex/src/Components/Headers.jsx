import { useNavigate } from "react-router-dom"

export default function Headers(){

    const navigate = useNavigate()

    return<Headers>
        
            <button onClick={() => navigate("/listtrips")}>Lista de Viagens</button>
            <button onClick={() => navigate("/login")}>Login</button>
'</Headers>
}