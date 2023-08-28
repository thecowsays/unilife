import Header from "./../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import Search from "../../components/Search/Search";

import HomepageCSS from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={HomepageCSS.container}>
      <Header />
      <Slider />
      <Search />
      <Footer />
    </div>
  );
}

export default Homepage;
