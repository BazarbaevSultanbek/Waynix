import "../utils/styles/Main.scss";
import Waynix from "./components/Waynix";
import Categories from "./components/Categories";
import Corporate from "./components/Corporate";
import Footer from "./components/Footer";
import Banner from "./components/banner";

const Main = () => {
  return (
    <>
      <Banner />
      <Waynix />
      <Categories />
      <Corporate />
      <Footer />
    </>
  );
};

export default Main;
