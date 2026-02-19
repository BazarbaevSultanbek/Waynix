import { useEffect, useMemo, useState } from "react";
import Footer from "../utils/footer/Footer";
import getCookie from "../utils/getCookie";
import { Button, FileButton, Modal, Select, Switch, TextInput } from "@mantine/core";
import { fetchCityCountry } from "../utils/location/Getlocation";
import axios from "axios";
import {
  IconPencil,
  IconShare3,
  IconUser,
  IconMapPin,
  IconBookmark,
  IconStar,
  IconSettings,
  IconLogout,
  IconSearch,
  IconFilter,
  IconEdit,
  IconMail,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandLinkedin,
  IconCalendar,
  IconChevronRight,
  IconBell,
  IconMoon,
  IconLanguage,
  IconTypography,
  IconLock,
} from "@tabler/icons-react";
import { profileMock, mockPlaces, mockSaved, mockComments } from "../http/profileMock";
import "./profile.scss";

const tabs = [
  { key: "profile", label: "Profil", icon: <IconUser size={18} /> },
  { key: "places", label: "Joylarim", icon: <IconMapPin size={18} /> },
  { key: "saved", label: "Saqlanganlar", icon: <IconBookmark size={18} /> },
  { key: "comments", label: "Sharhlar", icon: <IconStar size={18} /> },
  { key: "settings", label: "Sozlamalar", icon: <IconSettings size={18} /> },
];

function StarRow({ count }) {
  return (
    <div className="star-row">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} size={14} color={i < count ? "#f6b400" : "#c7ced9"} fill={i < count ? "#f6b400" : "none"} />
      ))}
    </div>
  );
}

