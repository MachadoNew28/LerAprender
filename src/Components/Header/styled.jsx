import styled from 'styled-components';
import Header from './header';
import BgImg from './img/imgHeader.jpg'

const HeadeR = styled.header`
   width:100%;
   background-color: #fff;
   display:flex;
   align-items:center;
   justify-content:space-between;
   height:49px;
   border-bottom:1px solid #ffc31de7;
   position:fixed;
   box-shadow:2px 1px 12px 2px #f1f1f1;
  /* box-shadow:2px 1px 6px #68676680;*/
   
   .div-direction {
      display:flex;
      align-items:center;
    
      #link-direction{
        opacity:0.9;
        padding:10px;

        #icon-diretion{
          color:#ffc31de7;
          font-size:20px;
          border:1px solid #ffc31de7;
          border-right:none;
          border-radius:50%;

        }
      }
   }
   .div-menu-icon{
      width:30%;
      height:40px;
      display:flex;
      align-items:center;
      justify-content:space-between;
       background-color:#ffffff1a;
     #link{
     display:flex;
     align-items:center;
      
     opacity:none;
     height:68%;
     width:40px;
     background-color:#ffc31de7;
     margin:4px;
     border:2px solid #ffffbb;
     border-radius:30%;

     #icons{
      color:#fff;
      font-size:37px;
      margin:12px;
    }
   }
   }
   /* formato para telas de com+utador */
  @media screen and (min-width:1000px){
   position:fixed;
   z-index:2;
   background-color: #fff;
   background-size:cover;
   border-bottom:4px solid #ffffbb;
   height:60px;
   width:100%;
   box-shadow:4px 3px 8px #68676680;
   display:flex;
   align-items:center;
   justify-content:space-between;
   top:0;
  }
    

   

`; export default HeadeR;

export const Div = styled.div`
     
     width:50%;
     height:50px;
     margin:25% auto 0 auto;
     display:none;
     align-items:center;
     justify-content:space-between;
     #link{
       
       margin:12px ;
      #icons{
      
        font-size:34px;
        color:#fff009;
        border:2px solid #ffff00;
        border-radius:100%;
      }
     }
`;

export const H1 = styled.h1`
   --cor:#ff7700;
   color:--cor;
   text-shadow:2px 3px 4px #ffbb99;
   animation: neon alternate infinite ease-out .7s;
    
    @keyframes neon{
     20%{
        color:#fff;
       
         transform:translateX(-16%);
      }
      to{
        filter:drop-shadow(-0 0 30px var(--cor));
        color:#ffbbaa;
      
      }
    }
`;
