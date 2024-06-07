import "../../main-container.scss";
import "./style.scss";
import "./style-tablet.scss";
import "./style-mobile.scss";
import React, { useState, useEffect } from "react";
import { useResponsive } from "../../utils/hooks/useResponsive";
//import PictureModal from "./picture-modal/PictureModal";
import ViewIcon from "./icons/view.svg";

import LeftTop1 from "./images/left-top-1.png";
import LeftTop2 from "./images/left-top-2.png";
import LeftBottom1 from "./images/left-bottom-1.png";
import MiddleTop1 from "./images/middle-top-1.png";
import MiddleBottom1 from "./images/middle-bottom-1.png";
import Right1 from "./images/right-1.png";
import Right2 from "./images/right-2.png";
import Right3 from "./images/mobile-ver.png";

const ProjectsSection = () => {
  const { isTablet, isMobile } = useResponsive();

  const [isPictureFocused, setIsPictureFocused] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const PictureText = () => {
    return (
      <div className="image-text-container">
        <p className="image-text-top">
          Project development
        </p>
        <p className="central-icon">
          <img src={ViewIcon} alt="View" />
        </p>
        <p className="address-container">
          <p className="address-row">
            Some address
          </p>
          <p className="address-row">
            Some city
          </p>
        </p>
      </div>
    )
  };

  useEffect(() => {
    console.log('state: ', selectedImage);
  }, [selectedImage]);

  const handlePictureFocus = () => {
    setIsPictureFocused(!isPictureFocused);
  };

  const handlePictureEnter = () => {
    setIsPictureFocused(true);
  };

  const handlePictureLeave = () => {
    setIsPictureFocused(false);
  };

  return (
    <div className="projects-container lock" id="features">
      <div className="template-container">
        <div id="projects" className="header-1-container">
          <div className="project-header-1">
            Our projects
          </div>
          <div className="projects-header-line" />
        </div>
        <div className="projects-header-2">
          Our latest projects
        </div>
        <div className="links-row">
          <div className="water-supply">
            Water supply sewerage
          </div>
          <div className="fire-systems">
            Fire systems
          </div>
        </div>
        {!isTablet || !isMobile ? (
          <div className="pictures-container">
            <div className="left-image-container">
              <div className="left-top">
                <div className="left-top-1" onClick={() => setSelectedImage("popup__content__lt1")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                  <a href="#popup">
                    <div className="left-top-1-img" />
                    <PictureText />
                  </a>
                </div>
                <div className="left-top-2" onClick={() => setSelectedImage("popup__content__lt2")} onMouseEnter={handlePictureEnter} onMouseLeave={handlePictureLeave}>
                  <a href="#popup">
                    <div className="left-top-2-img" />
                    <PictureText />
                  </a>
                </div>
              </div>
              <div className="left-bottom">
                <div className="left-bottom-1" onClick={() => setSelectedImage("popup__content__lb1")} onMouseEnter={handlePictureEnter} onMouseLeave={handlePictureLeave}>
                  <a href="#popup">
                    <div className="left-bottom-1-img" />
                    <PictureText />
                  </a>
                </div>
              </div>
            </div>
            <div className="middle-image-container">
              <div className="middle-top">
                <div className="middle-top-1" onClick={() => setSelectedImage("popup__content__mt1")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                  <a href="#popup">
                    <div className="middle-top-1-img" />
                    <PictureText />
                  </a>
                </div>
              </div>
              <div className="middle-bottom">
                <div className="middle-bottom-1" onClick={() => setSelectedImage("popup__content__mb1")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                  <a href="#popup">
                    <div className="middle-bottom-1-img" />
                    <PictureText />
                  </a>
                </div>
              </div>
            </div>
            <div className="right-image-container">
              <div className="right-1"  onClick={() => setSelectedImage("popup__content__r1")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                <a href="#popup">
                  <div className="right-1-img" />
                  <PictureText />
                </a>
              </div>
            </div>
          </div>
        ) : null}
        {isTablet ? (
          <div className="tablet-pictures-container">
            <div className="tablet-column">
              <div className="tablet-row">
                <div className="project-image" onClick={() => setSelectedImage("popup__content__tlt1")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                  <a href="#popup-tablet">
                    <img className="tablet-square" src={LeftTop1} alt="Left 1" />
                  </a>
                </div>
                <div className="project-image" onClick={() => setSelectedImage("popup__content__tlt2")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                  <a href="#popup-tablet">
                    <img className="tablet-square" src={LeftTop2} alt="Left 2" />
                  </a>
                </div>
              </div>
              <div className="tablet-row">
                <div className="project-image" onClick={() => setSelectedImage("popup__content__tlb1")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                  <a href="#popup-tablet">
                    <img className="tablet-hor" src={LeftBottom1} alt="Left 3" />
                  </a>
                </div>
              </div>
              <div className="tablet-row">
                <div className="project-image" onClick={() => setSelectedImage("popup__content__tmt1")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                  <a href="#popup-tablet">
                    <img className="tablet-square" src={MiddleTop1} alt="Left 4" />
                  </a>
                </div>
                <div className="project-image" onClick={() => setSelectedImage("popup__content__tmb1")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                  <a href="#popup-tablet">
                    <img className="tablet-square" src={MiddleBottom1} alt="Left 5"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="tablet-column">
              <div className="tablet-row">
                <div className="project-image" onClick={() => setSelectedImage("popup__content__tr1")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                  <a href="#popup-tablet">
                    <img className="tablet-ver" src={Right1} alt="Right 1" />
                  </a>
                </div>
              </div>
              <div className="tablet-row">
                <div className="project-image" onClick={() => setSelectedImage("popup__content__tr2")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                  <a href="#popup-tablet">
                    <img className="tablet-square" src={Right2} alt="Right 2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) :null}
        {isMobile ? (
          <div className="mobile-pictures-container">
            <div className="mobile-top-block">
              <div className="top-column">
                <div className="project-image" onClick={() => setSelectedImage("popup__content__mlt1")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                  <a href="#popup-mobile">
                    <img className="mobile-square" src={LeftTop1} alt="Mobile 1" />
                  </a>
                </div>
                <div className="project-image" onClick={() => setSelectedImage("popup__content__mmt1")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                  <a href="#popup-mobile">
                    <img className="mobile-square" src={MiddleTop1} alt="Mobile 2" />
                  </a>
                </div>
              </div>
              <div className="top-column">
                <div className="project-image" onClick={() => setSelectedImage("popup__content__mr3")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                  <a href="#popup-mobile">
                    <img className="mobile-ver" src={Right3} alt="Mobile 3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mobile-bottom-block">
              <div className="project-image" onClick={() => setSelectedImage("popup__content__mlb1")} onMouseEnter={handlePictureFocus} onMouseLeave={handlePictureFocus}>
                <a href="#popup-mobile">
                  <img className="mobile-hor" src={LeftBottom1} alt="Mobile 4" />
                </a>
              </div>
            </div>
          </div>
        ) : null}
        {/*<div className="view-more-container">
          <button className="view-more-button">
            View more
          </button>
        </div>*/}
      </div>
      <div id="popup" className="popup">
        <div className="popup-area">
          <div className="popup__body">
            <div className={selectedImage}>
              <a href="##" className="popup__close close-popup" onClick={() => setSelectedImage("")}>X</a>
            </div>
          </div>
        </div>
      </div>
      <div id="popup-tablet" className="tablet__popup">
        <div className="tablet__popup__area">
          <div className="tablet__popup__body">
            <div className={selectedImage}>
              <a href="##" className="tablet__popup__close tablet__close__popup" onClick={() => setSelectedImage("")}>X</a>
            </div>
          </div>
        </div>
      </div>
      <div id="popup-mobile" className="mobile__popup">
        <div className="mobile__popup__area">
          <div className="mobile__popup__body">
            <div className={selectedImage}>
              <a href="##" className="mobile__popup__close mobile__close__popup" onClick={() => setSelectedImage("")}>X</a>
            </div>
          </div>
        </div>
      </div>
      <script src="js/popups.js"></script>
    </div>
  )
}

export default ProjectsSection;