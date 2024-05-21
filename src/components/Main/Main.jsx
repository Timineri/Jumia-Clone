import React from "react";
import Pictures from "../Picture";
import { allPictures } from "../../data";
import Section from "../Section/Section";
import ClearanceSales from "./Clearance/ClearanceSales";
import TopSelling from "./TopSales/TopSelling";
import Grid from "../Grid/Grid";
import Picture from "./Pictures/Picture";
import card1 from "../../images/TwoCard/Desktop-Double-banner-572X250-gen-merchandise.jpg";
import card2 from "../../images/TwoCard/spec_572X250.jpg";
import "./Main.css";
import Text from "../Text/Text";
export default function Main() {
  return (
    <>
      <div className="main">
        <Section />
        <ClearanceSales />
        <TopSelling />
        <div className="card">
          <img src={card1} alt="" />
          <img src={card2} alt="" />
        </div>
        {allPictures.map(({ id, category, data }) => {
          return <Pictures key={id} category={category} data={data} />;
        })}
        <Grid />
        <Picture />
        <Text />
      </div>
    </>
  );
}
