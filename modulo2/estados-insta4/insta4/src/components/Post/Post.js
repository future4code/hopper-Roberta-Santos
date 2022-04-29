import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    // if valida se curtido é true e troca cor do coração
    numeroCurtidas: 0,
    // inicializador de valorContador
    comentando: false,
    // ao clicar para enviar comentario a função onclick é ativada alterando o comentando para true
    numeroComentarios: 0
    //contador de número de comentarios é incrementado toda vez que o status muda para true, retorna o estado para false e acrescenta +1 no total
  }

  onClickCurtida = () => {
    if(this.state.curtido === false){
      this.setState({
        curtido: true,
        numeroCurtidas:this.state.numeroCurtidas + 1,

      })
    }
    else{
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas-1
      })
    }
    
  }
  //onclick aparece apenas no console e não no contador 

    
 
  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }
 //ao clicar no botão enviar a props chama a função aoEnviarComentário que retorna o estado para false e incrementa valor
  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador 
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        {/* IconeComContador componente exportado do iconecomContador.js, e os valores são props passadas como argunto da função , e os valores são enviados para a variavel iconecurtida criada no render, a funçao onclick curtida e o estado numero de curtidas*/}

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post