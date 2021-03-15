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

export const Menu=styled.div`    
    height:500px;
    width:26%;
    background-size:cover;
    margin-right:10px;
    margin-top:1%;
    border:4px inset  #ffffbb;
    /*background-color:#aaddcc;*/
    
`;
export const ListMenu=styled.ul`    
    height:540px;
    width:100%;
    background-color:#fffddc;
   
    flex-direction:column;
    background-image:url(${BgInicio});
    overflow:auto;
   
   &::-webkit-scrollbar{
        background-color:#ffffffcc;
       
   }
   &::-webkit-scrollbar-thumb{
        border:4px solid #ffbb22;
        background-color:#ffbb22;
        background-image:url(${BgInicio});
        border-radius:12px;
   }
`;  
export const Li=styled.h1`    
    height:100px;
    width:98%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#ffdd33dd;
    border:2px solid #faaffa;
    color:#fff;;
    font-size:20px;
    text-align:center;
    margin:4px;
    border-radius:12px;

`; 
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
    
    margin-top:0;
    height:600px;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;

`;
export const Div1Conteiner=styled.div`
  
  height:550px;
  width:100%;
  
   
  border-radius:4px;
  display:flex;
  justify-content:center;
  align-items:center;
   
  flex-direction:column;
  padding-top:22px;
  
`;

export const Div1=styled.div`
  border:24px  solid  #25c9d4;
  height:490px;
  width:90%;
  background-color:#ffffffcc;
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
    font-size:70px;
    background-color:#a5d425;
    
`;
export const B=styled.h1`
    color:#ffee44;
    font-size:75px;
    background-size:cover;
     
`;
export const C=styled.h1`
    color:#ffaa33;
    font-size:80px;
    background-size:cover;
    
`;
 
export const D=styled.h1`
    color:#ffaaee;
    font-size:80px;
    background-size:cover;
     
`;

export const E=styled.h1`
    color:#ffaaee;
    font-size:80px;
    background-size:cover;
     
`;
export const F=styled.h1`
    color:#ffaaee;
    font-size:80px;
    background-size:cover;
     
`;
export const G=styled.h1`
    color:#ccffaa;
    font-size:80px;
    background-color:#123456;
     
     
`;
export const H =styled.h1`
    color:#bb2211;
    font-size:80px;
    background-color:#ffaa88;
     
     
`;
 
export const I=styled.h1`
    color:#ffaaee;
    font-size:80px;
    background-size:cover;
     
`;
export const J=styled.h1`
    color:#ffaaee;
    font-size:80px;
    background-size:cover;
     
`;
export const L=styled.h1`
    color:#ff33a1;
    font-size:80px;
    background-color:#109866;
     
`;
export const M=styled.h1`
    color:#bbaaff;
    font-size:80px;
    background-color:#543780;
     
`;
export const N=styled.h1`
    color:#ffaaee;
    font-size:80px;
    background-size:cover;
     
`;
export const O=styled.h1`
    color:#ffaaee;
    font-size:80px;
    background-size:cover;
     
`;
export const P=styled.h1`
    color:#ffaaee;
    font-size:80px;
    background-size:cover;
     
`;

export const Q=styled.h1`
    color:#ffaaee;
    font-size:80px;
    background-size:cover;
     
`;

export const R=styled.h1`
    color:#ffaaee;
    font-size:80px;
    background-size:cover;
     
`;
export const S=styled.h1`
    color:#ffaaee;
    font-size:80px;
    background-color:#ffbbcc;
     
`;

export const T=styled.h1`
    color:#ffaa11;
    font-size:80px;
    background-color:#88aaff;
     
`;

export const U=styled.h1`
    color:#ffeeee;
    font-size:80px;
    background-color:#bbaaff;
     
`;
export const V=styled.h1`
    color:#cc33aa;
    font-size:80px;
    background-color:#23aadd; 
`;

export const X=styled.h1`
    color:#cc3344;
    font-size:80px;
    background-color:#aa33ff;
`;
export const Z=styled.h1`
    color:#ccaaff;
    font-size:80px;
    background-color:#654321;
`;

 