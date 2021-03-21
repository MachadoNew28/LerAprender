import React, { useState } from 'react'
import soundA from './Audio/a.m4a';
import soundB from './Audio/b.m4a';
import soundC from './Audio/c.m4a';
import soundD from './Audio/d.m4a';
import soundE from './Audio/e.m4a';
import soundF from './Audio/f.m4a';
import soundG from './Audio/g.m4a';
import soundH from './Audio/h.m4a';
import soundI from './Audio/i.m4a';
import soundJ from './Audio/j.m4a';
import soundL from './Audio/l.m4a';
import soundM from './Audio/m.m4a';
import soundN from './Audio/n.m4a';
import soundO from './Audio/o.m4a';
import soundP from './Audio/p.m4a';
import soundQ from './Audio/q.m4a';
import soundR from './Audio/r.m4a';
import soundS from './Audio/s.m4a';
import soundT from './Audio/t.m4a';
import soundU from './Audio/u.m4a';
import soundV from './Audio/v.m4a';
import soundX from './Audio/x.m4a';
import soundZ from './Audio/z.m4a';
import VoiceAlfa from './Audio/click.m4a';

 
const ArrayLetras = [
  {
    action: function Play() {
      const audio = new Audio(soundA);
      setInterval(audio.play(), 4000)
    },
    
    letter: 'A',
    id: 'Letras',
    color: '#ff66ff',
   
  },
  /*Position2 */
  {
    action: function Play() {
      const audio = new Audio(soundB);
      setInterval(audio.play(), 4000)
    },
    letter: 'B',
    id: 'Letras',
    color: '#ffdd11'
  },
  /*Position3 */
  {
    action: function Play() {
      const audio = new Audio(soundC);
      setInterval(audio.play(), 4000)
    },
    letter: 'C',
    id: 'Letras',
    color: '#ff00ff',
  },
  {
    action: function Play() {
      const audio = new Audio(soundD);
      setInterval(audio.play(), 4000)
    },
    letter: 'D',
    id: 'Letras',
    color: '#aadd99',
  },
    /*Position4 */
  {
    action: function Play() {
      const audio = new Audio(soundE);
      setInterval(audio.play(), 4000)
    },
    letter: 'E',
    id: 'Letras',
    color: '#aaff11',
  },
    /*Position5 */
  {
    action: function Play() {
      const audio = new Audio(soundF);
      setInterval(audio.play(), 4000)
    },
    letter: 'F',
    id: 'Letras',
    color: '#ff11aa',
  },
    /*Position6 */
  {
    action: function Play() {
      const audio = new Audio(soundG);
      setInterval(audio.play(), 4000)
    },
    letter: 'G',
    id: 'Letras',
    color: '#88ffaa',
  },
    /*Position7 */
  {
    action: function Play() {
      const audio = new Audio(soundH);
      setInterval(audio.play(), 4000)
    },
    letter: 'H',
    id: 'Letras',
    color: '#ff44aa',
  },
  {
    action: function Play() {
      const audio = new Audio(soundI);
      setInterval(audio.play(), 4000)
    },
    letter: 'I',
    id: 'Letras',
    color: '#aaa555',
  },
  {
    action: function Play() {
      const audio = new Audio(soundJ);
      setInterval(audio.play(), 4000)
    },
    letter: 'J',
    id: 'Letras',
    color: '#ddaaff',
  },
  {
    action: function Play() {
      const audio = new Audio(soundL);
      setInterval(audio.play(), 4000)
    },
    letter: 'L',
    id: 'Letras',
    color: '#ccff99',
  },
  {
    action: function Play() {
      const audio = new Audio(soundM);
      setInterval(audio.play(), 4000)
    },
    letter: 'M',
    id: 'Letras',
    color: '#bbb880',
  },
  {
    action: function Play() {
      const audio = new Audio(soundN);
      setInterval(audio.play(), 4000)
    },
    letter: 'N',
    id: 'Letras',
    color: '#ffdf99',
  },
  {
    action: function Play() {
      const audio = new Audio(soundO);
      setInterval(audio.play(), 4000)
    },
    letter: 'O',
    id: 'Letras',
    color: '#ff11aa',
  },
  {
    action: function Play() {
      const audio = new Audio(soundP);
      setInterval(audio.play(), 4000)
    },
    letter: 'P',
    id: 'Letras',
    color: '#99ddff',
  },
  {
    action: function Play() {
      const audio = new Audio(soundQ);
      setInterval(audio.play(), 4000)
    },
    letter: 'Q',
    id: 'Letras',
    color: '#123aad',
  },
  {
    action: function Play() {
      const audio = new Audio(soundR);
      setInterval(audio.play(), 4000)
    },
    letter: 'R',
    id: 'Letras',
    color: '#555fff',
  },
  {
    action: function Play() {
      const audio = new Audio(soundS);
      setInterval(audio.play(), 4000)
    },
    letter: 'S',
    id: 'Letras',
    color: '#aaff11',
  },
  {
    action: function Play() {
      const audio = new Audio(soundT);
      setInterval(audio.play(), 4000)
    },
    letter: 'T',
    id: 'Letras',
    color: '#ffff56',
  },
  {
    action: function Play() {
      const audio = new Audio(soundU);
      setInterval(audio.play(), 4000)
    },
    letter: 'U',
    id: 'Letras',
    color: '#faaedd',
  },
  {
    action: function Play() {
      const audio = new Audio(soundV);
      setInterval(audio.play(), 4000)
    },
    letter: 'V',
    id: 'Letras',
    color: '#eeffaa',
  },
  {
    action: function Play() {
      const audio = new Audio(soundX);
      setInterval(audio.play(), 4000)
    },
    letter: 'X',
    id: 'Letras',
    color: '#556789',
  },
  {
    action: function Play() {
      const audio = new Audio(soundZ);
      setInterval(audio.play(), 4000)
    },
    letter: 'Z',
    id: 'Letras',
    color: '#bbcccf',
  },

]

export default ArrayLetras;