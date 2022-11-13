import React, {useState, useRef, useEffect} from "react";
import './style.css';

const Player = ({src}) => {
const [playing, setPlaying] = useState(true);
const audioRef = useRef();

useEffect(() => {
  if (!playing) {
    audioRef.current.play();
  } else {
    audioRef.current.pause();
  }
}, [playing]);

const handlePlay = () => {
  setPlaying(!playing);
};
return (<>

    <audio ref={audioRef} src={src} onTimeUpdate={(e) => {e.target.currentTime 
      console.log(e)}}/>
  <div onClick={handlePlay} className="player-controls">
      <button className={playing? "play-button play" : "play-button pause"}></button> </div>
  
  </>
)

}
//


export default Player;