import React from "react";
import "./index.css";
import Logo from "../../assets/pokemon.svg";
export default function Index() {
  return (
    <div className="headerWithLogo">
      <img src={Logo} alt="Pokemon-Logo" width="25%" />
    </div>
  );
}