import React, {useEffect, useState} from "react";
import axios from "axios";
import { DivContainer, ImgPerfil, Texto, IdPerfil, DescBio, IconesMatch, LikeArea, Refresh } from "./Style";
import coracao from "../../img/coracao.png"
import iconX from "../../img/iconX.png"
import dust from "../../img/dust.png"




function Opcoes(){
   
    const [perfil, setPerfil] = useState([])
    const [temMatch, setTemMatch] = useState(false)
    const [atualiza, setAtualiza] = useState(false)
  
   const mostraPerfil = () => {
      axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/roberta/person").then((response) => {
        setPerfil([response.data.profile]);
        
      }).catch((err)=>{
        alert(`Erro ${err}`)
      });
    }
    
    const mostraPessoa = perfil.map((pessoa, id)=>{
      return(
        <div>
            <Texto>
                <ImgPerfil key={id.id} src={pessoa.photo} alt="Foto"/>
            </Texto>
            <IdPerfil>
                <h3>{pessoa.name}</h3>
                <h3>{pessoa.age}</h3>
               
            </IdPerfil>
            <DescBio>
                 <p>{pessoa.bio}</p>
            </DescBio>         
        
        </div>
      )
    })
  
   const mudaTemMatch = () => {
      const body = {
        id: perfil.id,
        choice: temMatch
      }
      axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/roberta/choose-person", body).then((response) => {
        console.log(response.data);
        
      })};
    
    const deuMatch = () =>{
        setTemMatch(true)
        setAtualiza(!atualiza)
        mudaTemMatch()
    
      }
    
    const semMatch = () =>{
      setTemMatch(false)
      setAtualiza(!atualiza)
      mudaTemMatch()
    }
    useEffect(()=>{
      mostraPerfil()
    },[atualiza])
  
    
  
    const limpaLista = () =>{
        axios.put ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/roberta/clear")
    
        .then(() => {
            alert('Dados removidos');
                
            }).catch(()=>{
                alert(`Erro`)
            });
      }
  
    return(
      <DivContainer>
        <div>          
             {mostraPessoa} 
        </div>
        <LikeArea>
            <IconesMatch src={iconX} onClick={semMatch} alt = "coração partido"/>
            <IconesMatch src={coracao} onClick={deuMatch} alt="coração"/>
        </LikeArea>
        <Refresh>
         <IconesMatch src={dust} onClick={limpaLista} alt="vassoura"/>           
        </Refresh>
      </DivContainer>
    );








}
export default Opcoes;