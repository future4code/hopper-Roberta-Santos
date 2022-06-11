import styled from "styled-components";

export const ImgPerfil = styled.img `
  border: 1px solid black;
  border-radius: 7px;
  height: 55vh;
  margin: 10px auto;
  position: relative;
  width: 25vw;
  box-shadow: 0 0 2px white;
` 
export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  

`
export const Texto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`
export const IdPerfil = styled.div`
  display: flex;
  align-items: center;
  margin-left:3vw;
  width: 25vw;
  position: relative;
  text-shadow: 0 0 10px black;
  /* margin-top: -19vh; */
  color: darkblue;
`
export const DescBio = styled.div`
  display: flex;
  margin-left:3vw;
  width: 24vw;
  position: relative;
  text-shadow: 0 0 10px black;
  /* margin-top: -6vh; */
  color: white;
  font-weight: bold;
`
export const IconesMatch = styled.img `
    width: 4vw;
    height: 8vh;
    cursor: pointer;
    &:hover{
    width: 3.5vw;
    height: 7.5vh; 
    }


`
export const LikeArea = styled.div `
display: grid;
grid-template-columns: 1fr 1fr;
justify-items: center;

`
export const Refresh = styled.div `
margin: auto;
`
