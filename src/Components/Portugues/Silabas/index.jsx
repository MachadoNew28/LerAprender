import React from 'react'
import Header from '../../Header/header'
import Estilo,{Menu,Div1Conteiner,Opacidade,Div1,H1,Li,ListMenu,A,B,C,D,E,F,G,H,I,J,L,M,N,O,P,Q,R,S,T,U,V,X,Z} from '../Alfabeto/styled'
import {LinkAlfabeto} from '../styled'
import   { useState, useEffect } from 'react'
import SoundA from './Audio/a.m4a';
import SoundB from './Audio/b.m4a';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import VoiceAlfa from '../Alfabeto/Audio/click.m4a'

function PlayA(){
  const audio=new Audio(SoundA);
  setInterval(audio.play(),4000)
}
function PlayB(){
  const audio=new Audio(SoundB);
  setInterval(audio.play(),4000)
}
function Hover(){
  const audio=new Audio(SoundB);
   audio.play();
}

function PlayAlfa(){
  const audio=new Audio(VoiceAlfa);
  setTimeout(audio.play(),900000);
}
 


const Silabas=()=>{
  
  
   
   
  
  return(
  
  <>
   
    <Estilo>
    <Header></Header>
      <Opacidade>
        <Menu>
          <ListMenu>
            <Link onClick={PlayAlfa()} num="1" to="/"><Li>Língua Portuguesa</Li></Link>
            <Li>Matemática</Li>
            <Li>Educação Manual e Plastica</Li>
            <Li>Estudo do Meio</Li>
            <Li>Língua Portuguesa</Li>
            <Li>Matemática</Li>
            <Li>Educação Manual e Plastica</Li>
            <Li>Estudo do Meio</Li>
            <Li>Língua Portuguesa</Li>
            <Li>Matemática</Li>
            <Li>Educação Manual e Plastica</Li>
            <Li>Estudo do Meio</Li>

          </ListMenu>
        </Menu>
        <Div1Conteiner>
          {/*<H1> <H1>Tema:Alfabeto</H1></H1>*/}
          <Div1>
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <B>Ba</B>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <C>Ca</C>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <D>Da</D>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <F>Fa</F>
              </LinkAlfabeto>
            </Link>    


            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <B>Ba</B>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <C>Ca</C>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <D>Da</D>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <F>Fa</F>
              </LinkAlfabeto>
            </Link>    



            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <B>Ba</B>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <C>Ca</C>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <D>Da</D>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <F>Fa</F>
              </LinkAlfabeto>
            </Link>    



            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <B>Ba</B>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <C>Ca</C>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <D>Da</D>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <F>Fa</F>
              </LinkAlfabeto>
            </Link>    



            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <B>Ba</B>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <C>Ca</C>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <D>Da</D>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <F>Fa</F>
              </LinkAlfabeto>
            </Link>    

            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <B>Ba</B>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <C>Ca</C>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <D>Da</D>
              </LinkAlfabeto>
            </Link> 
            <Link  onClick={PlayAlfa} id="Link" to="/Ba">
              <LinkAlfabeto>
                <F>Fa</F>
              </LinkAlfabeto>
            </Link>    
          </Div1>
        </Div1Conteiner>
      </Opacidade>

    </Estilo>
  </>
);
}
 
export default Silabas;