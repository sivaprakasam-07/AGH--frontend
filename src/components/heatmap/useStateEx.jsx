import React,{useState} from 'react';
export default function Toggle(){
  const [isOn, setIsOn]  =useState("false");
  function handle(){
   setIsOn(prev=>!prev)
  
}
return(
    <><h1>Toggle</h1>
    <button onClick={handle}>{isOn?"ON":"OFF"}</button>
    </>
)
};