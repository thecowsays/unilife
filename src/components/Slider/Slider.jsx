import { useLocation } from "react-router-dom";
import { useState } from "react";

import SliderCSS from "./Slider.module.css";
import { useEffect } from "react";

function Slider() {
  // I want to show different text depending on which page is viewed.
  // How can I determine the current page? -- useLocation
  const location = useLocation();
  const { path } = location;

  useEffect(() => {
    if (path === "/SeeAllCities") {
      return;
    }
  }, []);

  return (
    <div className={SliderCSS.container}>
      <div>
        <h1>Sample Heading</h1>
        <p>Sample paragraph</p>
      </div>
    </div>
  );
}

export default Slider;
