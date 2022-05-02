import './App.css';
import React from 'react';





export class App extends React.Component {
  state = {
    campo: [{
      msg: '',
      nome: ''

    }
    ],
    valorInputNome: '',
    valorInputMsg: '',
    
  }
  enviarMensagem = () =>{
    const novoObjeto = {
      nome: this.state.valorInputNome,
      msg: this.state.valorInputMsg
    }
    const novoArray = [...this.state.campo, novoObjeto]
    this.setState({campo:novoArray})
  }

  adicionarUsuário= (event) => {
    
      this.setState({valorInputNome: event.target.value})
    }
  adicionarMensagem= (event) => {
    
      this.setState({valorInputMsg: event.target.value})
    }
  

  
  render(){
    const lista = this.state.campo.map((item)=>{
      return (
        <div><p className='nom'>{item.nome}</p><p>{item.msg}</p></div>
      )
    })

  return (
    
    <div className="Container">
          <div className="box">
                <div>{lista}</div>
                <div className="control">
              <input className= 'inpe' value={this.state.nome} onChange= {this.adicionarUsuário}placeholder="Usuário" />
              <input className='inp'value={this.state.msg} onChange = {this.adicionarMensagem} placeholder="Mensagem" />
              <button className = 'botao'onClick={this.enviarMensagem}>Enviar</button>
                </div>
          </div>
        
      </div>
    
  )
  }
}

export default App;
