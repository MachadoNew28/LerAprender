import styled from 'styled-components';
import BgInicio from './img/bginicio.jpg'

export const Lista=styled.ul`   
`;
export const List=styled.ul`
      background-color:#446;
      width:100px;
      height:100px; 
`;
 
const Estilo=styled.div`
  &{
      
    height:600px;
    width:100%;
    background-image:url(${BgInicio});
    background-size:cover;
    margin-top:14%;
    position: fixed;
    opacity:1.2;
  }
    


`; export default Estilo;

export const Opacidade=styled.div`
    background-color:#ffff0088;
    margin-top:10%;
    height:auto;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-size:cover;
    animation: neon12   infinite ease-out 240s;
    

    @keyframes neon12{
      from{
      
        background-position:-1222px;
        background-image:url(${BgInicio});
        
      }
           35%{
           
              color:#ffaa00;
            }
            45%{
              
              color:#ff0aa0;
            }
      to{
        filter:drop-shadow(-0 0 30px var(--cor));
        background-image:url(${BgInicio});
        background-position:1222px;
        
      }
    }
    
  
`;
 
export const Div1=styled.div`
  height:580px;
  width:100%;
  margin:2% auto 1% auto;
  border-radius:4px;
  overflow:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  padding:22px;
@media screen and (max-width:600px){
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
}
  #Link{
    width:30%;
    margin:12px;
    @media screen and (max-width:600px){
      width:41%;
      font-size:17px;
      color:#ff9900;
      text-shadow:2px 4px 3px   #123;
      font-weight:bold;
    }
  }

  #lis1{
      background-color:#155430;
      width:100%;
      #icons{
        color:#6657ff;
        animation-iteration-count:4;
        animation: Rotate alternate-reverse  infinite ease-out 1s;
          @keyframes  Rotate{
            from{
               font-size:120px;
               transform:rotateY(40deg);
                
            }
            24%{
              transform:rotate(-1110deg);
              transform:rotateY(50deg);
              color:#ffaa00;
            }
            36%{
              transform:rotateX(-50deg);
              color:#ff55bb;
            }
            to{
              transform:rotateX(40deg);
              font-size:100px;
               
            }
        }
      }
    }
    #lis2{
      background-color:#334aad;
      #icons{
          color:#6657ff;
          animation-iteration-count:4;
          animation: Translate alternate  infinite ease 1s;
          @keyframes  Translate{
            from{
               font-size:120px;
               transform:rotateX(240deg);
                
            }
            24%{
              transform:rotate(-1110deg);
              transform:rotateY(50deg);
              color:#ffaa00;
            }
            36%{
              transform:rotateX(-50deg);
              color:#ff55bb;
            }
            36%{
              transform:rotateY(-222deg);
              color:#ff55bb;
            }
            to{
              transform:translateY(14px);
              font-size:100px;
               
            }
        }
      }
    }

    #lis3{
      background-color:#778844;
      #icons3{
           color:#6657ff;
           font-size:70px;
           animation: TopBottom alternate  infinite ease .5s;
           @keyframes  TopBottom{
            from{
               
               transform:translateY(-10px);
              
               color:#ff00ff;
            }
            35%{
              transform:rotateX(-10deg);
              color:#ffaa00;
              font-size:60px;

            }
            36%{
              transform:rotate(-1110deg);
            }
            45%{
              transform:rotateX(-40deg);
              color:#ff0aa0;
            }
            to{
              transform:translateX(-4px);
              
              color:#ffcdaa;
            }
        }
      }
    }
      #icons31{
        color:#6ab7ff;
        font-size:50px;
        animation-iteration-count:8;
        animation: Topw alternate  infinite ease 1s;
        
        @keyframes  Topw{
            from{
              
               transform:translateY(20px);
               fontsize:40px;
                
            }
            35%{
              transform:rotateX(-10deg);
              color:#ffaa00;
            }
            45%{
              transform:rotateX(-40deg);
              color:#ff0aa0;
            }
            55%{
              transform:rotate(-1110deg);
            }
            to{
              transform:translate(-4px);
              
              color:#ff1100;
            }
      }
    }
  
    #lis4 {
      background-color:#ff90aa;
      #icons4{
        font-size:100px;
        animation-iteration-count:14;
          animation: Rigth alternate-reverse infinite ease-out 2s;
          @keyframes Rigth{
            from{
              transform:rotateX(-120deg);
              color:#ffbbda;
            }
            35%{
              transform:rotateX(-10deg);
              color:#ffaa00;
            }
            45%{
              transform:rotateX(-40deg);
              color:#ff0aa0;
            }
            to{
            
              transform:rotateY(-120deg);
              color:#ff1100;
            }
        }
      } 
    }

    #lis6 {
      background-color:#f12233;
      #icons6{
        font-size:100px;
        animation-iteration-count: 8s;
          animation: Alt  alternate-reverse infinite ease-out 2s;
          @keyframes Alt{
            from{
              transform:rotateX(-10deg);
              color:#ffbbda;
            }
            30%{
             font-size:120px;
              color:#ffaa00;
            }
            36%{
              transform:rotateX(-10deg);
              color:#ff0aa0;
            }
            to{
            
              transform:rotateY(-120deg);
              color:#ff1100;
            }
        }
      } 
    }


    #lis7 {
      background-color:#fff;
      #icons7{
          animation: beat  infinite ease-out 1s;
          @keyframes beat{
            from{
               font-size:120px;
              
               color:#ff110099;
            }
            to{
             
              font-size:100px;
              color:#ff1100;
            }
        }
      }
    }

    #lis8 {
      background-color:#ffcc77;
      #icons8{
        font-size:100px;
          animation: Variable alternate  infinite ease-out 3s;
          @keyframes Variable{
            from{
              transform:rotateX(-10deg);
              color:#ffbbda;
            }
            30%{
             font-size:120px;
              color:#aa3344;
            }
            
            to{
            
              transform:rotateY(-120deg);
              color:#ff0aa0;
            }
        }
      } 
    }

   #lis10{ 
     background-color:#324456;
     #icons10{
        color:#6657ff;
        animation: Translate1 alternate-reverse  infinite ease-in-out 4s;
          @keyframes  Translate1{
            from{
               font-size:120px;
               transform:rotateX(240deg);
                
            }
            24%{
              transform:rotate(-1110deg);
              transform:rotateY(50deg);
              color:#ffaa00;
            }
            36%{
              transform:rotateX(-50deg);
              color:#ff55bb;
            }
            36%{
              transform:rotateY(-222deg);
              color:#ff55bb;
            }
            to{
              transform:translateY(14px);
              font-size:100px;
               
            }
        }
      }
    }
  
`;
export const Li=styled.h1`    
    height:160px;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    background-color:#25c9d4;
    border:4px inset #ffa000;
    color:#faaffa;
    font-size:20px;
    text-align:center;
    margin:12px auto 12px auto ;
    border-radius:12px;
    @media screen and (max-width:600px){
       font-size:15px;
       
    }
    #icons{
      font-size:100px;
      color:#ffa000;
      @media screen and (max-width:600px){
        font-size:20px;
      
    }
    }
    
   &:hover{
    animation: hover alternate-reverse infinite ease-out .12s;
    @keyframes hover{
            from{
              border:6px inset #ff0099;
            }
            to{
              border:6px inset #ffbb22;
            }
        }
   }

`; 

 
 export const LinkPortugues=styled.div`
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
export const Menu=styled.div`    
    height:600px;
    width:29%;
    background-size:cover;
    margin-right:10px;
    margin-top:10%;
    /*background-color:#aaddcc;*/
    
`;

export const ListMenu=styled.div`    
    height:540px;
    width:100%;
    display:flex;
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
`;
 
export const D=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
`;

export const E=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
`;
export const I=styled.h1`
    color:#ffaaee;
    text-shadow:2px 3px 4px #005500;
    font-size:80px;
`;

 export const Header=styled.header`
 `;