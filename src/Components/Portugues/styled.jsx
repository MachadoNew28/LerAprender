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
  
  animation: neon2 alternate infinite ease-out 1s;
    
    @keyframes neon2{
      from{
      
        background-position:-12px;
        background-image:url(${BgInicio})
        
      }
      to{
        filter:drop-shadow(-0 0 30px var(--cor));
        background-image:url(${BgInicio});
        background-position:12px;
        
      }
    }

`; export default Estilo;

export const LinkAlfabeto=styled.div`
  background-color:#a5d425;
  height:120px;
  width:100%;
  background-size:cover;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:6px;
  box-shadow:2px 4px 5px #456;
  border:4px solid #ffdd33;

`;

export const LinkConsoante=styled.div`
    background-color:#25c9d4;
    height:120px;
    width:100%;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:6px;
    box-shadow:2px 4px 5px #456;
    border:4px solid #ffdd33;

`;
export const LinkVogal=styled.div`
    background-color:#25c9d4;
    height:120px;
    width:100%;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:6px;
    box-shadow:2px 4px 5px #456;
    border:4px solid #ffdd33;
    

`;
export const LinkSilaba=styled.div`
    background-color:#25c9d4;
    height:120px;
    width:100%;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:6px;
    box-shadow:2px 4px 5px #456;
    border:4px solid #ffdd33;
    h1{
        font-size:46px;
    }
    

`;


export const Menu=styled.div`    
    height:600px;
    width:29%;
    background-size:cover;
    margin-right:10px;
    margin-top:10%;
    /*background-color:#aaddcc;*/
    
`;
export const ListMenu=styled.ul`    
    height:540px;
    width:100%;
    
    flex-direction:column;
    
    overflow:auto;
   
   &::-webkit-scrollbar{
        background-color:#dddddd00;
       
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
    width:90%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#25c9d4;
    border:2px solid #faaffa;
    color:#fff;;
    font-size:20px;
    text-align:center;
    margin:12px auto 12px auto ;
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
   
  height:490px;
  width:90%;
  background-color:#ffffffcc;
  margin:3% auto 0% auto;
  border-radius:12px;
  border-top:54px solid  #25c9d4;
  border-bottom:34px inset  #25c9d4;
  overflow:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  padding-top:22px;

  #Letras{
    height:90px;
    width:10%;
    background-size:cover;
    background-color:#ffdd33dd;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:6px;
    box-shadow:2px 4px 5px #456;
    border:4px solid #189; 
    margin:7px;
    transition:.1s ease-out;
    cursor: pointer;
  }
    

  #Letras :active{
    background-color:#ffdd33aa;
    transition:.1s ease-in-out;
     
  }
  #Letras:hover{
    background-color:#ffdd33dd;
    
   
  }

  #Link{
    background-color:#456;
    height:120px;
    width:20%;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    border-radius:6px;
     
  }

  #Link :active{
    box-shadow:0;
    border:0;
  }
  #Link :hover{
      border-color:#998;
      animation: neon3 alternate infinite ease-out .2s;
   
  }
   
  @keyframes neon3{
      from{
      
        background-position:-12px;
        border:6px solid #ffdd00;
        
      }
      to{
        filter:drop-shadow(-0 0 30px var(--cor));
        border:6px solid #432;
        
      }
    }
;`
 

export const A=styled.h1`
    color:#ff33ee;
    text-shadow:2px 3px 4px #005500;
    font-size:70px;
     
    
`;
export const B=styled.h1`
    color:#ffee44;
    text-shadow:2px 3px 4px #005500;
    font-size:75px;
    
     
`;
export const C=styled.h1`
    color:#ffaa33;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-size:cover;
    
`;
 
export const D=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-size:cover;
     
`;

export const E=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-size:cover;
     
`;
export const F=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-size:cover;
     
`;
export const G=styled.h1`
    color:#ccffaa;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-color:#123456;
     
     
`;
export const H =styled.h1`
    color:#bb2211;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-color:#ffaa88;
     
     
`;
 
export const I=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-size:cover;
     
`;
export const J=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-size:cover;
     
`;
export const L=styled.h1`
    color:#ff33a1;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-color:#109866;
     
`;
export const M=styled.h1`
    color:#bbaaff;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-color:#543780;
     
`;
export const N=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-size:cover;
     
`;
export const O=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-size:cover;
     
`;
export const P=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-size:cover;
     
`;

export const Q=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-size:cover;
     
`;

export const R=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-size:cover;
     
`;
export const S=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-color:#ffbbcc;
     
`;

export const T=styled.h1`
    color:#ffaa11;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-color:#88aaff;
     
`;

export const U=styled.h1`
    color:#ffeeee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-color:#bbaaff;
     
`;
export const V=styled.h1`
    color:#cc33aa;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-color:#23aadd; 
`;

export const X=styled.h1`
    color:#cc3344;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-color:#aa33ff;
`;
export const Z=styled.h1`
    color:#ccaaff;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
    background-color:#654321;
     
`;

 