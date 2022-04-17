// import React from 'react'
import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();  //to convert text to upperCase
    setText(newText)
  }

  const handleloClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase(); 
    setText(newText)
  }

  const handleClearClick = ()=>{
    let newText = ''; 
    setText(newText)
  }

  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter text here');
  return (
            <>
                  <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onchange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'}}} id="myBox" rows="8"></textarea>
              </div>
              <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
              <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to Lowercase</button>
              <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
               </div>
                <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} word and {text.length}characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                 <p>{text}</p>
                </div>
                  </>
                )
      }
         

