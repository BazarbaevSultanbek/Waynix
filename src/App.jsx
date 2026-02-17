import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./Main/Main";
import Profile from "./Profile/Profile";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import NotificationListener from "./utils/notifications/Notify";
import Hotels from "./Categories/Hotels/Hotels";
import Contact from "./Contact/Contact";
import TourObj from "./TourObj/TourObj";
import Object from "./Object/Object";
import About from "./About/About";
import Shop from "./Categories/Shop/Shop";
import Cafe from "./Categories/Cafe/Cafe";
import Services from "./Categories/Services/Services";
import Entertainment from "./Categories/Entertainment/Entertainment";
import Medical from "./Categories/Medical/Medical";
import Government from "./Categories/Government/Gover";
import Education from "./Categories/Education/Education";


function App() {
  return (
    <BrowserRouter>
      <Notifications position="top-right" />
      <NotificationListener />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Main />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/government" element={<Government />} />
        <Route path="/education" element={<Education />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tours" element={<TourObj />} />
        <Route path="/tours/id" element={<Object />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
