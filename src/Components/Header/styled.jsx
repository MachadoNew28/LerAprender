import Styled from 'styled-components';
import Header from '.';
import BgImg from './img/imgHeader.jpg'

const HeaderStyled = Styled.header`
   width:100%;
   height:49px;
   left:0;
   right:0;
   /***************************************************************/
   background-color:/* #4cda0bf3*/;
   border-bottom:1px solid #ffc31de7;
   border-radius:2%;
   box-shadow:2px 1px 12px 2px #f1f1f1;
   /* box-shadow:2px 1px 6px #68676680;*/
  /**************************************************************/
   display:flex;
   align-items:center;
   justify-content:space-between;
   position:fixed;
   /**************************************************************/
  #icon-arrow-set {
    border-radius:50%;
    color:#f5f5f5;
    font-size:20px;
    background:#fff;
  }
  /**************************************************************/
`; export default HeaderStyled;

 /*_____________________________________________________________________*/

export const Nav = Styled.nav`
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
