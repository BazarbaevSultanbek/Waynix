import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Anchor,
  Box,
  Button,
  Modal,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import {
  IconChevronDown,
  IconLock,
  IconMail,
  IconUser,
  IconWorld,
} from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import main_logo from "../../images/waynix-logo.png";
import $api from "../../http/axios";
import { loginUser, register, setUser } from "../../store/reducers/userReducer";
import { useI18n } from "../../i18n/I18nProvider";
import "./banner.scss";

const languageOptions = [
  { code: "uz", label: "O'zbek", flag: "🇺🇿" },
  { code: "kaa", label: "Qaraqalpaq", flag: "🇺🇿" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

const API_ORIGIN =
  import.meta.env.VITE_API_ORIGIN || "https://waynix-server.vercel.app";

const resolveAvatarUrl = (avatar) => {
  if (!avatar) {
    return "https://api.dicebear.com/7.x/initials/svg?seed=Waynix%20User";
  }
  if (avatar.startsWith("http://") || avatar.startsWith("https://")) {
    return avatar;
  }
  return `${API_ORIGIN}${avatar}`;
};

export default function Banner() {
  const { t, language, setLanguage } = useI18n();
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.user.user);

  const [currentUser, setCurrentUser] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState(
    languageOptions.find((item) => item.code === language) || languageOptions[0]
  );

  const [loginOpened, { open: openLogin, close: closeLogin }] =
    useDisclosure(false);
  const [registerOpened, { open: openRegister, close: closeRegister }] =
    useDisclosure(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [verifyOpened, setVerifyOpened] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const categories = [
    { label: t("banner.catTours"), href: "/tours" },
    { label: t("banner.catShop"), href: "/shop" },
    { label: t("banner.catCafe"), href: "/cafe" },
    { label: t("banner.catHotels"), href: "/hotels" },
    { label: t("banner.catServices"), href: "/services" },
    { label: t("banner.catEntertainment"), href: "/entertainment" },
    { label: t("banner.catMedical"), href: "/medical" },
    { label: t("banner.catGovernment"), href: "/government" },
    { label: t("banner.catEducation"), href: "/education" },
  ];

  useEffect(() => {
    if (reduxUser) {
      setCurrentUser(reduxUser);
      return;
    }
    const loadUser = async () => {
      try {
        const { data } = await $api.get("/me");
        if (data?.user) {
          setCurrentUser(data.user);
          dispatch(setUser(data.user));
        }
      } catch {
        setCurrentUser(null);
      }
    };
    loadUser();
  }, [reduxUser, dispatch]);

  useEffect(() => {
    const currentLangCode = currentUser?.settings?.language;
    if (!currentLangCode) return;
    const found = languageOptions.find((item) => item.code === currentLangCode);
    if (found) setLang(found);
  }, [currentUser]);

  useEffect(() => {
    const found = languageOptions.find((item) => item.code === language);
    if (found) setLang(found);
  }, [language]);

  const handleLanguageChange = async (nextLang) => {
    setLang(nextLang);
    setLanguage(nextLang.code);
    setLangOpen(false);
    setMobileLangOpen(false);

    if (!currentUser) return;
    try {
      const payload = {
        settings: {
          ...(currentUser.settings || {}),
          language: nextLang.code,
        },
      };
      const { data } = await $api.put("/update-profile", payload);
      setCurrentUser(data.user);
      dispatch(setUser(data.user));
    } catch (err) {
      console.error("Language update failed:", err?.response?.data || err.message);
    }
  };

  const switchToRegister = () => {
    closeLogin();
    setTimeout(() => openRegister(), 200);
  };

  const switchToLogin = () => {
    closeRegister();
    setTimeout(() => openLogin(), 200);
  };

  const handleLogin = () => {
    if (!email || !password) return alert("Email va parolni kiriting");
    dispatch(loginUser({ email, password }));
    closeLogin();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setConfPassword("");
  };

  const handleRegister = async () => {
    if (!name || !email || !password || !confPassword) {
      return alert("Barcha maydonlarni to'ldiring");
    }
    if (password !== confPassword) {
      return alert("Parollar mos emas");
    }
    try {
      const result = await dispatch(register({ name, email, password })).unwrap();
      setVerifyEmail(email);
      resetForm();
      closeRegister();
      setVerifyOpened(true);
      if (result?.verificationDelivery === "fallback") {
        alert("Email yuborishda muammo bo'ldi. Iltimos keyinroq urinib ko'ring.");
      } else {
        alert("Tasdiqlash kodi emailingizga yuborildi");
      }
    } catch (err) {
      alert(err || "Ro'yxatdan o'tishda xatolik");
    }
  };

  const handleVerifyEmail = async () => {
    if (!verifyEmail || !verifyCode) {
      return alert("Email va kodni kiriting");
    }
    try {
      await $api.post("/verify-email", { email: verifyEmail, code: verifyCode });
      setVerifyOpened(false);
      setVerifyCode("");
      alert("Email tasdiqlandi. Endi tizimga kirishingiz mumkin.");
      openLogin();
    } catch (err) {
      alert(err?.response?.data?.message || "Kod noto'g'ri yoki eskirgan");
    }
  };

  const handleResendCode = async () => {
    if (!verifyEmail) return alert("Email kiriting");
    try {
      const { data } = await $api.post("/resend-verification", {
        email: verifyEmail,
      });
      if (data?.verificationDelivery === "fallback") {
        alert("Email yuborishda muammo bo'ldi. Iltimos keyinroq urinib ko'ring.");
      } else {
        alert("Yangi kod yuborildi");
      }
    } catch (err) {
      alert(err?.response?.data?.message || "Kod yuborishda xatolik");
    }
  };

  return (
    <>
      <header className="banner">
        <div className="banner__wrap">
          <Link to="/" className="logo-link">
            <div className="banner__logo">
              <img src={main_logo} alt="logo" />
              <span>Waynix</span>
            </div>
          </Link>

          <nav className="banner__nav">
            <Link to="/">{t("banner.home")}</Link>
            <div className={`nav-drop ${catOpen ? "open" : ""}`}>
              <button
                className="nav-btn"
                type="button"
                onClick={() => {
                  setCatOpen((v) => !v);
                  setLangOpen(false);
                }}
              >
                {t("banner.categories")} <IconChevronDown size={16} />
              </button>
              <div className={`nav-menu ${catOpen ? "open" : ""}`}>
                {categories.map((c) => (
                  <Link key={c.label} to={c.href} onClick={() => setCatOpen(false)}>
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/about">{t("banner.about")}</Link>
            <Link to="/contact">{t("banner.contact")}</Link>
          </nav>

          <div className="banner__actions">
            <div className={`lang ${langOpen ? "open" : ""}`}>
              <button
                className="lang-btn"
                type="button"
                onClick={() => {
                  setLangOpen((v) => !v);
                  setCatOpen(false);
                }}
              >
                <IconWorld size={16} />
                <span>
                  {lang.flag} {lang.code.toUpperCase()}
                </span>
                <IconChevronDown size={14} />
              </button>

              <div className={`lang-menu ${langOpen ? "open" : ""}`}>
                {languageOptions.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => handleLanguageChange(item)}
                  >
                    <span>{item.flag}</span>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {currentUser ? (
              <a className="avatar" href="/profile">
                <img src={resolveAvatarUrl(currentUser.avatar)} alt="avatar" />
              </a>
            ) : (
              <div className="auth-btns">
                <button className="btn-outline" onClick={openLogin} type="button">
                  {t("banner.login")}
                </button>
                <button className="btn-primary" onClick={openRegister} type="button">
                  {t("banner.register")}
                </button>
              </div>
            )}

            <button
              className="burger"
              onClick={() => setMobileOpen(true)}
              aria-label="menu"
              type="button"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <div className="mobile-panel">
          <div className="mobile-head">
            <div className="banner__logo">
              <img src={main_logo} alt="logo" />
              <span>Waynix</span>
            </div>
            <button className="mobile-close" onClick={() => setMobileOpen(false)} type="button">
              ✕
            </button>
          </div>

          <Link to="/" onClick={() => setMobileOpen(false)}>
            {t("banner.home")}
          </Link>

          <button
            className="mobile-cat-btn"
            onClick={() => setMobileCatOpen((v) => !v)}
            type="button"
          >
            {t("banner.categories")}
            <span className={mobileCatOpen ? "rot" : ""}>▾</span>
          </button>
          <div className={`mobile-cat-list ${mobileCatOpen ? "open" : ""}`}>
            {categories.map((c) => (
              <Link key={c.label} to={c.href} onClick={() => setMobileOpen(false)}>
                {c.label}
              </Link>
            ))}
          </div>

          <Link to="/about" onClick={() => setMobileOpen(false)}>
            {t("banner.about")}
          </Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            {t("banner.contact")}
          </Link>

          <div className={`mobile-lang ${mobileLangOpen ? "open" : ""}`}>
            <button
              className="mobile-lang-btn"
              onClick={() => setMobileLangOpen((v) => !v)}
              type="button"
            >
              <span>
                {lang.flag} {lang.label}
              </span>
              <IconChevronDown size={16} />
            </button>

            <div className="mobile-lang-menu">
              {languageOptions.map((item) => (
                <button key={item.code} onClick={() => handleLanguageChange(item)} type="button">
                  <span>{item.flag}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal opened={loginOpened} onClose={closeLogin} centered radius="md" padding="xl">
        <Box>
          <Text ta="center" fw={600} fz="xl" mb="xs">
            {t("banner.loginTitle")}
          </Text>
          <Text ta="center" c="dimmed" fz="sm" mb="lg">
            {t("banner.loginSubtitle")}
          </Text>

          <TextInput
            label={t("banner.email")}
            placeholder="email@example.com"
            leftSection={<IconMail size={16} />}
            mb="sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            label={t("banner.password")}
            placeholder="••••••••"
            leftSection={<IconLock size={16} />}
            mb="xs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Anchor href="#" fz="sm" c="blue" ta="right" display="block" mb="lg">
            {t("banner.forgotPassword")}
          </Anchor>
          <Button fullWidth radius="md" size="md" onClick={handleLogin}>
            {t("banner.login")}
          </Button>
          <Text ta="center" mt="lg" fz="sm">
            {t("banner.noAccount")}{" "}
            <Anchor onClick={switchToRegister} style={{ cursor: "pointer" }}>
              {t("banner.register")}
            </Anchor>
          </Text>
        </Box>
      </Modal>

      <Modal
        opened={registerOpened}
        onClose={closeRegister}
        centered
        radius="md"
        padding="xl"
      >
        <Box>
          <Text ta="center" fw={600} fz="xl" mb="xs">
            {t("banner.registerTitle")}
          </Text>
          <Text ta="center" c="dimmed" fz="sm" mb="lg">
            {t("banner.registerSubtitle")}
          </Text>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
          >
            <TextInput
              label={t("banner.fullName")}
              placeholder="Ism Familiya"
              leftSection={<IconUser size={16} />}
              mb="sm"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextInput
              label={t("banner.email")}
              placeholder="email@example.com"
              leftSection={<IconMail size={16} />}
              mb="sm"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              label={t("banner.password")}
              placeholder="Kamida 8 belgi, harf va raqam"
              leftSection={<IconLock size={16} />}
              mb="sm"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
              label={t("banner.confirmPassword")}
              placeholder="••••••••"
              leftSection={<IconLock size={16} />}
              mb="md"
              required
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <Button type="submit" fullWidth radius="md" size="md">
              {t("banner.register")}
            </Button>
          </form>
          <Text ta="center" mt="lg" fz="sm">
            {t("banner.haveAccount")}{" "}
            <Anchor onClick={switchToLogin} style={{ cursor: "pointer" }}>
              {t("banner.login")}
            </Anchor>
          </Text>
        </Box>
      </Modal>

      <Modal
        opened={verifyOpened}
        onClose={() => setVerifyOpened(false)}
        centered
        radius="md"
        padding="xl"
      >
        <Box>
          <Text ta="center" fw={600} fz="xl" mb="xs">
            {t("banner.verifyTitle")}
          </Text>
          <Text ta="center" c="dimmed" fz="sm" mb="lg">
            Emailga yuborilgan 6 xonali kodni kiriting
          </Text>

          <TextInput
            label={t("banner.email")}
            placeholder="email@example.com"
            mb="sm"
            value={verifyEmail}
            onChange={(e) => setVerifyEmail(e.target.value)}
          />

          <TextInput
            label={t("banner.verifyCode")}
            placeholder="123456"
            mb="md"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
          />

          <Button fullWidth radius="md" size="md" onClick={handleVerifyEmail}>
            {t("banner.verifyBtn")}
          </Button>

          <Text ta="center" mt="lg" fz="sm">
            {t("banner.verifyCode")}{" "}
            <Anchor onClick={handleResendCode} style={{ cursor: "pointer" }}>
              {t("banner.resend")}
            </Anchor>
          </Text>
        </Box>
      </Modal>
    </>
  );
}
