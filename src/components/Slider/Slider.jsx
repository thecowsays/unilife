// import { useLocation } from "react-router-dom";

import SliderCSS from "./Slider.module.css";

function Slider() {
  // -- COND RENDER FOR SLIDER HEADING AND TEXT (not working atm)

  //   const location = useLocation();
  //   const { path } = location;

  //    if (path === "/SeeAllCities") {
  //      let sliderText =
  //    <h1>Student Accomodation</h1><p>UniLife have student accommodation available across the UK. Whatever you're after, we can help you find the right student accommodation for you.</p>    ;
  //    } else if (path === "/CityDetails") {
  //      let sliderText =
  //        <h1>Search Accomodation</h1><p>Whatever you're after, we can help you find the right student accommodation for you.</p>;
  //    } else {
  //      let sliderText =
  //        <h1>Find student homes with bills included</h1><p>A simple and faster way to search for student accommodation</p>;
  //    }

  return (
    <div className={SliderCSS.container}>
      <div>
        <h1>Find student homes with bills included</h1>
        <p>A simple and faster way to search for student accommodation</p>
      </div>
    </div>
  );
}

export default Slider;
