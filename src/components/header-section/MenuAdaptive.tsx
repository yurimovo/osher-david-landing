import "./style-menu-adaptive.scss";
import React, { useState } from "react";

import MenuAdaptiveBlock from "./MenuAdaptiveBlock";
import BurgerIcon from "./icons/burger_ icon.svg";

const MenuAdaptive = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  return (
    <div className="menu-adaptive-container">
      {!menuOpened ? (
        <div className="burger">
          <img src={BurgerIcon} alt="Open menu" onClick={() => setMenuOpened(true)} />
        </div>
      ) : (
        <MenuAdaptiveBlock setMenuOpened={setMenuOpened}/>
      )}
    </div>
  )
}

export default MenuAdaptive;