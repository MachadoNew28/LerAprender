import styled from 'styled-components';
import Header from './header';
import BgImg from './img/imgHeader.jpg'

const HeadeR = styled.header`
   position:fixed;
   z-index:2;
   background-color: #fff;
   background-size:cover;
  
    border-bottom:4px solid #ffffbb;
   height:80px;
   width:100%;
   box-shadow:4px 3px 8px #68676680;
   display:flex;
   align-items:center;
   justify-content:space-between;
   
   top:0;
   #link{
     display:flex;
     align-items:center;
     justify-content:center;
     opacity:none;
     height:80%;
     width:70px;
     background-color:#ffff88;
     
     margin:12px;
     border:2px solid #ffffbb;
    #icons{
      color:#ff9898;
      font-size:34px;
      margin:12px;
    }
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
