import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./Main/Main";
import Profile from "./Profile/Profile";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import NotificationListener from "./utils/notifications/Notify";
import Hotels from "./Hotels/Hotels";
import Contact from "./Contact/Contact";
import TourObj from "./TourObj/TourObj";

function App() {
  return (
    <BrowserRouter>
      <Notifications position="top-right" />
      <NotificationListener />
      <Routes>
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tours" element={<TourObj />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
