import styled from 'styled-components';
export const Div = styled.div`
  width:100%;
  background-color:#fffaaa;
  border-bottom-right-radius:40%;
  border-bottom-left-radius:40%;
  #theme-top{
    font-size:16px;
    border-radius:10px;
    text-align:center;
    background-color:#fff;
    border:6px solid #eee;
    border-bottom-right-radius:40%;
    border-bottom-left-radius:40%;
    color:#ffbf00;
    font-family:Roboto,-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
export const Opacidade=styled.div`
   
    height:600px; 
    width:100%;
    margin-top:10%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-size:cover;
    background-color:#fff;
    position:fixed;
    z-index:-1;  
    /*ESTILIZAÇÃO PA TELAS DE COMPUTADOR */
    @media screen and (min-width:1000px){
      margin-top:4%;
      height:625px;
      background-color:#0f000023;
      
   }
`;
 
export const Div1=styled.div`
  height:500px;
  width:100%;
  margin:10px auto 1% auto;
  border-radius:4px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap:wrap;
  padding:22px;
  overflow:auto;
  background-color:#fefefa;
  & :active{
    overflow:auto;
  }
  &::-webkit-scrollbar{
       
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

  /*ESTILIZAÇÃO PA TELAS DE COMPUTADOR */
  @media screen and (min-width:1000px){
  background-color:#fff;
  width:90%;
  height:680px;
  margin:1% auto 4% auto;
  border:1px inset  #25c9d4;
  border:1px solid #ffffbb;
  
  &::-webkit-scrollbar{
      background-color:#eee;
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
.SilabasStyle{
  color:#000;
}
  #Link{
    margin-bottom:26%;
    width:43%;
    font-size:16px;
    color:#ffbf00;
    text-align:center;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     height:60px;
  }
  
  #lis1{
      width:100%;
      #icons{
        color:#6657ff;
        animation-iteration-count:4;
          animation:  alternate-reverse  infinite ease-out 2s;
          font-size:60px;
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
          font-size:60px;
            animation:   alternate  infinite ease 2s;
         
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
           font-size:60px;

            animation:  alternate  infinite ease 2s;
           
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
        font-size:60px;
        animation-iteration-count:8;
          animation: alternate  infinite ease 2s;
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
        font-size:60px;
        animation-iteration-count:14;
          animation:   alternate-reverse infinite ease-out 2s;
        
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
        font-size:60px;
        animation-iteration-count: 8s;
          animation:   alternate-reverse infinite ease-out 2s;
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
        #icons7
        {  font-size:60px;

            animation: beat  infinite ease-out 1s;
          
          @keyframes beat{
            from{
               font-size:80px;
              
               color:#ff110099;
            }
            to{
             
              font-size:70px;
              color:#ff1100;
            }
        }
      }
    }

    #lis8 {
      #icons8{
        font-size:60px;
          animation:   alternate  infinite ease-out 3s;
          
          @keyframes Variable{
            from{
              transform:rotateX(-10deg);
              color:#ffbbda;
            }
            60%{
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
        font-size:60px;
          animation:   alternate-reverse  infinite ease-in-out 4s;
       
          @keyframes  Translate1{
            from{
               font-size:120px;
               transform:rotateX(240deg);
                
            }
            4%{
              transform:rotate(-1110deg);
              transform:rotateY(50deg);
              color:#ffaa00;
            }
            36%{
              transform:rotateX(-50deg);
              color:#ff55bb;
            }
            76%{
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
    height:60px;
    width:20%;
    background-size:cover;
    background-color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    border:2px solid #eee;
    box-shadow:2px 1px 12px 2px #f1f1f1; 
    border-radius:12px;
    margin:7px;
    transition:.1s ease-out;
    cursor: pointer;
    text-overflow:ellipsis;

    @media screen and (min-width:1000px){
      height:100px;
      width:20%;
      
   }

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
    height:100px;
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    background-color:#fff;
    border:2px solid #eee;
    box-shadow:2px 1px 12px 2px #f1f1f1;
   /* box-shadow:3px 5px 14px 2px #f0f0f0*/
    color:#faaffa;
    font-size:20px;
    text-align:center;
    margin:12px auto 12px auto ;
    border-radius:12px;
    @media screen and (min-width:600px){
       font-size:20px;
       height:200px;
       
    }
    #icons{
      font-size:50px;
      color:#ffa000;
      @media screen and (max-width:600px){
        font-size:20px;
      
    }
    }
    animation: hover alternate-reverse infinite ease-out cubic-bezier(0.215, 0.610, 0.355, 1);
    @keyframes hover{
            from{
              border:6px inset #ff0099;
            }
            to{
              border:6px inset #ffbb22;
            }
        }
`; 
 
export const A=styled.h1`
    color:#ff33ee;
    font-size:70px;
`;
  