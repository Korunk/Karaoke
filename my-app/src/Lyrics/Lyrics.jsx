import React, {useRef, useEffect} from "react";
import './style.css';

const Lyrics = ({lines, currentLineIndex})=> {
const scrollRef = useRef();
 //console.log(currentLineIndex) 

useEffect(() => {
if (scrollRef.current !== undefined){
  scrollRef.current.scrollIntoView({
    block: 'start',
    inline: 'nearest',
    behavior: 'smooth',
  })
  console.log(currentLineIndex)
}
},[lines])


 return (
<div className="lyrics" >

{lines.map((line) => {
return (currentLineIndex === line?
<p ref={scrollRef} key={line.time} className="current-line">{line.text}</p>:
<p key={line.time}>{line.text}</p>);
}
)
};
</div>
 );
}


export default Lyrics;