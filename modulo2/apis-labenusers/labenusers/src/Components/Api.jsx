import React from "react";
import axios from "axios";

class Apis extends React.Component{

state = {
    usuario: [],
    inputUsuario: '',
    inputEmail: ''
};

componentDidMount = () => {
    this.takeuser()
}

criarUsuario = () =>{
    const body = {
        name: this.state.inputUsuario,
        email: this.state.inputEmail
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,{
        headers: {
            Authorization: "roberta-santos-hopper"
        }
    }).then(()=>{
        this.takeuser()
        alert("Criado com sucesso!")
        this.setState({inputEmail:''})
        this.setState({inputUsuario:''})
    }).catch((nao)=>{
        alert ("Não criado!")
    })
}

takeuser=()=>{
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
        headers: {
            Authorization: "roberta-santos-hopper" 
        }
    }).then((answer) => {
        console.log(answer.data)
        this.setState({usuario: answer.data})
    }).catch((Erro)=>{
        console.log(Erro.answer.data)
    })

}

onChangeInput = (event)=>{
    this.setState({inputUsuario: event.target.value})
}

onChangeInputEmail = (event) =>{
    this.setState({inputEmail: event.target.value})
}
deletarUsuario = () =>{
    axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id", {
        headers: {
            Authorization: "roberta-santos-hopper"
        }
    }).then(()=>{alert('Deletado')
    }).catch((nao)=>{alert('Não deletado')})
}


render(){
    const list = this.state.usuario.map((cadaUsuario)=>{
        return <h4>{cadaUsuario.name}</h4>
    })


    return(
        <div>
            <input onChange={this.onChangeInput} placeholder="Nome" type="text" value={this.state.inputUsuario}/>
            <input onChange={this.onChangeInputEmail} placeholder="Email" type="email" value={this.state.inputEmail}/>
            <button onClick={this.criarUsuario}>Criar Usuário</button>

            <div> 
                {list} <button onClick={this.deletarUsuario}>X</button>
            </div>
            <div>
                <button onClick={this.TrocarTela}>Trocar de Tela</button>
            </div>
        </div>
    )
}





}


export default Apis;






