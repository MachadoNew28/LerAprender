import styled from 'styled-components';
import Header from './header';
import BgImg from './img/imgHeader.jpg'

const HeadeR = styled.header`
   position:fixed;
   /*background-color: #ffcc0080;*/
   background-size:cover;
    border-bottom:1px solid #fffbbb;
   height:70px;
   width:100%;
   box-shadow:4px 3px 8px #68676680;
   display:flex;
   align-items:center;
   justify-content:space-between;
   
   top:0;
   #link{
     display:flex;
     align-items:center;
     opacity:none;
     height:56%;
     border-radius:4px;
     background-color:#ffff88;
     box-shadow:4px 3px 3px #68676680;
     margin:12px;
     border:4px solid #ffffbb;
    #icons{
      color:#ff4321;
      font-size:24px;
      margin:12px;
    }
   }

`; export default HeadeR;

export const Div = styled.div`
     
     width:50%;
     height:50px;
     margin:25% auto 0 auto;
     
     display:flex;
     align-items:center;
     justify-content:space-between;
     #link{
       box-shadow:2px 4px 2px 2px #68676680; 
       background-color:#ffaacc;
       padding:0 22px;
       margin:12px ;
      #icons{
        font-size:44px;
        color:#fff766;
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
