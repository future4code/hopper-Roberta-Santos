import React, {useState} from 'react';
import ListaMatches from "../../ListaMatches/listaMatches";
import Opcoes from "../Opcoes/opcoes";
import iconList from "../../img/iconList.png";
import home from "../../img/home.png";
import { DivContainer, DivCPerfil, DivCMatch, DivPerfilM, TituloMatch, TituloAstro, IconeLista, DivIPerfil, DivIMatch } from './StyleCabecalho';

function Cabecalho() {
const [mudaTela, setMudaTela] = useState(true)

const mudaState = () => {
    setMudaTela(!mudaTela)
}
const trocaTela = () => {
    if (mudaTela){
        return(
        <DivPerfilM>
            <DivCPerfil>
                <div className="Cabecalho">
                    <div>
                       <TituloMatch><TituloAstro>astro</TituloAstro> match </TituloMatch>
                    </div>
                    <DivIMatch>
                        <IconeLista src={iconList} onClick={mudaState} alt="lista"/>
                    </DivIMatch>
                </div>
                <Opcoes/>
            </DivCPerfil>
        </DivPerfilM>
        )
    }else{
        return(
        <DivPerfilM>
            <DivCPerfil>
                <DivCMatch>
                    <div>
                       <TituloMatch><TituloAstro>astro</TituloAstro>match</TituloMatch>
                    </div>
                    <DivIPerfil>
                        <IconeLista src={home}onClick={mudaState}alt="Foto"/>
                    </DivIPerfil>
                </DivCMatch>
                <ListaMatches/>
            </DivCPerfil>
        </DivPerfilM>

        )
    }

}

  
  return(
    <DivContainer>
        {trocaTela()}
        
    </DivContainer>
  )  


}
export default Cabecalho;