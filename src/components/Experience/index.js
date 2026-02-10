import React from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss"

const Experience = () => {
  return (
    <>
      <div className="container experience-page">
        <h1 className="page-title">
          <AnimatedLetters 
              idx={15}/>
        </h1>
      </div>
      <Loader type="pacman" />
    </>
  ) 
}

export default Experience