import soundPt from './Audio/menus/pt.m4a'
import soundMt from './Audio/menus/mt.m4a'
import soundMp from './Audio/menus/mp.m4a'
import { useState } from 'react'

export const [title, setTitle] = useState (0);

/**********FUNÇÃO PARA REPRODUZIR OS SONS************** */
var audio = new Audio (soundMt)

 export function Play (){
 /**********VERIFICANDO O QUE SERÁ REPRODUZIDO************** */
   if (title == 'Português')
       audio = new Audio (soundPt)
   /******************************** */
   if (title == 'Matematica')
       audio = new Audio (soundMt)
   /******************************** */
   if (title == 'Manu & Plast')
     audio = new Audio (soundMp)
 /**********REPRODUZ O SOM DEPOIS DE SABER O QUE REPRODUZIRO************** */
   audio.play();

} 

 function HandleGetTitle (item) {
    setTitle(item)
    Play;
}export default HandleGetTitle;