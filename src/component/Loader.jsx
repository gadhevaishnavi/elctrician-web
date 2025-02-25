import React from "react";
import "../assets/css/Loader.css"; // Import the CSS file for styles

const Loader = () => {
  return (
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;