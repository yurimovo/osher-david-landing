import React from "react";

import CloseButton from "./icons/close_icon.svg";
import Logo from "./images/logo.svg";
import ChatIcon from "./icons/live-chat-icon.svg";

interface IMenuAdaptiveBlock {
  setMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuAdaptiveBlock: React.FC<IMenuAdaptiveBlock> = ({ setMenuOpened }) => {
  return (
    <div className="menu-adaptive-block">
      <div className="close-container">
        <img className="adaptive-menu-logo" src={Logo} alt="Logo" />
        <img src={CloseButton} alt="Close menu" onClick={() => setMenuOpened(false)} />
      </div>
      <ul className="menu-adaptive-block-container">
        <li className="menu-adaptive-item"><a href="#pricing">Pricing</a></li>
        <li className="menu-adaptive-item"><a href="#features">Features</a></li>
        <li className="menu-adaptive-item"><a href="#about">About us</a></li>
        <li className="menu-adaptive-item"><a href="#contact">Contact</a></li>
        <li className="menu-adaptive-item">En Ua</li>
      </ul>
      <div className="bottom-menu-adaptive-container">
        <div className="column-1">
          <div className="row-1">Talk to sale</div>
          <div className="row-2">office@s-gilboa.co.il</div>
        </div>
        <div className="column-2">
          <img src={ChatIcon} alt="Chat" />
        </div>
      </div>
    </div>
  )
}

export default MenuAdaptiveBlock;