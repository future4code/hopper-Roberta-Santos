import axios from "axios";
import React from "react";

export default class CriarPlaylist extends React.Component{
    state = {
        nome:""
    }

    pegarNomePlaylist = (event) =>{
        this.setState({nome: event.target.value})
    }
    cadastrarPlaylist = () =>{
        const body = {
            "name": this.state.nome,
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, {
            headers: {
                Authorization: "roberta-santos-hopper"
            }
        }).then (()=>{
            alert('Playlist Cadastrada')
        }).catch((err)=>{
            alert('Algo saiu errado!')
        }).finally(()=>{
            this.setState({nome:""})
        })
    }

    render(){
        return(
            <div>
                <h2>Criar Playlist</h2>

                <input placeholder="Nome da Playlist" onChange={this.pegarNomePlaylist} value={this.state.nome}/>
                <button onClick={this.cadastrarPlaylist}>Criar</button>
            </div>
        )
    }




}