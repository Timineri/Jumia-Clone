import React from "react";
export default function Sales({ id, pic, name }) {
  return (
    <div>
      <div key={id}>
        <img src={pic} alt="" />
        <p>{name}</p>
      </div>
    </div>
  );
}
