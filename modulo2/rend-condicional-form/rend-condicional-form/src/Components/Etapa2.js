import './App.css';
import App from '../App';
import { render } from '@testing-library/react';

import React from "react";

export default class Etapa2 extends React.Component {
  render() {
    return (
        <>
        <h1>
        ETAPA 2: Informações educacionais para quem está cursando (ou já terminou) o ensino superior
        </h1>
       <div><p>5. Qual curso?</p>
       <input value=""></input>
       </div>
        <div><p>6. Qual a unidade de ensino?</p>
        <input value=""></input>
        </div>
        <button onClick={irParaProximaEtapa}> Próxima etapa</button>
       </>
       
    );
  }
}
  