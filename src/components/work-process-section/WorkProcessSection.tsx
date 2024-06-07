import "../../main-container.scss";
import "./style.scss";
import React from "react";
import { useResponsive } from "../../utils/hooks/useResponsive";

import GraphHor from "./images/graph-hor.png";
import GraphTablet from "./images/graph-ver-tablet.svg";
import GraphMobile from "./images/graph-ver-mobile.svg";

const WorkProcessSection = () => {
  const { isTablet, isMobile } = useResponsive();

  return (
    <div className="work-process-container">
      <div className="template-container">
        {!isTablet || !isMobile ? (
          <>
            <div className="work-process-header-1">
              Work process
            </div>
            <div className="work-process-header-2">
              Our simple and clear work process
            </div>
            <div className="graph">
              <img className="graph-image" src={GraphHor} alt="Graph" />
            </div>
          </>
        ) : null}
        {isTablet ? (
          <div className="graph-ver-tablet">
            <img className="ver-tablet-image" src={GraphTablet} alt="Tablet graph" />
          </div>
        ) : null}
        {isMobile ? (
          <div className="graph-ver-mobile">
            <img src={GraphMobile} alt="Mobile graph" />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default WorkProcessSection;