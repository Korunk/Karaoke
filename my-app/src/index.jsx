import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import lyricsLines from './lyrics-lines';
import Lyrics from './Lyrics/Lyrics';
import Player from './Player/Player';
import './style.css';

const App = () => {
 //const [currentLineIndex, setCurrentLineIndex] = useState
 //(lyricsLines[4])
 const [scrollIndex, setScrollIndex] = useState(5);

 const handelChangeIndex= ()=> {
   setScrollIndex()
 }
  return (
    <div className="container">
       <h1>Fools Garden: Lemon Tree</h1>
      <Player src={'fools-garden-lemon-tree.mp3'} />
      <Lyrics lines={lyricsLines} currentLineIndex={scrollIndex} />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
