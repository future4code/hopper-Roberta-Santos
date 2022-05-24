import React from "react"
import TelaCadastro from "./Components/TelaCadastro"
import TelaLista from "./Components/TelaLista"

class App extends React.Component{

  state = {
    telaAtual: "cadastro"
  }

  trocarTela = () => {
    this.setState({telaAtual: this.state.telaAtual === "cadastro"
    ? "lista"
    : "cadastro"})
  }

  render(){
    return(
      <div>
        {/* //comparar qual valor atual do state para exibir tela */}
        {
          this.state.telaAtual === "cadastro" 
          ? <TelaCadastro  Tela= {this.trocarTela}/> 
          : <TelaLista Tela= {this.trocarTela}/>
        }


      </div>
    )
  }
  
}

export default App;




// function App() {
//   return (
//     <div>
//       <Apis></Apis>
//     </div>
//   );
// }

// export default App;
