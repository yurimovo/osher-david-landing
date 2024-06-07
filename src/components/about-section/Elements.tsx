import "./style.scss";
import React from "react";
import TechnologicalSolution from "./icons/technological-solution.svg";
import Communication from "./icons/communication-design.svg";
import TechnologicalControl from "./icons/technological-conrol.svg";
import ExecutionOfWork from "./icons/execution-of-work.svg";
import ImplementationSupport from "./icons/implementational-support.svg";
import Documentation from "./icons/documentation.svg";

const Elements = () => {
  return (
    <>
      <div className="elements-row-1">
        <div className="element-container">
          <div className="element-icon">
            <img src={TechnologicalSolution} alt="Technological Solution" />
          </div>
          <div className="element-text">
            Technological solution
          </div>
        </div>
        <div className="element-container">
          <div className="element-icon">
            <img src={Communication} alt="Communication" />
          </div>
          <div className="element-text">
            Communication design
          </div>
        </div>
        <div className="element-container">
          <div className="element-icon">
            <img src={TechnologicalControl} alt="Technological Control" />
          </div>
          <div className="element-text">
            Technological control
          </div>
        </div>
      </div>
      <div className="elements-row-2">
        <div className="element-container">
          <div className="element-icon">
            <img src={ExecutionOfWork} alt="Execution Of Work" />
          </div>
          <div className="element-text">
            Execution of work
          </div>
        </div>
        <div className="element-container">
          <div className="element-icon">
            <img src={ImplementationSupport} alt="Implementation Support" />
          </div>
          <div className="element-text">
            Implementation support
          </div>
        </div>
        <div className="element-container">
          <div className="element-icon">
            <img src={Documentation} alt="Documentation" />
          </div>
          <div className="element-text">
            Preparation of the necessary documentation
          </div>
        </div>
      </div>
    </>
  )
}

export default Elements;