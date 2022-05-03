import { render } from '@testing-library/react';
import './App.css';
import Etapa2 from './Components/Etapa2';

function App() {
  state={
    etapa: 1
  }

  renderizarEtapa = () =>{
   
    switch (this.state.evento) {
      case "1":
      return <App />                
       break;
      case "2":
      return <Etapa2 />                
       break;
      case "3":
      return <Etapa3 />                
        break;
      case "4":
      return <Etapa4 />                
        break;
    
      default:
        <p>Vá para próxima página</p>
        break;
    }
  }
  irParaProximaEtapa = () =>{
    this.setState({etapa: +1})
  }
  render(

  )
  return (
    <div className="App">
      <div><h1>Etapa 1 - Dados Gerais</h1>
        <p>1. Qual é seu nome?</p>
          <input value=""></input>

      </div>
    <div><p>2. Qual sua idade?</p>
          <input value=""></input></div>
    <div><p>3. Qual é seu email?</p>
          <input value=""></input></div>  
    <div>
    <p>1. Qual é sua escolaridade?</p>
          <select>
            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
            <option value="Ensino médio completo">Ensino médio completo</option>
            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
            <option value="Ensino superior completo">Ensino superior completo</option>
          </select>
    </div>
      {this.renderizaEtapa()}
      <button onClick={irParaProximaEtapa}> Próxima etapa</button>
    </div>
  );
}

export default App;
