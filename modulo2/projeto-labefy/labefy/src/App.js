import React from "react"
import CriarPlaylist from "./Components/CriarPlaylist"
import ConsultarPlaylist from "./Components/ConsultarPlaylist"
import AdicionarMusicas from "./Components/AdicionarMusicas"

class App extends React.Component{

  state = {
    
  }



  render(){
    return(
      <div>
        <CriarPlaylist/>
        <div>
        <ConsultarPlaylist/>
        </div>
        <div>
          <AdicionarMusicas/>
        </div>

      </div>
    )
  }
  
}

export default App;
