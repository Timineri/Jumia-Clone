import React from "react";

export default function Top({ id, pic, name }) {
  return (
    <div key={id}>
      <img src={pic} alt="" />
      <p>{name}</p>
    </div>
  );
}
