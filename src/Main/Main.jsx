import "../utils/styles/Main.scss";
import Waynix from "./components/Waynix";
import Categories from "./components/Categories";
import Corporate from "./components/Corporate";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import News from "./components/News";

const Main = () => {
  return (
    <>
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
