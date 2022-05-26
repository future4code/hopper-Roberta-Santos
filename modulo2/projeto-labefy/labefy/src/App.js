import React from "react"
import CriarPlaylist from "./Components/CriarPlaylist"
import ConsultarPlaylist from "./Components/ConsultarPlaylist"

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

      </div>
    )
  }
  
}

export default App;
