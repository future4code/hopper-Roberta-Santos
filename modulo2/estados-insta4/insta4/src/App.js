import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    posts: [
      { 
        nomeUsuario:'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'Roberta',
        fotoUsuario:'https://picsum.photos/50/51',
        fotoPost:'https://picsum.photos/200/151'
      },
      {
        nomeUsuario:'Eder',
        fotoUsuario:'https://picsum.photos/50/52',
        fotoPost:'https://picsum.photos/200/152'
      }
  ],
  valorInputNovoPost: "",
}

  adicionaPost = () => {
  
  const novoPost = this.state.valorInputNovoPost;

  const novaPubli = [...this.state.posts, novoPost]
 
  this.setState({ posts: novaPubli });
  };
  onChangeInputPost = (event) => {
    
    this.setState({ valorInputNovoPost: event.target.value });
  };


  render() {
    const listaDeComponentes = this.state.posts.map((publi)=>{
      return <li>{publi.nomeUsuario}</li>;
    })
    return (
      <><MainContainer>
        <Post>
          <div>{listaDeComponentes}</div>
        </Post>
       
        <input
          value={this.state.valorInputNovoPost}
          
          onChange={this.onChangeInputPost}
          placeholder={"Nome usuário"} />
        <button onClick={this.adicionaPost}>Adicionar</button>
      
        
      </MainContainer></>
    );
  }
}

export default App;
