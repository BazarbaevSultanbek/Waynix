import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./Main/Main";
import Profile from "./Profile/Profile";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import NotificationListener from "./utils/notifications/Notify";
import Hotels from "./Hotels/Hotels";

function App() {
  return (
    <BrowserRouter>
      <Notifications position="top-right" />
      <NotificationListener />
      <Routes>
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
