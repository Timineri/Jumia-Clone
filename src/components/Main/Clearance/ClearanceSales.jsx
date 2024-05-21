import React from "react";
import { clearanceSales } from "../../../data";
import Sales from "./Sales";
import "../Main.css";
export default function ClearanceSales() {
  return (
    <div className="sales">
      {clearanceSales.map(({ id, name, pic }) => {
        return <Sales key={id} name={name} pic={pic} />;
      })}
    </div>
  );
}
