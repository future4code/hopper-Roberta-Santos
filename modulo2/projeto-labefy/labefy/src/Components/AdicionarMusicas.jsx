import axios from "axios";
import React from "react";

export default class AdicionarMusicas extends React.Component{

render(){
    return(
        <div>
            <h2> Adicionar Musicas</h2>
            <input placeholder="Nome da Música"/>
            <input placeholder="Cantor/Banda"/>
            <input placeholder="URL da Musica"/>
        </div>
    )
}
}