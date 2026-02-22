import { useEffect, useMemo, useState } from "react";
import Footer from "../utils/footer/Footer";
import getCookie from "../utils/getCookie";
import {
  Button,
  FileButton,
  Modal,
  Select,
  Switch,
  TextInput,
  Textarea,
} from "@mantine/core";
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
import "./profile.scss";
import Banner from "../utils/banner/Banner";

const API = "http://localhost:8001/api";

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
        <IconStar
          key={i}
          size={14}
          color={i < count ? "#f6b400" : "#c7ced9"}
          fill={i < count ? "#f6b400" : "none"}
        />
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    bio: "",
    location: "",
    socials: {
      instagram: "",
      telegram: "",
      facebook: "",
      linkedin: "",
      website: "",
    },
    settings: {
      language: "uz",
      theme: "light",
      fontSize: "medium",
      notifications: {
        newPlaces: true,
        comments: true,
        messages: true,
      },
    },
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
    const loadMe = async () => {
      try {
        const { data } = await $api.get("/refresh");
        if (data?.user) {
          setCurrentUser(data.user);
          dispatch(setUser(data.user));
        }
      } catch (err) {
        if (err?.response?.status === 401) return; // normal when not logged in
        console.error("Refresh failed:", err?.response?.data || err.message);
      }
    };
    loadMe();
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    setFormData({
      name: currentUser.name || "",
      email: currentUser.email || "",
      phone_number: currentUser.phone_number || "",
      bio: currentUser.bio || "",
      location: currentUser.location || "",
      socials: {
        instagram: currentUser.socials?.instagram || "",
        telegram: currentUser.socials?.telegram || "",
        facebook: currentUser.socials?.facebook || "",
        linkedin: currentUser.socials?.linkedin || "",
        website: currentUser.socials?.website || "",
      },
      settings: {
        language: currentUser.settings?.language || "uz",
        theme: currentUser.settings?.theme || "light",
        fontSize: currentUser.settings?.fontSize || "medium",
        notifications: {
          newPlaces: currentUser.settings?.notifications?.newPlaces ?? true,
          comments: currentUser.settings?.notifications?.comments ?? true,
          messages: currentUser.settings?.notifications?.messages ?? true,
        },
      },
    });
  }, [currentUser]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { city, country } = await fetchCityCountry(
        pos.coords.latitude,
        pos.coords.longitude,
      );
      setLocationText(`${city}, ${country}`);
    });
  }, []);

  const handleUploadAvatar = async () => {
    if (!avatarFile) return;

    const fd = new FormData();
    fd.append("avatar", avatarFile);

    try {
      const { data } = await axios.post(`${API}/add-avatar`, fd, {
        withCredentials: true, // ✅ COOKIE SENT
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setCurrentUser(data.user);
    } catch (err) {
      console.error("Upload error:", err?.response?.data || err.message);
    }
  };

  const handleSave = async () => {
    try {
      const { data } = await axios.put(`${API}/update-profile`, formData, {
        withCredentials: true, // ✅ COOKIE SENT
      });

      setCurrentUser(data.user);
      alert("O'zgarishlar saqlandi");
      setOpened(false);
    } catch (err) {
      console.log("Update error:", err?.response?.data || err.message);
      alert("Xatolik yuz berdi");
    }
  };

  const stats = useMemo(
    () => ({
      places: currentUser?.visitedPlaces?.length || 0,
      saved: currentUser?.savedPlaces?.length || 0,
      comments: currentUser?.comments?.length || 0,
      rating: "0.0",
    }),
    [currentUser],
  );

  const savedPlaces = currentUser?.savedPlaces || [];
  const visitedPlaces = currentUser?.visitedPlaces || [];
  const comments = currentUser?.comments || [];

  return (
    <>
      <div className="profile-page">
        <Banner />
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Profilni tahrirlash"
          centered
          radius="md"
          size="md"
        >
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

            <Button
              onClick={handleUploadAvatar}
              color="teal"
              fullWidth
              radius="md"
            >
              Yuklash
            </Button>

            <TextInput
              label="Ism"
              value={formData.name}
              onChange={(e) =>
                setFormData((s) => ({ ...s, name: e.target.value }))
              }
              radius="md"
            />
            <TextInput
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData((s) => ({ ...s, email: e.target.value }))
              }
              radius="md"
            />
            <TextInput
              label="Telefon"
              value={formData.phone_number}
              onChange={(e) =>
                setFormData((s) => ({ ...s, phone_number: e.target.value }))
              }
              radius="md"
            />
            <TextInput
              label="Location"
              value={formData.location}
              onChange={(e) =>
                setFormData((s) => ({ ...s, location: e.target.value }))
              }
              radius="md"
            />
            <Textarea
              label="Bio"
              value={formData.bio}
              onChange={(e) =>
                setFormData((s) => ({ ...s, bio: e.target.value }))
              }
              minRows={3}
            />

            <Button color="indigo" fullWidth radius="md" onClick={handleSave}>
              Saqlash
            </Button>
          </div>
        </Modal>

        <header className="profile-top">
          <div className="container profile-top__inner">
            <div className="profile-head-left">
              <img
                className="profile-avatar"
                src={currentUser?.avatar}
                alt="avatar"
              />
              <div className="profile-head-meta">
                <h1>{currentUser?.name || "Foydalanuvchi"}</h1>
                <p>
                  {stats.places} joylar • {stats.comments} sharhlar
                </p>
                <div className="profile-socials">
                  <a href={currentUser?.socials?.instagram || "#"}>
                    <IconBrandInstagram size={16} /> Instagram
                  </a>
                  <a href={currentUser?.socials?.telegram || "#"}>
                    <IconBrandTelegram size={16} /> Telegram
                  </a>
                  <a href={currentUser?.socials?.linkedin || "#"}>
                    <IconBrandLinkedin size={16} /> LinkedIn
                  </a>
                  <a href={`mailto:${currentUser?.email || ""}`}>
                    <IconMail size={16} /> Email
                  </a>
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
              <button
                key={tab.key}
                className={`sidebar-item ${activeTab === tab.key ? "active" : ""}`}
                onClick={() => setActiveTab(tab.key)}
              >
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
                  <p>{currentUser?.bio || "Bio hali qo'shilmagan."}</p>
                  <div className="about-meta">
                    <span>
                      <IconMapPin size={14} />{" "}
                      {currentUser?.location || locationText || "Location yo'q"}
                    </span>
                    <span>
                      <IconCalendar size={14} /> Qo'shilgan:{" "}
                      {currentUser?.joinedAt
                        ? new Date(currentUser.joinedAt).toLocaleDateString()
                        : "-"}
                    </span>
                  </div>
                </div>

                <div className="content-card">
                  <h2>Statistika</h2>
                  <div className="stats-grid">
                    <div className="stat-box blue">
                      <h3>{stats.places}</h3>
                      <p>Qo'shilgan joylar</p>
                    </div>
                    <div className="stat-box purple">
                      <h3>{stats.saved}</h3>
                      <p>Saqlanganlar</p>
                    </div>
                    <div className="stat-box green">
                      <h3>{stats.comments}</h3>
                      <p>Sharhlar</p>
                    </div>
                    <div className="stat-box yellow">
                      <h3>★ {stats.rating}</h3>
                      <p>O'rtacha reyting</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === "places" && (
              <>
                <div className="content-head">
                  <h2>Joylarim</h2>
                  <div className="head-actions">
                    <div className="search-box">
                      <IconSearch size={16} /> Joylarni qidirish...
                    </div>
                    <button className="filter-btn">
                      <IconFilter size={16} /> Filtrlash
                    </button>
                  </div>
                </div>

                {!visitedPlaces.length ? (
                  <div className="content-card">
                    <p>Joylar hozircha yo'q.</p>
                  </div>
                ) : (
                  visitedPlaces.map((item, idx) => (
                    <div className="list-card" key={idx}>
                      <div>
                        <h3>{item}</h3>
                        <p>
                          <IconMapPin size={14} /> Joy ma'lumoti keyin
                          qo'shiladi
                        </p>
                        <span className="status ok">Faol</span>
                      </div>
                      <div className="list-card-actions">
                        <button>
                          <IconEdit size={16} />
                        </button>
                        <button>
                          <IconShare3 size={16} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </>
            )}

            {activeTab === "saved" && (
              <>
                <div className="content-head">
                  <h2>Saqlanganlar</h2>
                  <div className="head-actions">
                    <div className="search-box">
                      <IconSearch size={16} /> Saqlangan joylarni qidirish...
                    </div>
                    <button className="filter-btn">
                      <IconFilter size={16} /> Filtrlash
                    </button>
                  </div>
                </div>

                {!savedPlaces.length ? (
                  <div className="content-card">
                    <p>Saqlangan joylar hozircha yo'q.</p>
                  </div>
                ) : (
                  <div className="saved-grid">
                    {savedPlaces.map((item, idx) => (
                      <div className="saved-card" key={idx}>
                        <div className="saved-card-body">
                          <h3>{item}</h3>
                          <p>
                            <IconMapPin size={14} /> Joy ma'lumoti keyin
                            qo'shiladi
                          </p>
                          <a href="#">
                            Ochish <IconChevronRight size={12} />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {activeTab === "comments" && (
              <>
                <div className="content-head">
                  <h2>Mening sharhlarim</h2>
                  <div className="head-actions">
                    <div className="search-box">
                      <IconSearch size={16} /> Sharhlarni qidirish...
                    </div>
                    <button className="filter-btn">
                      <IconFilter size={16} /> Filtrlash
                    </button>
                  </div>
                </div>

                {!comments.length ? (
                  <div className="content-card">
                    <p>Sharhlar hozircha yo'q.</p>
                  </div>
                ) : (
                  comments.map((item, idx) => (
                    <div className="comment-card" key={idx}>
                      <h3>{item.placeId || "Joy"}</h3>
                      <p className="comment-location">
                        <IconMapPin size={14} /> {item.location || "-"}
                      </p>
                      <StarRow count={item.rating || 5} />
                      <p className="comment-text">{item.text}</p>
                      <p className="comment-date">
                        {item.createdAt
                          ? new Date(item.createdAt).toLocaleDateString()
                          : "-"}
                      </p>
                    </div>
                  ))
                )}
              </>
            )}

            {activeTab === "settings" && (
              <>
                <h2 className="settings-title">Sozlamalar</h2>

                <div className="setting-card">
                  <div className="setting-row">
                    <IconLanguage size={20} />
                    <h4>Til</h4>
                  </div>
                  <Select
                    data={[
                      { value: "uz", label: "O'zbek" },
                      { value: "kaa", label: "Qaraqalpaq" },
                      { value: "ru", label: "Русский" },
                      { value: "en", label: "English" },
                    ]}
                    value={formData.settings.language}
                    onChange={(v) =>
                      setFormData((s) => ({
                        ...s,
                        settings: { ...s.settings, language: v || "uz" },
                      }))
                    }
                  />
                </div>

                <div className="setting-card setting-row-between">
                  <div className="setting-row">
                    <IconMoon size={20} />
                    <div>
                      <h4>Tungi rejim</h4>
                      <p>
                        {formData.settings.theme === "dark"
                          ? "Qorong'i tema yoqilgan"
                          : "Yorug' tema yoqilgan"}
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={formData.settings.theme === "dark"}
                    onChange={(e) =>
                      setFormData((s) => ({
                        ...s,
                        settings: {
                          ...s.settings,
                          theme: e.currentTarget.checked ? "dark" : "light",
                        },
                      }))
                    }
                  />
                </div>

                <div className="setting-card">
                  <div className="setting-row">
                    <IconTypography size={20} />
                    <h4>Shrift</h4>
                  </div>
                  <Select
                    data={[
                      { value: "small", label: "Kichik" },
                      { value: "medium", label: "Standart" },
                      { value: "large", label: "Katta" },
                    ]}
                    value={formData.settings.fontSize}
                    onChange={(v) =>
                      setFormData((s) => ({
                        ...s,
                        settings: { ...s.settings, fontSize: v || "medium" },
                      }))
                    }
                  />
                </div>

                <div className="setting-card">
                  <div className="setting-row">
                    <IconBell size={20} />
                    <h4>Bildirishnomalar</h4>
                  </div>

                  <div className="notif-item">
                    <div>
                      <strong>Yangi joylar</strong>
                      <p>Yaqin atrofdagi yangi joylar haqida</p>
                    </div>
                    <Switch
                      checked={formData.settings.notifications.newPlaces}
                      onChange={(e) =>
                        setFormData((s) => ({
                          ...s,
                          settings: {
                            ...s.settings,
                            notifications: {
                              ...s.settings.notifications,
                              newPlaces: e.currentTarget.checked,
                            },
                          },
                        }))
                      }
                    />
                  </div>

                  <div className="notif-item">
                    <div>
                      <strong>Sharhlar</strong>
                      <p>Joylaringizga yangi sharhlar</p>
                    </div>
                    <Switch
                      checked={formData.settings.notifications.comments}
                      onChange={(e) =>
                        setFormData((s) => ({
                          ...s,
                          settings: {
                            ...s.settings,
                            notifications: {
                              ...s.settings.notifications,
                              comments: e.currentTarget.checked,
                            },
                          },
                        }))
                      }
                    />
                  </div>

                  <div className="notif-item">
                    <div>
                      <strong>Xabarlar</strong>
                      <p>Yangi xabarlar va javoblar</p>
                    </div>
                    <Switch
                      checked={formData.settings.notifications.messages}
                      onChange={(e) =>
                        setFormData((s) => ({
                          ...s,
                          settings: {
                            ...s.settings,
                            notifications: {
                              ...s.settings.notifications,
                              messages: e.currentTarget.checked,
                            },
                          },
                        }))
                      }
                    />
                  </div>
                </div>

                <Button color="indigo" onClick={handleSave}>
                  Sozlamalarni saqlash
                </Button>

                <button className="setting-link">
                  <span>
                    <IconLock size={18} /> Parolni o'zgartirish
                  </span>
                  <IconChevronRight size={16} />
                </button>

                <button className="setting-link logout-link">
                  <span>
                    <IconLogout size={18} /> Chiqish
                  </span>
                </button>
              </>
            )}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
