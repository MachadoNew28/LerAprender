import { createGlobalStyle } from 'styled-components';
import fundo from './bginicio.jpg'
 
export const Global = createGlobalStyle`
  *{
     font-family:Arial, Helvetica, sans-serif;
      outline:none;
      box-sizing:border-box;
      margin:0;
      padding:0;
      text-decoration:none;
      list-style:none;

  }
   
  body{
    background-color:#fdfdfdf1;
    animation: neon12   infinite ease-out 240s;
     
    background-size:cover;
    @keyframes neon12{
      from{
      
        background-position:-1222px;
        background-image:url(${fundo});
        
      }
           35%{
           
              color:#ffaa00;
            }
            45%{
              
              color:#ff0aa0;
            }
      to{
        filter:drop-shadow(-0 0 30px var(--cor));
        background-image:url(${fundo});
        background-position:1222px;
        
      }
    }
    
     
    
     /* background-image:url(${fundo});*/
  }
  body::-webkit-scrollbar{
     
  
}
body::-webkit-scrollbar-thumb{
     
}

#root{
  margin:0 auto 0 auto;
}
`;
