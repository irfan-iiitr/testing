import React from 'react'
import { useState } from 'react';

const Home = () => {
    const [text,setText] = useState('');
    const [displayText,setDisplayText] = useState("");
    const handleSubmit=()=>{
        setDisplayText("hello everyone");
    }
    const mul=(a)=>{
        return a*2;
    }
  return (
    <div>
      <input placeholder='Enter text here' value={text} type='text' onChange={(e)=>setText(e.target.value+"s")}/>
     <h1>{displayText}</h1>
     <button style={{"padding":5}} onClick={handleSubmit}>Click ME</button>
     <button >button 1 </button>
     <button >button 2</button>
     <p>Text</p>
    </div>
  )
}

export default Home
