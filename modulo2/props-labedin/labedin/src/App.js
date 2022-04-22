import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'
import styled from 'styled-components'

const PP = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
` 
const PageContainer = styled.div `
  width: 40vw;
  margin: 10px 0;
  h3 {
  text-align: center;
  margin-bottom: 20px;
}
`
const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
function App() {
  return (
    <PP>
      <PageContainer>
        <Title>Dados pessoais</Title>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQEbojbO1DYvgA/profile-displayphoto-shrink_800_800/0/1602530169989?e=1655942400&v=beta&t=pxU0co8IinwmtmZHwXoj_JG5-jJJqeAxJX5zU9M9ypE" 
          nome="Roberta Santos" 
          descricao="Oi, eu sou a Roberta. Profissional com mais de 10 anos experiência na área administrativa atuando em empresas de médio e grande porte e start-ups nos segmentos de transporte, relacionamento com cliente; atualmente adquirindo experiência visando transição para na área de tecnologia."
        />
        
        <ImagemButton 
          imagem="https://as2.ftcdn.net/v2/jpg/04/88/71/87/1000_F_488718777_8IpvSL1sFcmzXgMPRYxOyZ68fy6rus0Y.jpg" 
          texto="Ver mais"
        />
      </PageContainer>
      <CardPequeno
      imagem = "https://cdn-icons.flaticon.com/png/128/3178/premium/3178158.png?token=exp=1650567724~hmac=f542eac6d5e8a58482c2315440b44f97"
      email = " Email: roberta.devs@hotmail.com"
      imagem2 = "https://cdn-icons-png.flaticon.com/128/1239/1239525.png"
      endereco = "Endereço: Rua Fake, 000"
      />


      <PageContainer>
        <Title>Experiências profissionais</Title>
        <CardGrande 
          imagem="https://www.jobconvo.com/wp-content/uploads/2022/04/LogoQuadradoCom-Fundo.png" 
          nome="JobConvo" 
          descricao="Atuando como Customer Success, responsável por treinamentos, implantações e integrações entre softwares, suporte e condução das jornadas do cliente." 
        />
        
        <CardGrande 
          imagem="https://repelub.com.br/wp-content/uploads/2018/05/logo_repelub_header-1.png" 
          nome="Repelub Combustíveis" 
          descricao="Coordenadora de faturamento e emissões fiscais, com ênfase ao controle e acompanhamento da operação principal de revenda e entrega de combustíveis" 
        />
      </PageContainer>

      <PageContainer>
        <Title>Minhas redes sociais</Title>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
         <ImagemButton 
          imagem="https://cdn.icon-icons.com/icons2/3041/PNG/512/linkedin_logo_icon_189225.png" 
          texto="Linkedin" 
        />        
      </PageContainer>
    </PP>
  );
}

export default App;
