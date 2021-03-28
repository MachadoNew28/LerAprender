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
    sound: function Play() {
      const audio = new Audio(soundA);
      setInterval(audio.play(), 4000)
    },
    
    letter: 'A',
    color: '#ff66ff',
   
  },
  /*Position2 */
  {
    sound: function Play() {
      const audio = new Audio(soundB);
      setInterval(audio.play(), 4000)
    },
    letter: 'B',
    color: '#ffdd11'
  },
  /*Position3 */
  {
    sound: function Play() {
      const audio = new Audio(soundC);
      setInterval(audio.play(), 4000)
    },
    letter: 'C',
    color: '#ff00ff',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundD);
      setInterval(audio.play(), 4000)
    },
    letter: 'D',
    color: '#aadd99',
  },
    /*Position4 */
  {
    sound: function Play() {
      const audio = new Audio(soundE);
      setInterval(audio.play(), 4000)
    },
    letter: 'E',
    color: '#aaff11',
  },
    /*Position5 */
  {
    sound: function Play() {
      const audio = new Audio(soundF);
      setInterval(audio.play(), 4000)
    },
    letter: 'F',
    color: '#ff11aa',
  },
    /*Position6 */
  {
    sound: function Play() {
      const audio = new Audio(soundG);
      setInterval(audio.play(), 4000)
    },
    letter: 'G',
    color: '#88ffaa',
  },
    /*Position7 */
  {
    sound: function Play() {
      const audio = new Audio(soundH);
      setInterval(audio.play(), 4000)
    },
    letter: 'H',
    color: '#ff44aa',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundI);
      setInterval(audio.play(), 4000)
    },
    letter: 'I',
    color: '#aaa555',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundJ);
      setInterval(audio.play(), 4000)
    },
    letter: 'J',
    color: '#ddaaff',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundL);
      setInterval(audio.play(), 4000)
    },
    letter: 'L',
    color: '#ccff99',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundM);
      setInterval(audio.play(), 4000)
    },
    letter: 'M',
    color: '#bbb880',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundN);
      setInterval(audio.play(), 4000)
    },
    letter: 'N',
    color: '#ffdf99',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundO);
      setInterval(audio.play(), 4000)
    },
    letter: 'O',
    color: '#ff11aa',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundP);
      setInterval(audio.play(), 4000)
    },
    letter: 'P',
    color: '#99ddff',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundQ);
      setInterval(audio.play(), 4000)
    },
    letter: 'Q',
    color: '#123aad',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundR);
      setInterval(audio.play(), 4000)
    },
    letter: 'R',
    color: '#555fff',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundS);
      setInterval(audio.play(), 4000)
    },
    letter: 'S',
    color: '#aaff11',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundT);
      setInterval(audio.play(), 4000)
    },
    letter: 'T',
    color: '#ffff56',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundU);
      setInterval(audio.play(), 4000)
    },
    letter: 'U',
    color: '#faaedd',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundV);
      setInterval(audio.play(), 4000)
    },
    letter: 'V',
    color: '#eeffaa',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundX);
      setInterval(audio.play(), 4000)
    },
    letter: 'X',
    color: '#556789',
  },
  {
    sound: function Play() {
      const audio = new Audio(soundZ);
      setInterval(audio.play(), 4000)
    },
    letter: 'Z',
    color: '#bbcccf',
  },

]

export default ArrayLetras;