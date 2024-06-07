import "../../main-container.scss";
import "./style.scss";
import React, { useState } from "react";
import {useResponsive} from "../../utils/hooks/useResponsive";

import Logo from "./images/logo.png";
import Facebook from "./icons/fb.svg";
import Twiter from "./icons/tw.svg";
import Instagram from "./icons/ig.svg";

const ContactsSection = () => {
  const { isDesktopLarge, isDesktop, isDesktopSmall, isTablet, isMobile } = useResponsive();

  const [mapAddress, setMapAddress] = useState<string>("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.630833092628!2d74.56996875047051!3d55.049684075088834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x430079f94704d14b%3A0x144f9b3da182dc94!2z0YPQuy4g0JrQuNGA0L7QstCwLCA4Miwg0JrQsNC70LDRh9C40L3RgdC6LCDQntC80YHQutCw0Y8g0L7QsdC7LiwgNjQ2OTAw!5e0!3m2!1sru!2sru!4v1665054575663!5m2!1sru!2sru");
  const [selectedAddress, setSelectedAddress] = useState<boolean>(true);

  const handleSelectFirstAddress = () => {
    setSelectedAddress(true);
    setMapAddress("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2285.630833092628!2d74.56996875047051!3d55.049684075088834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x430079f94704d14b%3A0x144f9b3da182dc94!2z0YPQuy4g0JrQuNGA0L7QstCwLCA4Miwg0JrQsNC70LDRh9C40L3RgdC6LCDQntC80YHQutCw0Y8g0L7QsdC7LiwgNjQ2OTAw!5e0!3m2!1sru!2sru!4v1665054575663!5m2!1sru!2sru")
  };

  const handleSelectSecondAddress = () => {
    setSelectedAddress(false);
    setMapAddress("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2284.93643924404!2d74.5641843056812!3d55.061849161122566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x430079f5a0be8c6b%3A0x1d7e8b068cf043d2!2z0YPQuy4g0KfQtdGA0LXQv9C-0LLQsCDQtNC-0LwsIDYwLCDQmtCw0LvQsNGH0LjQvdGB0LosINCe0LzRgdC60LDRjyDQvtCx0LsuLCA2NDY5MDU!5e0!3m2!1sru!2sru!4v1665054751656!5m2!1sru!2sru")
  };

  return (
    <div className="template-container">
      <div className="contacts-container" id="contact">
        <div className="contacts-main-part">
          <div className="contacts-left-column">
            <div className="contacts-links">
              <div className="contacts-logo">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="links-columns">
                <div>About Us</div>
                <div style={{ marginTop: "10px" }}>Contact</div>
              </div>
              <div className="links-columns">
                <div>Pricing</div>
                <div style={{ marginTop: "10px" }}>Features</div>
              </div>
            </div>
            {isTablet ? (
              <div className="map-tablet-mobile">
                <iframe
                  title="Map"
                  src={mapAddress}
                  width="440"
                  height="330"
                  frameBorder="false"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            ) : null}
            {isMobile ? (
              <div className="map-tablet-mobile">
                <iframe
                  title="Map"
                  src={mapAddress}
                  width="360"
                  height="300"
                  frameBorder="false"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            ) : null}
            <div className="yellow-line" />
            <div className="address-row">
              <div
                className="address-col-1"
                onClick={handleSelectFirstAddress}
              >
                {selectedAddress ? (
                  <>
                    <div className="col-1-header">
                      <div>Northern Branch</div>
                    </div>
                    <div className="address-col-1-text">
                      <div>Marconi 10, Haifa.</div>
                      <div>Phone: 04-8244913</div>
                      <div>Fax: 04-8244914</div>
                      <div>Email: office@s-gilboa.co.il</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-2-header">
                      <div>Northern Branch</div>
                    </div>
                    <div className="address-col-2-text">
                      <div>Marconi 10, Haifa.</div>
                      <div>Phone: 04-8244913</div>
                      <div>Fax: 04-8244914</div>
                      <div>Email: office@s-gilboa.co.il</div>
                    </div>
                  </>
                )}
              </div>
              <div
                className="address-col-2"
                onClick={handleSelectSecondAddress}
              >
                {!selectedAddress ? (
                  <>
                    <div className="col-1-header">
                      <div>Ukraine Branch</div>
                    </div>
                    <div className="address-col-1-text">
                      <div>Odessa</div>
                      <div>Phone: (380) 976737715</div>
                      <div>Email: alexs@s-gilboa.co.il</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-2-header">
                      <div>Ukraine Branch</div>
                    </div>
                    <div className="address-col-2-text">
                      <div>Odessa</div>
                      <div>Phone: (380) 976737715</div>
                      <div>Email: alexs@s-gilboa.co.il</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          {isDesktopLarge || isDesktop || isDesktopSmall ? (
            <div className="contacts-right-column">
              <iframe
                title="Map"
                src={mapAddress}
                width="450"
                height="280"
                frameBorder="false"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          ) : null}
        </div>
        <div className="footer-part">
          <div className="footer-info-container">
            <div className="copyright">
              © Solo Inc. Designed by UI8 Team
            </div>
            <div className="footer-icons-container">
              <div className="footer-icons">
                <img className="footer-icon" src={Facebook} alt="Facebook" />
                <img className="footer-icon" src={Twiter} alt="Twitter" />
                <img className="footer-icon" src={Instagram} alt="Instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsSection;