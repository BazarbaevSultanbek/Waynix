import "../utils/styles/Main.scss";
import Waynix from "./components/Waynix";
import Categories from "./components/Categories";
import Corporate from "./components/Corporate";
import Footer from "../utils/footer/Footer";
import Banner from "./components/Banner";
import News from "./components/News";
import Weather from "./components/Weather";

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
