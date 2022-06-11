import axios from "axios"
import React, {useState, useEffect} from 'react';
import { DivContainer, DivHMatch, DivListaMatch, DivRefresh, IconeMPerfil, ImgMatch } from "./StyleList";

function ListaMatches() {
const [lista, setLista] = useState([])    

const getMatches = () =>{
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/roberta/matches")
    .then((response) => {
        setLista([response.data.matches]);
        
      }).catch((err)=>{
        alert(`Erro ${err}`)
      });
}
const mostraLista = lista.map((match)=>{
    return(
      <DivListaMatch key={match.id}>
        <ImgMatch  src={match.photo} alt="Foto"/>
        <h3>{match.name}</h3>       
      </DivListaMatch>
    )
  })


  const limpaLista = () =>{
    axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/roberta/clear")

    .then(() => {
        alert('Dados removidos');
            
        }).catch(()=>{
            alert(`Erro`)
        });
  }

  const refreshLista = ()=>{
    limpaLista()
  }
    
   useEffect(()=>{
        getMatches()
   },[]) 
    
    return(
        <DivContainer>
            <DivHMatch>{mostraLista}</DivHMatch>
            <DivRefresh><IconeMPerfil onClick={refreshLista} alt=""></IconeMPerfil></DivRefresh>

            
        </DivContainer>
    )   


}
export default ListaMatches;