import React from "react";
import Pictures from "../Picture";
import { allPictures } from "../../data";
import Section from "../Section/Section";
import ClearanceSales from "./ClearanceSales";

export default function Main() {
  return (
    <>
      <div className="main">
        <Section />
        <ClearanceSales />
        {allPictures.map(({ id, category, data }) => {
          return <Pictures key={id} category={category} data={data} />;
        })}
      </div>
    </>
  );
}
