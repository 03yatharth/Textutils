import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
// import About from "./components/About";
function App() {
  const [mode, setMode] = useState("light");
  const [navMode, setNavMode] = useState("#0d6efd");
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setNavMode("rgb(3 12 27)");
      document.body.style.backgroundColor = "#0a1933";
      document.body.style.color = "white";
    } else {
      setMode("light");
      setNavMode("#0d6efd");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar title="textutils" navMode={navMode} mode={mode} />
      <div className="container">
        <Textarea
          heading="Enter the text in below textbox"
          mode={mode}
          toggleMode={toggleMode}
        />
      </div>
      {/* <Router> */}
      {/* <Routes> */}
      {/* <Route
            path="/About"
            element={
              <div className="container my-3">
                <About />
              </div>
            }
          /> */}
      {/* <Route
            path="/"
            element={
              <div className="container">
                <Textarea
                  heading="Enter the text in below textbox"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              </div>
            }
          /> */}
      {/* </Routes>
      </Router> */}
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Enter Title",
};
export default App;
