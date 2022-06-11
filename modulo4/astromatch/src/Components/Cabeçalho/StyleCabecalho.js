import styled from "styled-components";

export const DivContainer = styled.div`
    background-color: #D1DEC6;
    width: 100%;
    height: 100%;
    padding: 20px;

`
export const DivCPerfil = styled.div`
display: grid;
grid-template-columns: 30vw 5vw;
justify-items: center;
border-bottom: 1px solid #D1DEC6;
`
export const DivCMatch = styled.div`
display: grid;
grid-template-columns: 5vw 20vw;
justify-items: center;
border-bottom: 1px solid #D1DEC6;
`
export const DivPerfilM = styled.div `
border: 1px solid black;
border-radius: 1px;
background-color: white;
width: 30vw;
height: 90vh;
margin: 0 auto;
`
export const TituloMatch = styled.h1`
color: blueviolet;
cursor: default;

`
export const TituloAstro = styled.span`
color: orange;

`
export const IconeLista = styled.img `
width: 3vw;
height: 6vh;
cursor: pointer;
&hover{
    width: 2.5vw;
    height: 5.5vh;
}
`
export const DivIMatch = styled.div `
display: flex;
align-items: center;
margin-right: 10vw;
`
export const DivIPerfil = styled.div `
display: flex;
align-items: center;
`
