import React, { useState } from "react";

export default function TexrForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
  }
  
  const [text, setText] = useState("");
  return (
    <>
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange} id="myBox" cols="30" rows="10"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
      <h2>Your summary is here</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}
