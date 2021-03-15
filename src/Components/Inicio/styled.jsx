import styled from 'styled-components';


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
    background-size:cover;
    position: fixed;
    opacity:1.2;
  }
`; export default Estilo;

export const Opacidade=styled.div`
   
    height:auto;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-size:cover;
    position:fixed;
   @media screen and (min-width:1000px){
      margin-top:6%;
      background-color:#0f000032;
   }
`;
 
export const Div1=styled.div`
  height:589px;
  width:100%;
  margin:0 auto 1% auto;
  border-radius:4px;
  overflow:auto;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  padding:22px;
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
  #Link{
    margin:12px;
    width:25%;
    font-size:19px;
    color:#ffbf00;
    text-align:center;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     height:200px;
  }
  
  #lis1{
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

    /*ESTILIZANDO OUTRA PÁGINA ALFABETO */
    #Letras{
    height:90px;
    width:10%;
    background-size:cover;
    background-color:#ffF;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:6px;
    box-shadow:2px 4px 5px #f3f3f3;
    border:1px solid #ffffbb; 
    margin:7px;
    transition:.1s ease-out;
    cursor: pointer;
  }
    
  #Letras :active{
    background-color:#ffdd33aa;
    transition:.1s ease-in-out;
    border:9px solid #431;
  }
  #Letras:hover{
    background-color:#ffdd33dd;
    border:5px solid #432;
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
  
`;

export const Li=styled.h1`
    height:150px;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    background-color:#fff;
    border:1px solid #ffffba;
    box-shadow:3px 5px 14px 2px #f0f0f0;
    color:#faaffa;
    font-size:20px;
    text-align:center;
    margin:12px auto 12px auto ;
    border-radius:12px;
    @media screen and (max-width:600px){
       font-size:15px;
       
    }
    #icons{
      font-size:70px;
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
  
        border-radius:12px;
   }
`;  



export const A=styled.h1`
    color:#ff33ee;
    font-size:70px;
`;
export const B=styled.h1`
    color:#ffee44;
    font-size:75px;
`;
export const C=styled.h1`
    color:#ffaa33;
    font-size:80px;
`;
 
export const D=styled.h1`
    color:#ffaaee;
    font-size:80px;
`;

export const E=styled.h1`
    color:#ffaaee;
    font-size:80px;
`;
export const I=styled.h1`
    color:#ffaaee;
    font-size:80px;
`;

 export const Header=styled.header`
 `;