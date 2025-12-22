import { useEffect, useState } from "react";
import "../utils/styles/Profile.scss";
import Footer from "./components/Footer";
import getCookie from "../utils/getCookie";
import {
  Button,
  FileButton,
  Modal,
  Select,
  Tabs,
  TextInput,
} from "@mantine/core";
import { fetchCityCountry } from "../utils/location/Getlocation";
import axios from "axios";

export default function Profile() {
  const [opened, setOpened] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);

  useEffect(() => {
    const cookieValue = getCookie("currentUser");
    if (cookieValue) {
      try {
        const userObj = JSON.parse(decodeURIComponent(cookieValue));
        setCurrentUser(userObj);
      } catch (err) {
        console.error("Cookie parse error:", err);
      }
    }
  }, []);

  const [locationText, setLocationText] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { city, country } = await fetchCityCountry(
        pos.coords.latitude,
        pos.coords.longitude
      );

      setLocationText(`${city}, ${country}`);
    });
  }, []);

  const handleUploadAvatar = async () => {
    if (!avatarFile) return;

    const formData = new FormData();
    formData.append("avatar", avatarFile);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const token = getCookie("accessToken");
      const res = await axios.post(
        "http://https://waynix-server.vercel.app/api/add-avatar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      console.log("Uploaded:", res.data);
      setCurrentUser(res.data.user);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  const [formData, setFormData] = useState({
    id: currentUser?.id || "",
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    phone_number: currentUser?.phone_number || "",
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
        phone_number: currentUser.phone_number,
      });
    }
  }, [currentUser]);

