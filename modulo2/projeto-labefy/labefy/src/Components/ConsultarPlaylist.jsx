import axios from "axios";
import React from "react";


export default class ConsultarPlaylist extends React.Component{
   
    state ={
        Playlists:[],
        Musicas: {}
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
    deletarPlaylist = (playlistId) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`
        axios.delete(url,{
            headers: {
                Authorization: "roberta-santos-hopper"
            } }).then(()=>{
                alert('Playlist Deletada')
                this.pegarPlaylistExistente()
            }).catch (()=>{
                alert('Algo deu errado!')
            })
    }
    detalharPlaylist = (playlistId) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`

        axios.get(url,{
            headers: {
                Authorization: "roberta-santos-hopper"
            } }).then((res)=>{
                console.log(this.state.Musicas)
                this.setState({ Musicas: res.data.result.tracks})
                

            }).catch (()=>{
                alert('Algo deu errado!')
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
                                <button onClick={()=> this.detalharPlaylist(playlist.id)}>Detalhar</button>
                                <button onClick={()=> this.deletarPlaylist(playlist.id)}>Deletar</button>
                                
                            </ul>
                        )

                    })
                }
                
            </div>
        )
    }




}