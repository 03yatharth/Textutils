import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("Enter text to analyze");
  const [btn, setBtn] = useState("dark mode");
  const handleUpClick = (e) => {
    let newText = text.toUpperCase();
    setText(newText);
    e.preventDefault();
  };

  const toggleMode = (e) => {
    let newText;
    props.toggleMode();
    if (btn === "dark mode") {
      newText = "light mode";
    } else {
      newText = "dark mode";
    }
    setBtn(newText);
    e.preventDefault();
  };
  const handleLoClick = (e) => {
    let newText = text.toLowerCase();
    setText(newText);
    e.preventDefault();
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <form>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{border: '2px solid black'}}
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2" disabled={text.length===0} onClick={handleUpClick}>
        Convert to upperCase
      </button>
      <button className="btn btn-primary mx-2" disabled={text.length===0} onClick={handleLoClick}>
        Convert to lowerCase
      </button>
      <div className="container">
        <h2>Your text summury</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words</p>
        <p>{text.length} characters</p>
      </div>
      <button className="btn btn-primary mx-2" onClick={toggleMode}>
        {btn}
      </button>
    </form>
  );
}
