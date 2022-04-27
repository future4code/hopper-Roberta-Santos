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
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
        nomeUsuario={'Roberta'}
        fotoUsuario={'https://picsum.photos/id/1011/367/267'}
        fotoPost={'https://picsum.photos/seed/picsum/536/354'}
        />
        <Post
        nomeUsuario={'Eder'}
        fotoUsuario={'https://picsum.photos/id/1005/367/267'}
        fotoPost={'https://picsum.photos/id/645/400/250'}
        />
      </MainContainer>
    );
  }
}

export default App;
