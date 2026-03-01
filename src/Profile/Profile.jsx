import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  FileButton,
  Modal,
  Select,
  Switch,
  TextInput,
  Textarea,
} from "@mantine/core";
import {
  IconBell,
  IconBookmark,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconCalendar,
  IconChevronRight,
  IconEdit,
  IconFilter,
  IconLanguage,
  IconLock,
  IconLogout,
  IconMail,
  IconMapPin,
  IconPencil,
  IconSearch,
  IconSettings,
  IconShare3,
  IconStar,
  IconTypography,
  IconUser,
} from "@tabler/icons-react";
import Footer from "../utils/footer/Footer";
import $api from "../http/axios";
import getCookie from "../utils/getCookie";
import { logoutUser, setUser } from "../store/reducers/userReducer";
import { useI18n } from "../i18n/I18nProvider";
import "./profile.scss";

const API_ORIGIN =
  import.meta.env.VITE_API_ORIGIN || "https://waynix-server.vercel.app";

const resolveAvatarUrl = (avatar) => {
  if (!avatar) return "https://api.dicebear.com/7.x/initials/svg?seed=Waynix%20User";
  if (avatar.startsWith("http://") || avatar.startsWith("https://")) return avatar;
  return `${API_ORIGIN}${avatar}`;
};

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
  const { setLanguage } = useI18n();
  const dispatch = useDispatch();

  const [opened, setOpened] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [currentUser, setCurrentUser] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);

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
      fontSize: "medium",
      notifications: {
        newPlaces: true,
        comments: true,
        messages: true,
      },
    },
  });

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [myPlaces, setMyPlaces] = useState([]);

  const token = getCookie("accessToken");
  const authHeaders = token ? { Authorization: `Bearer ${token}` } : {};

  useEffect(() => {
    const cookieValue = getCookie("currentUser");
    if (!cookieValue) return;
    try {
      setCurrentUser(JSON.parse(decodeURIComponent(cookieValue)));
    } catch (err) {
      console.error("Cookie parse error:", err);
    }
  }, []);

  useEffect(() => {
    const loadFreshUser = async () => {
      try {
        const { data } = await $api.get("/refresh");
        if (data?.user) {
          setCurrentUser(data.user);
          dispatch(setUser(data.user));
        }
      } catch (err) {
        console.error("Refresh failed:", err?.response?.data || err.message);
      }
    };
    loadFreshUser();
  }, [dispatch]);

  useEffect(() => {
    const loadMyPlaces = async () => {
      try {
        const { data } = await $api.get("/places/mine", { headers: authHeaders });
        setMyPlaces(Array.isArray(data) ? data : []);
      } catch {
        setMyPlaces([]);
      }
    };
    if (token) loadMyPlaces();
  }, [token]);

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
        fontSize: currentUser.settings?.fontSize || "medium",
        notifications: {
          newPlaces: currentUser.settings?.notifications?.newPlaces ?? true,
          comments: currentUser.settings?.notifications?.comments ?? true,
          messages: currentUser.settings?.notifications?.messages ?? true,
        },
      },
    });
  }, [currentUser]);

  const handleUploadAvatar = async () => {
    if (!avatarFile) return;
    const fd = new FormData();
    fd.append("avatar", avatarFile);

    try {
      const { data } = await $api.post("/add-avatar", fd, {
        headers: { "Content-Type": "multipart/form-data", ...authHeaders },
      });
      setCurrentUser(data.user);
      dispatch(setUser(data.user));
    } catch (err) {
      console.error("Upload error:", err?.response?.data || err.message);
      alert("Avatar yuklashda xatolik");
    }
  };

  const handleSaveProfile = async () => {
    try {
      const { data } = await $api.put("/update-profile", formData, {
        headers: authHeaders,
      });
      setCurrentUser(data.user);
      dispatch(setUser(data.user));
      if (data.user?.settings?.language) {
        setLanguage(data.user.settings.language);
      }
      setOpened(false);
      alert("Profil saqlandi");
    } catch (err) {
      console.error("Update error:", err?.response?.data || err.message);
      alert(err?.response?.data?.message || "Profilni saqlashda xatolik");
    }
  };

  const handleChangePassword = async () => {
    if (!passwordData.oldPassword || !passwordData.newPassword) {
      return alert("Barcha parol maydonlarini to'ldiring");
    }
    if (passwordData.newPassword.length < 8) {
      return alert("Yangi parol kamida 8 ta belgi bo'lishi kerak");
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return alert("Yangi parol tasdiqlash bilan mos emas");
    }

    try {
      await $api.post(
        "/change-password",
        {
          oldPassword: passwordData.oldPassword,
          newPassword: passwordData.newPassword,
        },
        { headers: authHeaders }
      );
      setPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
      alert("Parol muvaffaqiyatli yangilandi");
    } catch (err) {
      console.error("Change password error:", err?.response?.data || err.message);
      alert(err?.response?.data?.message || "Parolni yangilashda xatolik");
    }
  };

  const stats = useMemo(
    () => ({
      places: myPlaces.length,
      saved: currentUser?.savedPlaces?.length || 0,
      comments: currentUser?.comments?.length || 0,
      rating:
        currentUser?.comments?.length > 0
          ? (
              currentUser.comments.reduce((sum, c) => sum + (c.rating || 0), 0) /
              currentUser.comments.length
            ).toFixed(1)
          : "0.0",
    }),
    [currentUser, myPlaces]
  );

  const savedPlaces = currentUser?.savedPlaces || [];
  const comments = currentUser?.comments || [];

  return (
    <div className="profile-page">
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
            <img src={avatarPreview || resolveAvatarUrl(currentUser?.avatar)} alt="avatar" />
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
            Avatar yuklash
          </Button>

          <TextInput
            label="Ism"
            value={formData.name}
            onChange={(e) => setFormData((s) => ({ ...s, name: e.target.value }))}
            radius="md"
          />
          <TextInput
            label="Email"
            value={formData.email}
            onChange={(e) => setFormData((s) => ({ ...s, email: e.target.value }))}
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
            label="Lokatsiya"
            value={formData.location}
            onChange={(e) => setFormData((s) => ({ ...s, location: e.target.value }))}
            radius="md"
          />
          <Textarea
            label="Bio"
            value={formData.bio}
            onChange={(e) => setFormData((s) => ({ ...s, bio: e.target.value }))}
            minRows={3}
          />
          <TextInput
            label="Instagram link"
            value={formData.socials.instagram}
            onChange={(e) =>
              setFormData((s) => ({
                ...s,
                socials: { ...s.socials, instagram: e.target.value },
              }))
            }
          />
          <TextInput
            label="Telegram link"
            value={formData.socials.telegram}
            onChange={(e) =>
              setFormData((s) => ({
                ...s,
                socials: { ...s.socials, telegram: e.target.value },
              }))
            }
          />
          <TextInput
            label="Facebook link"
            value={formData.socials.facebook}
            onChange={(e) =>
              setFormData((s) => ({
                ...s,
                socials: { ...s.socials, facebook: e.target.value },
              }))
            }
          />
          <TextInput
            label="LinkedIn link"
            value={formData.socials.linkedin}
            onChange={(e) =>
              setFormData((s) => ({
                ...s,
                socials: { ...s.socials, linkedin: e.target.value },
              }))
            }
          />
          <TextInput
            label="Website link"
            value={formData.socials.website}
            onChange={(e) =>
              setFormData((s) => ({
                ...s,
                socials: { ...s.socials, website: e.target.value },
              }))
            }
          />

          <Button color="indigo" fullWidth radius="md" onClick={handleSaveProfile}>
            Saqlash
          </Button>
        </div>
      </Modal>

      <header className="profile-top">
        <div className="container profile-top__inner">
          <div className="profile-head-left">
            <img className="profile-avatar" src={resolveAvatarUrl(currentUser?.avatar)} alt="avatar" />
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
          <button
            className="sidebar-item logout"
            onClick={() => dispatch(logoutUser())}
          >
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
                    {currentUser?.location || "Lokatsiya kiritilmagan"}
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

              {!myPlaces.length ? (
                <div className="content-card">
                  <p>Joylar hozircha yo'q.</p>
                </div>
              ) : (
                myPlaces.map((item) => (
                  <div className="list-card" key={item._id}>
                    <div>
                      <h3>{item.name}</h3>
                      <p>
                        <IconMapPin size={14} /> {item.location}
                      </p>
                      <span className={`status ${item.status === "approved" ? "ok" : item.status === "rejected" ? "bad" : "pending"}`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="list-card-actions">
                      <a href={`/${item.category}/${item._id}`}>
                        <button>
                          <IconChevronRight size={16} />
                        </button>
                      </a>
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
                          <IconMapPin size={14} /> Joy ma'lumoti keyin qo'shiladi
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
                      <IconMapPin size={14} /> Joy ma'lumoti kutilmoqda
                    </p>
                    <StarRow count={item.rating || 5} />
                    <p className="comment-text">{item.text || "-"}</p>
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

              <Button color="indigo" onClick={handleSaveProfile}>
                Sozlamalarni saqlash
              </Button>

              <div className="setting-card">
                <div className="setting-row">
                  <IconLock size={20} />
                  <h4>Parolni o'zgartirish</h4>
                </div>
                <TextInput
                  label="Joriy parol"
                  type="password"
                  value={passwordData.oldPassword}
                  onChange={(e) =>
                    setPasswordData((s) => ({ ...s, oldPassword: e.target.value }))
                  }
                  mb="sm"
                />
                <TextInput
                  label="Yangi parol"
                  type="password"
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData((s) => ({ ...s, newPassword: e.target.value }))
                  }
                  mb="sm"
                />
                <TextInput
                  label="Yangi parolni tasdiqlang"
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData((s) => ({
                      ...s,
                      confirmPassword: e.target.value,
                    }))
                  }
                  mb="sm"
                />
                <Button onClick={handleChangePassword}>Parolni yangilash</Button>
              </div>

              <button
                className="setting-link logout-link"
                onClick={() => dispatch(logoutUser())}
              >
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
  );
}
