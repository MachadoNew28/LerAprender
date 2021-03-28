import { createGlobalStyle } from 'styled-components';
import fundo from './ground.jpg'
import BgImg from './bginicio.jpg'
import BgImg2 from './fundoP.jpg'
 
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
 overflow:none;
  }
     
  body::-webkit-scrollbar{
}
body::-webkit-scrollbar-thumb{
     
}

#root{
   height:1000px;
   position:fixed;
   width:100%;
   animation: neon12 infinite ease-out 132s;
   background-color:#fdfdfdf1;
   overflow:none;
   background-size:cover;
    
    @keyframes neon12{
      from{
      
        background-position:-1222px;
        background-image:url(${BgImg}); 
        background-size:cover;
        animation: neon12 infinite ease-out 32s;
      }
       
      

      to{
        
        background-image:url(${BgImg});
        background-position:3222px;        
        background-size:cover;
      }
    }
     /* background-image:url(${fundo});*/
      
}
`;
