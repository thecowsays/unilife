import Header from "./../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";

import HomepageCSS from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={HomepageCSS.container}>
      <Header />
      <Slider />
      <Footer />
    </div>
  );
}

export default Homepage;
