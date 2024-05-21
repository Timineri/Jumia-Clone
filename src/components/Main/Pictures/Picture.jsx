import React from "react";
import { pictures } from "../../../data";
import PictureChild from "./PictureChild";

export default function Picture() {
  return (
    <div>
      {pictures.map(({ id, category, data }) => {
        return <PictureChild key={id} category={category} data={data} />;
      })}
    </div>
  );
}
