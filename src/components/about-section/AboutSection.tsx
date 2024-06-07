import "../../main-container.scss";
import "./style.scss";
import React from "react";

import Communication from "./icons/communication-design.svg";
import Documentation from "./icons/documentation.svg";
import ExecutionOfWork from "./icons/execution-of-work.svg";
import ImplementationSupport from "./icons/implementational-support.svg";
import TechnologicalControl from "./icons/technological-conrol.svg";
import TechnologicalSolution from "./icons/technological-solution.svg";
import Line from "./icons/line.svg";

const AboutSection = () => {
  return (
    <div className="template-container">
      <div className="columns-container" id="about-us">
        <div className="section-column-left">
          <div className="row">
            <div className="section-header">
              About OsherDavid <img className="line" src={Line} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="text-header">
              We are a firm that specializes in engineering communications
            </div>
          </div>
          <div className="row">
            <div className="text">
              The Company is currently managed by the next generation, Engineer Erez Gilboa, a
              Technion-graduate Mechanical Engineer, a Res. Battalion Commander, holding two
              additional degrees from the Technion, and with over 25 years of experience in the
              industry. Gilboa Engineers is active in Israel and around the world, holds the ISO 9001
              standard and employs over 80 engineers, consultants and designers. The Company
              provides engineering, consulting, support, characterization and planning services from
              urban and statutory planning and up to detailed design and delivery of the facility,
              including application for the obtainment of building permits and general/close
              construction supervision.
            </div>
          </div>
        </div>
        <div className="section-column-right">
          <div className="image-container">
            <div className="image" />
          </div>
        </div>
      </div>
      <div className="elements-container">
        <div className="elements-row">
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
      </div>
    </div>
  )
}

export default AboutSection;