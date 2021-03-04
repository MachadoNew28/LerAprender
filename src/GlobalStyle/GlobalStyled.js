import { createGlobalStyle } from 'styled-components';
import fundo from './fundoP.jpg'
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
