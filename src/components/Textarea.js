import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("Enter text to analyze");
  const handleOnClick = (e) => {
    let newText = text.toUpperCase();
    setText(newText);
    e.preventDefault() 
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
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleOnClick}>
        Convert to upperCase
      </button>
    </form>
  );
  
}

// import React, { useState } from 'react';

// export default function Textarea(props) {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
