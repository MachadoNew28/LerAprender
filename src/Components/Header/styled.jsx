import Styled from 'styled-components';
import Header from '.';
import BgImg from './img/imgHeader.jpg'
import fundo from './img/bginicio.jpg'

const HeaderStyled = Styled.header`
   width:100%;
   height:70px;
   /***************************** */
   padding:22px 12px;
   top:0px;
   /***************************************************************/
   background-image:url(${fundo});
   border-bottom:4px inset #f1cc73;
   border-bottom-left-radius:40%;
   border-bottom-right-radius:40%;
   border-radius:3px;
   box-shadow:2px 1px 12px 2px #0001006a;
   /********************************* */
   /**animation: backgroundAnime infinite ease-out 240s;*/
   /*********************************** */
   /* box-shadow:2px 1px 6px #68676680;*/
  /**CONFIGURAÇÃO DE ANIMAÇÃO ******************************/
  @keyframes backgroundAnime {
    from {
      background-position:2px;
      background-image:url(${fundo}); 
      background-size:cover;
    }
      /****************************** */
    5% { 
      background-position:2px;
      background-image:url(${BgImg}); 
    }
      /******************************/
    45% {      
      color:#ff0aa0;
    }
      /***************************** */
    to
      {
      filter:drop-shadow(-0 0 30px var(--cor));
      background-image:url(${fundo});
      background-position:2112px; 
      background-size:cover;
    }
      /******************************/
  }
  /**************************************************************/
   display:flex;
   align-items:center;
   justify-content:space-between;
   position:fixed;
    /**************************************************************/
   #icon-arrow-set { 
    /******************* */
    box-shadow:2px 1px 12px 2px #f1cc0701;
    border-radius:50%;
    background:#fff;
    border:2px solid #f1cc7023;
    /******************* */
    font-size:50px;
    color:#f76721;  
    
   }
    /**************************************************************/
`; export default HeaderStyled;
 /*_____________________________________________________________________*/
export const Nav = Styled.nav`
   width:60%;
   height:49px;
   /***************************************************************/
   border-top-right-radius:10%;
   border-bottom-left-radius:10%;
   border-radius:6px;
   border: 2px solid #fff;

  
   /* box-shadow:2px 1px 6px #68676680;*/
  /******************************************* */
   padding:2px;
   /**************************************************************/
   display:flex;
   align-items:center;
   justify-content:space-between;
   /**************************************************************/ 
   .icon-nav1,.icon-nav2,.icon-nav3{   
    /******************* */
    font-size:30px;
    color:#fff;
    /*************************** */
      
   /***************************************************** */
    display:flex;
    align-items:center;
   /**************************************************************/
    }
    .icon-nav2 {   
    /******************* */
    color:#fff;
    }
    .icon-nav3 {   
    /******************* */
    color:#fff;
   /***************************************************** */
    }   
`;
 
  /*_____________________________________________________________________*/


export const ArrowSet = Styled.nav`
   width:60%;
   height:49px;
   /***************************************************************/
   background-color:#FFF;
   border-bottom:1px solid #ffc31de7;
   border-radius:2%;
   box-shadow:2px 1px 12px 2px #f1f1f1;
   /* box-shadow:2px 1px 6px #68676680;*/
  /**************************************************************/
   display:flex;
   align-items:center;
   justify-content:space-between;  
   /**************************************************************/
`;
