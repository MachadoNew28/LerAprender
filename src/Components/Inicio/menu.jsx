import {
        FaAssistiveListeningSystems, FaBookOpen,
        FaBrain,FaCircle,FaGgCircle,FaHatCowboySide
        ,FaHeartbeat,FaMusic,FaPencilAlt,FaQuestion,
        FaSortNumericDown, FaSquare, FaSquareRootAlt, 
        FaTree
      }
from 'react-icons/fa'
import React, {useState} from 'react'
import {Li,List,Lista} from './styled'
import {Link} from 'react-router-dom'
import Hover from './Audio/hover.m4a'

function PlayClick(){
    const audio=new Audio(Hover );
    audio.play();
}
function PlayHover(){
    const audio=new Audio(Hover);
    audio.play();
  
}
  
export const Animation=()=>(
    < >
      
    
    </>
);

const ArrayMenuPrincipal=[
    {
        title:'L. Portuguesa',
        Path:'/Lingua_Portuguesa',
        imagem: <FaBookOpen id="icons"></FaBookOpen>,
        id:"Link",
        id2:'lis1', 
    },
    {
        title:'Matematica',
        Path:'/Matematica',
        imagem: <FaSquareRootAlt id="icons"></FaSquareRootAlt>,
        id:"Link",
        id2:'lis2',  
    },
    {
        title:'Ed. M.e Plastica',
        Path:'/EducaçãoManual_Plastica',
        imagem: <FaCircle id="icons3"></FaCircle>,
        imagem2: <FaSquare id="icons31"></FaSquare>,
        id:"Link",
        id2:'lis3',  
    },
    {
        title:' Estudo do Meio',
        Path:'/EstudoDoMeio',
        imagem: <FaBrain id="icons4" ></FaBrain>,
        id:"Link",
        id2:'lis4',  
    },
    {
        title:' Cultura Geral',
        Path:'/CulturaGeral',
        imagem:'',
        id:"Link",
        id2:'lis5',  
    },
    {
        title:'Curiosidade',
        Path:'/Curiosidade',
        imagem:<FaQuestion  id="icons6" ></FaQuestion>,
        id:"Link",
        id2:'lis6',  
    },
    {
        title:'Saúde',
        Path:'/Saúde',
        imagem:<FaHeartbeat  id="icons7" ></FaHeartbeat>,
        id:"Link",
        id2:'lis7',  
    },

    {
        title:'Anedotas',
        Path:'/Anedotas',
        imagem: <FaAssistiveListeningSystems id="icons8"></FaAssistiveListeningSystems>,
        id:"Link",
        id2:'lis8',  
    },
    {
        title:'Histórias',
        Path:'/Histórias',
        imagem: <FaAssistiveListeningSystems id="icons8"></FaAssistiveListeningSystems>,
        id:"Link",
        id2:'lis9',  
    },
    {
        title:'Educação Musical',
        Path:'/EducaçãoMusical',
        imagem: <FaMusic  id="icons10"></FaMusic>,
        id:"Link",
        id2:'lis10',  
    },
    {
        title:'Boas Maneiras',
        Path:'/BoasManeiras',
        imagem:'',
        id:"Link",
        id2:'lis11',  
    },
    {
        title:'Aprenda Inglês',
        Path:'/Inglês',
        imagem:'',
        id:"Link",
        id2:'lis12',  
    }
  ]

  const ArrayMenuPortugues=[
    {
        title:'Alfabeto',
        Path:'/Alfabeto',
        imagem: <FaBookOpen id="icons"></FaBookOpen>,
        id:"Link",
        id2:'lis1', 
    },
    {
        title:'Consoante',
        Path:'/Consoante',
        imagem: <FaSquareRootAlt id="icons"></FaSquareRootAlt>,
        id:"Link",
        id2:'lis2',  
    },
    {
        title:'Vogal',
        Path:'/Vogal',
        imagem: <FaCircle id="icons3"></FaCircle>,
        imagem2: <FaSquare id="icons31"></FaSquare>,
        id:"Link",
        id2:'lis3',  
    },
    {
        title:'Formação de Sílabas',
        Path:'/EstudoDoMeio',
        imagem: <FaBrain id="icons4" ></FaBrain>,
        id:"Link",
        id2:'lis4',  
    },
    {
        title:'Gramática',
        Path:'/Gramática',
        imagem:'',
        id:"Link",
        id2:'lis5',  
    },
    {
        title:'Leitura',
        Path:'/Leitura',
        imagem:<FaQuestion  id="icons6" ></FaQuestion>,
        id:"Link",
        id2:'lis6',  
    },
    {
        title:'Prova Geral',
        Path:'/ProvaGeralPt',
        imagem:<FaHeartbeat  id="icons7" ></FaHeartbeat>,
        id:"Link",
        id2:'lis7',  
    }
  ];

  const ArrayMenuMatematica=[
      {
        title:'Numeração',
        Path:'/Numeração',
        imagem: <FaBookOpen id="icons"></FaBookOpen>,
        id:"Link",
        id2:'lis1', 
    },
    {
        title:'Soma',
        Path:'/Soma',
        imagem: <FaSquareRootAlt id="icons"></FaSquareRootAlt>,
        id:"Link",
        id2:'lis2',  
    },
    {
        title:'Multiplicação',
        Path:'/Multiplicação',
        imagem: <FaCircle id="icons3"></FaCircle>,
        imagem2: <FaSquare id="icons31"></FaSquare>,
        id:"Link",
        id2:'lis3',  
    },
    {
        title:' Subtração',
        Path:'/EstudoDoMeio',
        imagem: <FaBrain id="icons4" ></FaBrain>,
        id:"Link",
        id2:'lis4',  
    },
    {
        title:'Gramática',
        Path:'/Gramática',
        imagem:'',
        id:"Link",
        id2:'lis5',  
    },
    {
        title:'Leitura',
        Path:'/Leitura',
        imagem:<FaQuestion  id="icons6" ></FaQuestion>,
        id:"Link",
        id2:'lis6',  
    },
    {
        title:'Prova Geral',
        Path:'/ProvaGeralPt',
        imagem:<FaHeartbeat  id="icons7" ></FaHeartbeat>,
        id:"Link",
        id2:'lis7',  
    }
  ];

  const ArrayMenuEVP=[
    {
      title:'Cores',
      Path:'/Cores',
      imagem: <FaBookOpen id="icons"></FaBookOpen>,
      id:"Link",
      id2:'lis1', 
  },
  {
      title:'Figuras E formas',
      Path:'/Soma',
      imagem: <FaSquareRootAlt id="icons"></FaSquareRootAlt>,
      id:"Link",
      id2:'lis2',  
  }
];
 
