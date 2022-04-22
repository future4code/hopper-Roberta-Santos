import React from 'react';
import './CardPequeno.css'
import styled from 'styled-components';

const SmallCard = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 50px;
    width: 400px;

    img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
}
    h4 {
    margin-bottom: 15px;
    padding: 3px;
    
}
    div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}
`

function CardPequeno(props) {
    return (
        <><SmallCard>
            <img src={props.imagem} />
            <div>
                <p>{props.email}</p>
            </div>
        </SmallCard><SmallCard>
                <img src={props.imagem2} />
                <div>
                     <p>{props.endereco}</p>
                </div>
            </SmallCard></>
        
    )
}

export default CardPequeno;