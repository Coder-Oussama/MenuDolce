// import React from "react";
import LabTabs from "./TabsMenu";
import "./menuStyle.css";
const Menu = () => {
  return (
    <>
      <div className="menu-container">
        
        <h2 className="menu-heading ">All Day Menu</h2>
        <div className="menu-list">
          <LabTabs />
        </div>
        
      </div>
    </>
  );
};

export default Menu;
