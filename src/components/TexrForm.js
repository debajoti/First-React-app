import React, { useState } from "react";

export default function TexrForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
  }
  
  const [text, setText] = useState("");
  return (
    <>
    <div className="container my-3" style={{color : props.mode === 'dark' ? 'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? '#353535':'white', color : props.mode === 'dark' ? 'white':'black'}} id="myBox" cols="30" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'dark' ? 'white':'black'}}>
      <h2>Your summary is here</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h3>Preview</h3>
      <p>{text.length>0? text : "Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  );
}