export default function Profile() {
  const [opened, setOpened] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [currentUser, setCurrentUser] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [locationText, setLocationText] = useState("");

  const [settingsState, setSettingsState] = useState({
    darkMode: false,
    notifPlaces: true,
    notifComments: true,
    notifMessages: false,
    lang: "uz",
    font: "default",
  });

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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { city, country } = await fetchCityCountry(pos.coords.latitude, pos.coords.longitude);
      setLocationText(`${city}, ${country}`);
    });
  }, []);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone_number: "",
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        id: currentUser.id || "",
        name: currentUser.name || "",
        email: currentUser.email || "",
        phone_number: currentUser.phone_number || "",
      });
    }
  }, [currentUser]);

  const handleUploadAvatar = async () => {
    if (!avatarFile) return;
    const formDataAvatar = new FormData();
    formDataAvatar.append("avatar", avatarFile);

    try {
      const token = getCookie("accessToken");
      const res = await axios.post("https://waynix-server.vercel.app/api/add-avatar", formDataAvatar, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      setCurrentUser(res.data.user);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  const handleSave = async () => {
    try {
      const { data } = await axios.put("https://waynix-server.vercel.app/api/update-profile", formData, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      });
      setCurrentUser(data.user);
      alert("O'zgarishlar saqlandi");
    } catch (err) {
      console.log("Update error:", err);
      alert("Xatolik yuz berdi");
    }
  };

  const stats = useMemo(
    () => ({
      places: mockPlaces.length,
      saved: mockSaved.length,
      comments: mockComments.length,
      rating: "4.6",
    }),
    []
  );

  return (
    <div className="profile-page">
      <Modal opened={opened} onClose={() => setOpened(false)} title="Profilni tahrirlash" centered radius="md" size="md">
        <div className="edit-modal">
          <div className="avatar-preview">
            <img src={avatarPreview || currentUser?.avatar} alt="avatar" />
          </div>

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
                Rasm tanlash
              </Button>
            )}
          </FileButton>

          <Button onClick={handleUploadAvatar} color="teal" fullWidth radius="md">
            Yuklash
          </Button>

          <TextInput label="Ism" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} radius="md" />
          <TextInput label="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} radius="md" />
          <TextInput
            label="Telefon"
            value={formData.phone_number}
            onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
            radius="md"
          />

          <Button color="indigo" fullWidth radius="md" onClick={handleSave}>
            Saqlash
          </Button>
        </div>
      </Modal>

      <header className="profile-top">
        <div className="container profile-top__inner">
          <div className="profile-head-left">
            <img className="profile-avatar" src={currentUser?.avatar} alt="avatar" />
            <div className="profile-head-meta">
              <h1>{currentUser?.name || "Foydalanuvchi"}</h1>
              <p>{stats.places} joylar • {stats.comments} sharhlar</p>
              <div className="profile-socials">
                <a href="#"><IconBrandInstagram size={16} /> Instagram</a>
                <a href="#"><IconBrandTelegram size={16} /> Telegram</a>
                <a href="#"><IconBrandLinkedin size={16} /> LinkedIn</a>
                <a href="#"><IconMail size={16} /> Email</a>
              </div>
            </div>
          </div>

          <div className="profile-head-actions">
            <button onClick={() => setOpened(true)}>
              <IconPencil size={16} /> Tahrirlash
            </button>
            <button>
              <IconShare3 size={16} /> Ulashish
            </button>
          </div>
        </div>
      </header>

      <main className="container profile-layout">
        <aside className="profile-sidebar">
          {tabs.map((tab) => (
            <button key={tab.key} className={`sidebar-item ${activeTab === tab.key ? "active" : ""}`} onClick={() => setActiveTab(tab.key)}>
              {tab.icon} {tab.label}
            </button>
          ))}
          <button className="sidebar-item logout">
            <IconLogout size={18} /> Chiqish
          </button>
        </aside>

        <section className="profile-content">
          {activeTab === "profile" && (
            <>
              <div className="content-card">
                <h2>Haqida</h2>
                <p>{profileMock.about}</p>
                <div className="about-meta">
                  <span><IconMapPin size={14} /> {locationText || "Toshkent, O'zbekiston"}</span>
                  <span><IconCalendar size={14} /> Qo'shilgan: {profileMock.joinedAt}</span>
                </div>
              </div>

              <div className="content-card">
                <h2>Statistika</h2>
                <div className="stats-grid">
                  <div className="stat-box blue"><h3>{stats.places}</h3><p>Qo'shilgan joylar</p></div>
                  <div className="stat-box purple"><h3>{stats.saved}</h3><p>Saqlanganlar</p></div>
                  <div className="stat-box green"><h3>{stats.comments}</h3><p>Sharhlar</p></div>
                  <div className="stat-box yellow"><h3>★ {stats.rating}</h3><p>O'rtacha reyting</p></div>
                </div>
              </div>
            </>
          )}

          {activeTab === "places" && (
            <>
              <div className="content-head">
                <h2>Joylarim</h2>
                <div className="head-actions">
                  <div className="search-box"><IconSearch size={16} /> Joylarni qidirish...</div>
                  <button className="filter-btn"><IconFilter size={16} /> Filtrlash</button>
                </div>
              </div>

              {mockPlaces.map((item) => (
                <div className="list-card" key={item.id}>
                  <div>
                    <h3>{item.name}</h3>
                    <p><IconMapPin size={14} /> {item.location}</p>
                    <span className={`status ${item.status === "Faol" ? "ok" : item.status === "Rad etilgan" ? "bad" : "pending"}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="list-card-actions">
                    <button><IconEdit size={16} /></button>
                    <button><IconShare3 size={16} /></button>
                  </div>
                </div>
              ))}
            </>
          )}

          {activeTab === "saved" && (
            <>
              <div className="content-head">
                <h2>Saqlanganlar</h2>
                <div className="head-actions">
                  <div className="search-box"><IconSearch size={16} /> Saqlangan joylarni qidirish...</div>
                  <button className="filter-btn"><IconFilter size={16} /> Filtrlash</button>
                </div>
              </div>

              <div className="saved-grid">
                {mockSaved.map((item) => (
                  <div className="saved-card" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div className="saved-card-body">
                      <h3>{item.name}</h3>
                      <p><IconMapPin size={14} /> {item.city}</p>
                      <a href="#">Ochish <IconChevronRight size={12} /></a>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "comments" && (
            <>
              <div className="content-head">
                <h2>Mening sharhlarim</h2>
                <div className="head-actions">
                  <div className="search-box"><IconSearch size={16} /> Sharhlarni qidirish...</div>
                  <button className="filter-btn"><IconFilter size={16} /> Filtrlash</button>
                </div>
              </div>

              {mockComments.map((item) => (
                <div className="comment-card" key={item.id}>
                  <h3>{item.place}</h3>
                  <p className="comment-location"><IconMapPin size={14} /> {item.location}</p>
                  <StarRow count={item.rating} />
                  <p className="comment-text">{item.text}</p>
                  <p className="comment-date">{item.date}</p>
                </div>
              ))}
            </>
          )}

          {activeTab === "settings" && (
            <>
              <h2 className="settings-title">Sozlamalar</h2>

              <div className="setting-card">
                <div className="setting-row"><IconLanguage size={20} /><h4>Til</h4></div>
                <Select
                  data={[
                    { value: "uz", label: "O'zbekcha" },
                    { value: "ru", label: "Русский" },
                    { value: "en", label: "English" },
                  ]}
                  value={settingsState.lang}
                  onChange={(v) => setSettingsState((s) => ({ ...s, lang: v || "uz" }))}
                />
              </div>

              <div className="setting-card setting-row-between">
                <div className="setting-row">
                  <IconMoon size={20} />
                  <div><h4>Tungi rejim</h4><p>Yorug' tema yoqilgan</p></div>
                </div>
                <Switch checked={settingsState.darkMode} onChange={(e) => setSettingsState((s) => ({ ...s, darkMode: e.currentTarget.checked }))} />
              </div>

              <div className="setting-card">
                <div className="setting-row"><IconTypography size={20} /><h4>Shrift</h4></div>
                <Select
                  data={[
                    { value: "default", label: "Standart" },
                    { value: "large", label: "Katta" },
                    { value: "compact", label: "Kichik" },
                  ]}
                  value={settingsState.font}
                  onChange={(v) => setSettingsState((s) => ({ ...s, font: v || "default" }))}
                />
              </div>

              <div className="setting-card">
                <div className="setting-row"><IconBell size={20} /><h4>Bildirishnomalar</h4></div>

                <div className="notif-item">
                  <div><strong>Yangi joylar</strong><p>Yaqin atrofdagi yangi joylar haqida</p></div>
                  <Switch checked={settingsState.notifPlaces} onChange={(e) => setSettingsState((s) => ({ ...s, notifPlaces: e.currentTarget.checked }))} />
                </div>

                <div className="notif-item">
                  <div><strong>Sharhlar</strong><p>Joylaringizga yangi sharhlar</p></div>
                  <Switch checked={settingsState.notifComments} onChange={(e) => setSettingsState((s) => ({ ...s, notifComments: e.currentTarget.checked }))} />
                </div>

                <div className="notif-item">
                  <div><strong>Xabarlar</strong><p>Yangi xabarlar va javoblar</p></div>
                  <Switch checked={settingsState.notifMessages} onChange={(e) => setSettingsState((s) => ({ ...s, notifMessages: e.currentTarget.checked }))} />
                </div>
              </div>

              <button className="setting-link">
                <span><IconLock size={18} /> Parolni o'zgartirish</span>
                <IconChevronRight size={16} />
              </button>

              <button className="setting-link logout-link">
                <span><IconLogout size={18} /> Chiqish</span>
              </button>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
