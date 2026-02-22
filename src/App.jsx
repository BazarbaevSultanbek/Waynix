import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./Main/Main";
import Profile from "./Profile/Profile";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import NotificationListener from "./utils/notifications/Notify";
import Contact from "./Contact/Contact";
import About from "./About/About";

import ToursPage from "./Catalog/pages/ToursPage";
import ShopsPage from "./Catalog/pages/ShopsPage";
import CafesPage from "./Catalog/pages/CafesPage";
import HotelsPage from "./Catalog/pages/HotelsPage";
import ServicesPage from "./Catalog/pages/ServicesPage";
import EntertainmentPage from "./Catalog/pages/EntertainmentPage";
import MedicalPage from "./Catalog/pages/MedicalPage";
import GovernmentPage from "./Catalog/pages/GovernmentPage";
import EducationPage from "./Catalog/pages/EducationPage";

import ToursDetailPage from "./Catalog/pages/ToursDetailPage";
import ShopsDetailPage from "./Catalog/pages/ShopsDetailPage";
import CafesDetailPage from "./Catalog/pages/CafesDetailPage";
import HotelsDetailPage from "./Catalog/pages/HotelsDetailPage";
import ServicesDetailPage from "./Catalog/pages/ServicesDetailPage";
import EntertainmentDetailPage from "./Catalog/pages/EntertainmentDetailPage";
import MedicalDetailPage from "./Catalog/pages/MedicalDetailPage";
import GovernmentDetailPage from "./Catalog/pages/GovernmentDetailPage";
import EducationDetailPage from "./Catalog/pages/EducationDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Notifications position="top-right" zIndex={3000} />
      <NotificationListener />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/tours" element={<ToursPage />} />
        <Route path="/shop" element={<ShopsPage />} />
        <Route path="/cafe" element={<CafesPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/entertainment" element={<EntertainmentPage />} />
        <Route path="/medical" element={<MedicalPage />} />
        <Route path="/government" element={<GovernmentPage />} />
        <Route path="/education" element={<EducationPage />} />

        <Route path="/tours/:id" element={<ToursDetailPage />} />
        <Route path="/shop/:id" element={<ShopsDetailPage />} />
        <Route path="/cafe/:id" element={<CafesDetailPage />} />
        <Route path="/hotels/:id" element={<HotelsDetailPage />} />
        <Route path="/services/:id" element={<ServicesDetailPage />} />
        <Route
          path="/entertainment/:id"
          element={<EntertainmentDetailPage />}
        />
        <Route path="/medical/:id" element={<MedicalDetailPage />} />
        <Route path="/government/:id" element={<GovernmentDetailPage />} />
        <Route path="/education/:id" element={<EducationDetailPage />} />

        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
