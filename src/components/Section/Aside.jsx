import React from "react";

export default function Aside({ icon, iconText }) {
  return (
    <div className="aside">
      <span>{icon}</span>
      <span>{iconText}</span>
    </div>
  );
}
