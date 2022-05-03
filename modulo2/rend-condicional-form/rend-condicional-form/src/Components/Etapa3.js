import './App.css';
import App from '../App';
import { render } from '@testing-library/react';

import React from "react";

export default class Etapa3 extends React.Component {
  render() {
    return (
        <>
         <h1>
         ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando
        </h1>
       <div><p>1.Por que você não terminou um curso de graduação? </p>
       <input value=""></input>
       </div>
        <div><p>2.Você fez algum curso complementar?. </p>
        <select>
            <option value="Curso técnico">Curso técnico</option>
            <option value="Cursos de inglês">Cursos de inglês</option>
            <option value="Não fiz curso complementar">Não fiz curso complementar</option>
        </select>
        </div>
        <button onClick={irParaProximaEtapa}> Próxima etapa</button>
       </>
       
    );
  }
}