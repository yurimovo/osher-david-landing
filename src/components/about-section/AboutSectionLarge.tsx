import "../../main-container.scss";
import "./style-large.scss";
import React, { useState } from "react";
import { useResponsive } from "../../utils/hooks/useResponsive";

import Communication from "./icons/communication-design.svg";
import Documentation from "./icons/documentation.svg";
import ExecutionOfWork from "./icons/execution-of-work.svg";
import ImplementationSupport from "./icons/implementational-support.svg";
import TechnologicalControl from "./icons/technological-conrol.svg";
import TechnologicalSolution from "./icons/technological-solution.svg";
import Line from "./icons/line.svg";

const AboutSectionLarge = () => {
    const [isTextShort, setIsTextShort] = useState<boolean>(false);
    

    return (
        <div className="section-container-large" id="about-us">
            <div className="template-container">
                <div className="columns-container-large">
                    <div className="section-column-left-large">
                        <div className="row">
                            <div className="section-header-large">
                                About OsherDavid <img className="line" src={Line} alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="text-header-large">
                                We are a firm that specializes in engineering communications
                            </div>
                        </div>
                        <div className="text-row-large">
                            <div className="text-large">
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
                            <div className="view-more-link-large">
                                View more
                            </div>
                        </div>
                        <div className="elements-row-large">
                            <div className="element-container-large">
                                <div className="element-icon-large">
                                    <img src={TechnologicalSolution} alt="Technological Solution" />
                                </div>
                                <div className="element-text-large">
                                    Technological solution
                                </div>
                            </div>
                            <div className="element-container-large">
                                <div className="element-icon-large">
                                    <img src={Communication} alt="Communication" />
                                </div>
                                <div className="element-text-large">
                                    ommunication design
                                </div>
                            </div>
                            <div className="element-container-large">
                                <div className="element-icon-large">
                                    <img src={TechnologicalControl} alt="Technological Control" />
                                </div>
                                <div className="element-text-large">
                                    Technological control
                                </div>
                            </div>
                            <div className="element-container-large">
                                <div className="element-icon-large">
                                    <img src={ExecutionOfWork} alt="Execution Of Work" />
                                </div>
                                <div className="element-text-large">
                                    Execution of work
                                </div>
                            </div>
                            <div className="element-container-large">
                                <div className="element-icon-large">
                                    <img src={ImplementationSupport} alt="Implementation Support" />
                                </div>
                                <div className="element-text-large">
                                    mplementation support
                                </div>
                            </div>
                            <div className="element-container-large">
                                <div className="element-icon-large">
                                    <img src={Documentation} alt="Documentation" />
                                </div>
                                <div className="element-text-large">
                                    Preparation of the necessary documentation
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-column-right-large">
                        <div className="image-container-large">
                            <div className="image-large" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSectionLarge;