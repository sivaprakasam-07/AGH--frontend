import React,{useState} from 'react';
export default function Display(){
  const [text,setText]  = useState("");
  function handle(event){
    setText(event.target.value);
  }
  return(
    <><h1>type something</h1>
    <input type= 'text' placeholder="type something" value={text} onChane={handle}/>
    <p> you typed <strong>{text}</strong></p>
    </>
  )
}