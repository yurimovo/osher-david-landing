import "./style-menu.scss";
import React from "react";

const Menu = () => {
  return (
    <ul className="menu-large-container">
      {/* <li className="menu-item"><a href="#pricing">Pricing</a></li> */}
      <li className="menu-item" ><a href="#features">Features</a></li>
      <li className="menu-item" ><a href="#about-us">About Us</a></li>
      <li className="menu-item" ><a href="#contact">Contact</a></li>
      <li className="menu-item" ><a href="#language">En</a></li>
    </ul>
  )
}

export default Menu;