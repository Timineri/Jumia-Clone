import React from "react";
import { topSellingItems } from "../../../data";
import Top from "./Top";
import "../Main.css";

export default function TopSelling() {
  return (
    <div className="top">
      {topSellingItems.map(({ id, name, pic }) => {
        return <Top key={id} name={name} pic={pic} />;
      })}
    </div>
  );
}

// import "./Main.css";
// export default function ClearanceSales() {
//   return (
//     <div className="sales">
//       {clearanceSales.map(({ id, name, pic }) => {
//         return <Sales key={id} name={name} pic={pic} />;
//       })}
//     </div>
//   );
// }
