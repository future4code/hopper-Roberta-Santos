import styled from "styled-components";

export const DivContainer = styled.div`
display: flex;
flex-direction: column;
`
export const DivListaMatch = styled.div `
display: flex;
border-radius: 5px;
padding: 1vw;
margin: 0.4vw;
text-shadow: 0 0 1vw black;
cursor: default;
h3{
    padding-left: 1vw;
}

`
export const DivHMatch = styled.div`
height: 60vh;
`
export const DivRefresh = styled.div`
display: flex;
justify-content: center;
margin-top: 7vh;
`
export const ImgMatch = styled.img`
width: 5vw;
height: 9vh;
border-radius: 100%;

`
export const IconeMPerfil = styled.img`
width: 4vw;
height: 8vh;
cursor: pointer;
&:hover{
    width: 3.5vw;
    height: 7.5vh;
}

`