import "../utils/styles/Main.scss";
import Banner from "../utils/banner/Banner";
import Waynix from "./components/Waynix";
import News from "./components/News";
import Categories from "./components/Categories";
import Corporate from "./components/Corporate";
import Weather from "./components/Weather";
import Footer from "../utils/footer/Footer";

const Main = () => {
  return (
    <>
      <Weather />
      <Banner />
      <Waynix />
      <News />
      <Categories />
      <Corporate />
      <Footer />
    </>
  );
};

export default Main;
