import React from "react";
import axios from "axios";

export default class TelaCadastro extends React.Component{

    state = {
        nome: "",
        email: ""
    }
    valorDoNomeInput = (event) =>{
        this.setState({nome: event.target.value})
    }
    valorDoEmailInput = (event) =>{
        this.setState({email: event.target.value})
    }
    cadastrarUsuario = () =>{
        const body = {
            "name": this.state.nome,
            "email": this.state.email
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,{
            headers: {
                Authorization: "roberta-santos-hopper"
            }
        }).then(()=>{
            alert("Usuário cadastrado com sucesso!")
        }).catch((err)=>{
            alert ("Não Cadastrado!")
        }).finally(()=>{
            this.setState({nome: "", email: ""})
        })
    }
    render(){
       
        return(
            <div>
                <button onClick={this.props.Tela}>Trocar de tela</button>
                <h2>Tela Cadastro</h2>
                
                <input placeholder="nome" value={this.state.nome} onChange={this.valorDoNomeInput} />
                <input placeholder="email" value={this.state.email} onChange={this.valorDoEmailInput}/>
                <button onClick={this.cadastrarUsuario}>Cadastrar</button>
            </div>
        )
    }
}