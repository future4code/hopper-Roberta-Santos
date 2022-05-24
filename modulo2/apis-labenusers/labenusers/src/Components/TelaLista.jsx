import React from "react";
import axios from "axios";

export default class TelaLista extends React.Component{

    state = {
        usuarios: []
    }
    componentDidMount(){
        this.pegarUsuarios()
    }

    pegarUsuarios = () =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
        headers: {
            Authorization: "roberta-santos-hopper" 
        }
    }).then((resp) => {
        this.setState({usuarios: resp.data})
        
    }).catch((Erro)=>{
        console.log(Erro.resp.data)
    })

    }

    deletarUsuario = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
        headers: {
            Authorization: "roberta-santos-hopper"
        }
    }).then(()=>{alert('Deletado')
        this.pegarUsuarios()
    }).catch((nao)=>{alert('Não deletado')})
    }


    render(){
        return(
            <div>
                <button onClick={this.props.Tela}>Troca de tela</button>
                <h2>Tela Lista</h2>
                {
                    this.state.usuarios.map((user)=>{
                        return(
                            <ul>
                                <li>{user.name}</li>
                                <button onClick={()=> this.deletarUsuario(user.id)}>Excluir</button>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}