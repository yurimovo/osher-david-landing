import "../../main-container.scss";
import "./style.scss";
import React from "react";
import { useResponsive } from "../../utils/hooks/useResponsive";

import Menu from "./Menu";
import MenuAdaptive from "./MenuAdaptive";
import Logo from "./images/logo.svg";
import Imagelarge from "./images/image-large.png";
import ImageDesktop from "./images/image-desktop.png";
import ImageDesktopSmall from "./images/image-desktop-small.png";
import ImageTablet from "./images/image-tablet.png";
import ImageMobile from "./images/image-mobile.png";
import BottomLogosDesktopLarge from "./images/logos-large.png";
import BottomLogosDesktop from "./images/logos-desktop.png";
import BottomLogosDesktopSmall from "./images/logos-desktop-small.png";
import BottomLogosTablet from "./images/logos-tablet.png";
import BottomLogosMobile from "./images/logos-mobile.png";


const HeaderSection = () => {
  const { isDesktopLarge, isDesktop, isDesktopSmall, isTablet, isMobile } = useResponsive();

  return (
    <div className="header-section-container">
      <div className="template-container">
        <div className="menu-container">
          <div className="menu-logo">
            <img className="menu-logo-img" src={Logo} alt="Logo" />
          </div>
          <div className="menu-block">
            {isDesktopLarge || isDesktop ? (
              <Menu />
            ) : null}
            {isDesktopSmall || isTablet || isMobile ? (
              <MenuAdaptive />
            ) : null}
          </div>
        </div>
        <div className="central-block-container">
          <div className="info-column">
            <div className="info-header">
              Water supply <span className="inline-span"> sewerage</span> and fire systems
            </div>
            <div className="connect-container">
              <div className="connect-button-container">
                <button className="connect-button">Connect with us</button>
              </div>
              <div className="connect-text">
                Leave your details and we will contact you shortly
              </div>
            </div>
          </div>
          <div className="picture-column">
            {isDesktopLarge ? <img className="header-picture" src={Imagelarge} alt="Main" /> : null}
            {isDesktop ? <img className="header-picture" src={ImageDesktop} alt="Main" /> : null}
            {isDesktopSmall ? <img className="header-picture" src={ImageDesktopSmall} alt="Main" /> : null}
            {isTablet ? <img className="header-picture" src={ImageTablet} alt="Main" /> : null}
            {isMobile ? <img className="header-picture" src={ImageMobile} alt="Main" /> : null}
          </div>
        </div>
        <div className="bottom-block-container">
          <div className="bottom-images-row">
            {isDesktopLarge ? <img src={BottomLogosDesktopLarge} alt="Logos"/> : null}
            {isDesktop ? <img src={BottomLogosDesktop} alt="Logos"/> : null}
            {isDesktopSmall ? <img src={BottomLogosDesktopSmall} alt="Logos"/> : null}
            {isTablet ? <img src={BottomLogosTablet} alt="Logos"/> : null}
            {isMobile ? <img src={BottomLogosMobile} alt="Logos"/> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection;