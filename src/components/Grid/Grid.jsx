import React from "react";
import first from "../../images/Cards/572_x_250.png";
import second from "../../images/Cards/double-banner.png";
import third from "../../images/Cards/Desktop_Single_Banner__1152x252.jpg";
import fourth from "../../images/Cards/572_x_250 (1).png";
import fifth from "../../images/Cards/Desktop_Double_banner_572px_x250px.jpg";
import "../Main/Main.css";

export default function Grid() {
  return (
    <div className="gridPane">
      <img src={first} alt="" />
      <img src={second} alt="" />
      <img src={third} alt="" className="banner" />
      <img src={fourth} alt="" />
      <img src={fifth} alt="" />
    </div>
  );
}
