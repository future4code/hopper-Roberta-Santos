import axios from "axios";
import React from "react";

export default class ConsultarPlaylist extends React.Component{
   
    state ={
        Playlists:[]
    }
    componentDidMount(){
        this.pegarPlaylistExistente()
    }

    pegarPlaylistExistente = () =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", {
            headers: {
                Authorization: "roberta-santos-hopper"
            }
        }).then ((res)=>{
            
            this.setState({Playlists: res.data.result.list})
            console.log(this.state.Playlists)
        }).catch((err)=>{
            console.log(err.response)
        })
    }

    render(){
        return(
            <div>
                <h2>Consultar Playlist</h2>

                {
                    this.state.Playlists.map((playlist)=>{
                        return (
                            <ul>
                                <li>{playlist.name}</li>
                            </ul>
                        )

                    })
                }
            </div>
        )
    }




}