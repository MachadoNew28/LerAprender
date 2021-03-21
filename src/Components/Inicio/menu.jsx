import {
        FaAssistiveListeningSystems, FaBookOpen,
        FaBrain,FaCircle,FaHeartbeat,FaLine,FaMusic,FaPlus,FaQuestion,
        FaSortNumericDown,
        FaSquare, FaSquareRootAlt, FaXRay, 
      }from 'react-icons/fa'

import React, {useState} from 'react'
import {Li} from './styled'
import {Link} from 'react-router-dom'
import Hover from './Audio/cartoon003.mp3'

function PlayClick(){
    const audio=new Audio(Hover );
    audio.play();
    console.log('clicou')
}
function PlayHover(){
    const audio=new Audio(Hover);
    audio.play();
    console.log('clicou')
  
}
  
 
const ArrayMenuPrincipal=[
    {
        title:'L. Portuguesa',
        Path:'/Lingua_Portuguesa',
        imagem: <FaBookOpen style={{color:'#ff00aa'}} id="icons"></FaBookOpen>,
        id:"Link",
        id2:'lis1',
        action:function Play(){
          const audio=new Audio(Hover);
          audio.play();
          console.log('Já deu certo')
        }
    },
    {
        title:'Matematica',
        Path:'/Matematica',
        imagem: <FaSquareRootAlt style={{color:'#fddd11'}} id="icons"></FaSquareRootAlt>,
        id:"Link",
        id2:'lis2',  
    },
    {
        title:'Ed. M.e Plastica',
        Path:'/EducaçãoManual_Plastica',
        imagem: <FaCircle style={{color:'#fdd5d1'}} id="icons3"></FaCircle>,
        imagem2: <FaSquare style={{color:'#ffdd53'}} id="icons31"></FaSquare>,
        id:"Link",
        id2:'lis3',  
    },
    {
        title:' Estudo do Meio',
        Path:'/EstudoDoMeio',
        imagem: <FaBrain style={{color:'#fdd098'}} id="icons4" ></FaBrain>,
        id:"Link",
        id2:'lis4',  
    },
    {
        title:' Cultura Geral',
        Path:'/CulturaGeral',
        imagem: <FaMusic style={{color:'#ffdc98'}}  id="icons"></FaMusic>,
        id:"Link",
        id2:'lis1',  
    },
    {
        title:'Curiosidade',
        Path:'/Curiosidade',
        imagem:<FaQuestion style={{color:'#aaff04'}}  id="icons" ></FaQuestion>,
        id:"Link",
        id2:'lis1',  
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
        imagem: <FaAssistiveListeningSystems  style={{color:'#aaddd4'}} id="icons8"></FaAssistiveListeningSystems>,
        id:"Link",
        id2:'lis8',  
    },
    {
        title:'Histórias',
        Path:'/Histórias',
        imagem: <FaAssistiveListeningSystems style={{color:'#ffde04'}} id="icons"></FaAssistiveListeningSystems>,
        id:"Link",
        id2:'lis1',  
    },
    {
        title:'Educação Musical',
        Path:'/EducaçãoMusical',
        imagem: <FaMusic style={{color:'#44ddd3'}}  id="icons"></FaMusic>,
        id:"Link",
        id2:'lis1',  
    },
    {
        title:'Boas Maneiras',
        Path:'/BoasManeiras',
        imagem: <FaMusic style={{color:'#aafdaa'}}  id="icons"></FaMusic>,
        id:"Link",
        id2:'lis1',  
    },
    {
        title:'Aprenda Inglês',
        Path:'/Inglês',
        imagem: <FaMusic style={{color:'#ff44f3'}}  id="icons"></FaMusic>,
        id:"Link",
        id2:'lis1',  
    }
  ]

  const ArrayMenuPortugues=[
    {
        title:'Alfabeto',
        Path:'/Alfabeto',
        imagem: <FaBookOpen style={{color:'#ffefac'}} id="icons"></FaBookOpen>,
        id:"Link",
        id2:'lis1', 
    },
    {
        title:'Consoante',
        Path:'/Consoante',
        imagem: <FaSquareRootAlt style={{color:'#ffaeda'}} id="icons"></FaSquareRootAlt>,
        id:"Link",
        id2:'lis2',  
    },
    {
        title:'Vogal',
        Path:'/Vogal',
        imagem: <FaCircle style={{color:'#ffbbff'}} id="icons3"></FaCircle>,
        imagem2: <FaSquare style={{color:'#ff00aa'}} id="icons31"></FaSquare>,
        id:"Link",
        id2:'lis3',  
    },
    {
        title:'Formação de Sílabas',
        Path:'/monosílabas',
        imagem: <FaBrain style={{color:'#ff652e'}} id="icons4" ></FaBrain>,
        id:"Link",
        id2:'lis4',  
    },
    {
        title:'Gramática',
        Path:'/Gramática',
        imagem: <FaMusic style={{color:'#ff44f3'}}  id="icons10"></FaMusic>,
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
        title:'Contagem',
        Path:'/contagem',
        imagem: <FaSortNumericDown id="icons"></FaSortNumericDown>,
        id:"Link",
        id2:'lis1', 
    },
    {
        title:'Soma',
        Path:'/Soma',
        imagem: <FaPlus id="icons"></FaPlus>,
        id:"Link",
        id2:'lis2',  
    },
    {
        title:'Multiplicação',
        Path:'/Multiplicação',
        imagem: <div id="icons3">X</div>,
        id:"Link",
        id2:'lis3',  
    },
    {
        title:' Subtração',
        Path:'/EstudoDoMeio',
        imagem: <FaLine id="icons4" ></FaLine>,
        id:"Link",
        id2:'lis4',  
    },
    {
        title:'Gramática',
        Path:'/Gramática',
        imagem: <FaMusic style={{color:'#ff44f3'}}  id="icons10"></FaMusic>,
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
  var [click,setClick] = useState(1); 
  
    return(
      <>
     {
       ArrayMenuPrincipal.map((item,index)=>(
           <Link 
             id={item.id} 
             key={index} 
             to={item.Path}
             onClick={item.action}
             >
                
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
 export default MenuPrincipal;

 export function MenuPortugues(){
  return(
    <>
   {
     ArrayMenuPortugues.map((item,index)=>(
         <Link 
           id={item.id} 
           key={index} 
           onClick={PlayHover}
           to={item.Path}>
              
           <Li 
             key={index}
             id={item.id2}
             onClick={PlayHover}
             >{item.imagem}{item.imagem2}{item.title}
             
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