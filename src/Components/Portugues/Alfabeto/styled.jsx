import styled from 'styled-components';
import BgInicio from './img/fundo.jpg'

const Estilo=styled.div`
  &{
      
    height:600px;
    width:100%;
 
    background-size:cover;
    margin-top:0;
    position: fixed;
    opacity:1.2;
  }
  
`; export default Estilo;
 
export const H1=styled.h1`
    color:#aabbff;
    text-shadow:4px 4px 12px #fff;
    font-size:30px;
    margin:4px;
    background-color:#aaffdd;
    border-radius:12px;
    border:4px solid #fff;
    padding:4px 60px 4px 60px;
    
`; 

export const Opacidade=styled.div`
    background-color:transparent;
    margin-top:0;
    height:600px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;

`;

export const Div1=styled.div`
  border:24px  solid  #25c9d4;
  height:490px;
  width:90%;
  background-color:#ffffffcc;
  background-color:transparent;
  margin:3% auto 0% auto;
  border-radius:12px;
  overflow:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  padding-top:22px;
  animation: neon ease-in-out .3s infinite alternate;
  @keyframes neon{
      from{
        transform:translate(12deg);
       
      }
      to{
        transform:translate(52deg);
        filter:drop-shadow(-0 0 30px var(--cor));
         
      }
    }

  
  @media screen and (min-width:1000px){
    background-color:#fff;
    width:99%;
    height:500px;
    margin:1% auto 4% auto;
    border:1px inset  #25c9d4;
    border:14px solid #ffffbb;
    
    &::-webkit-scrollbar{
        background-color:#fff;
        border-radius:12px;
    }
    &::-webkit-scrollbar-thumb{
        background-color:#fff;
        border-radius:12px;
        border:1px solid #ddd;
    }
    &::-webkit-scrollbar-thumb:active{
        opacity:0.6;
    }
}
;`
 

export const A=styled.h1`
    color:#ff33ee;
    font-size:30px;
    background-color:#a5d425;
    
`;
 
 