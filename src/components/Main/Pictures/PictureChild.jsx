import React from "react";
import "../../../index.css";
export default function PictureChild({ category, data }) {
  return (
    <div>
      <h2>{category}</h2>
      <div className="data2">
        {data.map(({ pic, name }) => {
          return (
            <div>
              <img src={pic} alt="" />;<p>{name}</p>;
            </div>
          );
        })}
      </div>
    </div>
  );
}