function MenuPrincipal(){
    return(
      <>
     {
       ArrayMenuPrincipal.map((item,index)=>(
           <Link 
             id={item.id} 
             key={index} 
             to={item.Path}>
             <Li 
               key={index}
               id={item.id2}>{item.imagem}{item.imagem2}
             </Li>
             {item.title}
           </Link>
         ))
         }
     </>
 )
}
 export default MenuPrincipal;

 export function MenuPortugues(){
  return(
    <>
   {
     ArrayMenuPortugues.map((item,index)=>(
         <Link 
           id={item.id} 
           key={index} 
           to={item.Path}>
           <Li 
             key={index}
             id={item.id2}>{item.imagem}{item.imagem2}{item.title}
           </Li> 
         </Link>
       ))
       }
   </>
)
}
 ;

export function MenuMatematica(){
  return(
    <>
   {
     ArrayMenuMatematica.map((item,index)=>(
         <Link 
           id={item.id} 
           key={index} 
           to={item.Path}>
           <Li 
             key={index}
             id={item.id2}>{item.imagem}{item.imagem2}{item.title}
           </Li> 
         </Link>
       ))
       }
   </>
)
};

export function MenuEVP(){
  return(
    <>
   {
     ArrayMenuEVP.map((item,index)=>(
         <Link 
           id={item.id} 
           key={index} 
           to={item.Path}>
           <Li 
             key={index}
             id={item.id2}>{item.imagem}{item.imagem2}{item.title}
           </Li> 
         </Link>
       ))
       }
   </>
)
};