import React from "react";
import "./Section.css";
import banner from "../../images/Artboard_1.jpg";
import shopEarn from "../../images/shop_earn.png";
import Aside from "./Aside";
import { asideData } from "../../data";

export default function Section() {
  return (
    <div className="grid">
      <div className="grid-child">
        <img src={shopEarn} alt="" />
      </div>
      <div className="child aside-child">
        {asideData.map(({ icon, iconText }) => {
          return <Aside key={icon} icon={icon} iconText={iconText} />;
        })}
      </div>
      <img src={banner} alt="" className="child" />
      <img src={shopEarn} alt="" />
    </div>
  );
}
