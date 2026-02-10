import React, { useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"

const Experience = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  return (
    <>
      <div className="container experience-page">
        <h1 className="page-title">
          <AnimatedLetters
              letterClass={letterClass}
              strArray={"Experience".split("")}
              idx={15}/>
        </h1>
        {/* render experience content */}
        <div>{renderPortfolio()}</div>
      </div>
      <Loader type="pacman" />
    </>
  ) 
}

export default Experience