const handleSave = async () => {
  try {
    const { data } = await axios.put(
      "http://https://waynix-server.vercel.app/api/update-profile",
      formData,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      }
    );
    console.log(formData);
    setCurrentUser(data.user); // Update frontend state
    alert("O'zgarishlar saqlandi!");
  } catch (err) {
    console.log("Update error:", err);
    alert("Xatolik yuz berdi");
  }
};


  return (
    <div className="profile-wrapper">
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Profilni tahrirlash"
        centered
        radius="md"
        size="md"
      >
        <div className="edit-modal">
          {/* Avatar preview */}
          <div className="avatar-preview">
            <img src={avatarPreview || currentUser?.avatar} alt="avatar" />
          </div>

          {/* Upload button */}
          <FileButton
            onChange={(file) => {
              if (file) {
                setAvatarFile(file);
                setAvatarPreview(URL.createObjectURL(file));
              }
            }}
            accept="image/*"
          >
            {(props) => (
              <Button {...props} color="indigo" fullWidth radius="md">
                Rasm yuklash
              </Button>
            )}
          </FileButton>

          <Button
            onClick={handleUploadAvatar}
            color="teal"
            fullWidth
            radius="md"
            mt="md"
          >
            Yuklash
          </Button>
        </div>
      </Modal>

      <div className="container">
        {/* ---------------- HEADER ---------------- */}
        <div className="profile-header">
          <div className="container">
            <div className="profile-header-content">
              <div className="profile-header-avatar">
                <img src={currentUser?.avatar} alt="avatar" />
              </div>

              <div className="profile-header-info">
                <h2>{currentUser?.name}</h2>
                <p className="profile-location">📍 {locationText}</p>
                <p className="profile-bio">
                  Sayohat qilishni yaxshi ko‘raman. O‘zbekistonning go‘zal
                  joylarini kashf qilmoqdaman.
                </p>

                <button
                  className="edit-profile-btn"
                  onClick={() => setOpened(true)}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                  Profilni tahrirlash
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- TABS ---------------- */}
        <Tabs
          defaultValue="umumiy"
          variant="pills"
          color="indigo"
          radius="md"
          className="profile-tabs"
        >
          <Tabs.List grow>
            <Tabs.Tab value="umumiy">Umumiy</Tabs.Tab>
            <Tabs.Tab value="bandliklar">Bandliklar</Tabs.Tab>
            <Tabs.Tab value="joylar">Joylar</Tabs.Tab>
            <Tabs.Tab value="saqlangan">Saqlangan</Tabs.Tab>
            <Tabs.Tab value="sharhlarim">Sharhlarim</Tabs.Tab>
            <Tabs.Tab value="tarix">Tarix</Tabs.Tab>
            <Tabs.Tab value="sozlamalar">Sozlamalar</Tabs.Tab>
          </Tabs.List>

          {/* ============= UMUMIY TAB CONTENT ============= */}
          <Tabs.Panel value="umumiy" pt="lg">
            {/* --------------- STATS ---------------- */}
            <div className="profile-stats">
              <div className="container">
                <div className="stats-grid">
                  <div className="stat-card blue">
                    <i className="fa-regular fa-calendar"></i>
                    <h3>12</h3>
                    <p>Bandliklar</p>
                  </div>

                  <div className="stat-card green">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>8</h3>
                    <p>Joylar</p>
                  </div>

                  <div className="stat-card orange">
                    <i className="fa-regular fa-message"></i>
                    <h3>15</h3>
                    <p>Sharhlar</p>
                  </div>

                  <div className="stat-card pink">
                    <i className="fa-regular fa-bookmark"></i>
                    <h3>24</h3>
                    <p>Saq­langan</p>
                  </div>

                  <div className="contact-card">
                    <h4>Aloqa ma’lumotlari</h4>
                    <p>📧 {currentUser?.email}</p>
                    <p>📞 {currentUser?.phone_number}</p>
                    <p>🌐 O‘zbek</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------- UPCOMING TRAVELS ---------------- */}
            <div className="upcoming-section">
              <div className="container">
                <h3>Yaqinlashib kelayotgan sayohatlar</h3>
                <div className="upcoming-list">
                  {/* ... your upcoming items ... */}
                </div>
              </div>
            </div>

            {/* ------------- FAVORITE PLACES ---------------- */}
            <div className="favorite-section">
              <div className="container">
                <h3>Sevimli joylar</h3>

                <div className="favorite-grid">
                  {/* ... your favorite items ... */}
                </div>
              </div>
            </div>
          </Tabs.Panel>

          {/* ============= BANDLIKLAR TAB ============= */}
          <Tabs.Panel value="bandliklar" pt="lg">
            <h3>Bandliklar</h3>
            {/* Your content here */}
          </Tabs.Panel>

          {/* ============= JOYLAR TAB ============= */}
          <Tabs.Panel value="joylar" pt="lg">
            <h3>Joylar</h3>
            {/* Joylar content */}
          </Tabs.Panel>

          {/* ============= SAQLANGAN TAB ============= */}
          <Tabs.Panel value="saqlangan" pt="lg">
            <h3>Saqlangan</h3>
          </Tabs.Panel>

          {/* ============= SHARHLARIM TAB ============= */}
          <Tabs.Panel value="sharhlarim" pt="lg">
            <h3>Sharhlarim</h3>
          </Tabs.Panel>

          {/* ============= TARIX TAB ============= */}
          <Tabs.Panel value="tarix" pt="lg">
            <h3>Tarix</h3>
          </Tabs.Panel>

          {/* ============= SOZLAMALAR TAB ============= */}
          <Tabs.Panel value="sozlamalar" pt="lg">
            <div className="settings-section">
              <div className="settings-form">
                <TextInput
                  label="Ism"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  radius="md"
                  size="md"
                />

                <TextInput
                  label="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  radius="md"
                  size="md"
                />

                <TextInput
                  label="Telefon raqam"
                  value={formData.phone_number}
                  onChange={(e) =>
                    setFormData({ ...formData, phone_number: e.target.value })
                  }
                  radius="md"
                  size="md"
                />

                <Select
                  label="Til"
                  placeholder="Tilni tanlang"
                  data={[
                    { value: "uz", label: "O‘zbekcha" },
                    { value: "ru", label: "Русский" },
                    { value: "en", label: "English" },
                  ]}
                  defaultValue="uz"
                  radius="md"
                  size="md"
                />

                <Button
                  color="indigo"
                  size="md"
                  radius="md"
                  fullWidth
                  mt="md"
                  onClick={handleSave}
                >
                  O‘zgarishlarni saqlash
                </Button>
              </div>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
