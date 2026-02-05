import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  TextInput,
  PasswordInput,
  Divider,
  Text,
  Anchor,
  Box,
  Checkbox,
} from "@mantine/core";
import {
  IconMail,
  IconLock,
  IconUser,
  IconPhone,
  IconBrandGoogle,
  IconBrandFacebook,
  IconWorld,
  IconChevronDown,
} from "@tabler/icons-react";

import { useDispatch, useSelector } from "react-redux";
import { loginUser, register, setUser } from "../../store/reducers/userReducer";

import main_logo from "../../images/waynix-logo.png";
import "../styles/Banner.scss";
import getCookie from "../../utils/getCookie";

const Banner = () => {
  const dispatch = useDispatch();
  const reduxUser = useSelector((state) => state.user.user);

  const [currentUser, setCurrentUser] = useState(null);

  const [loginOpened, { open: openLogin, close: closeLogin }] =
    useDisclosure(false);
  const [registerOpened, { open: openRegister, close: closeRegister }] =
    useDisclosure(false);

  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState({ code: "UZ", label: "O'zbek", flag: "🇺🇿" });

  const langs = [
    { code: "UZ", label: "O'zbek", flag: "🇺🇿" },
    { code: "EN", label: "English", flag: "🇬🇧" },
    { code: "RU", label: "Русский", flag: "🇷🇺" },
    { code: "DE", label: "Deutsch", flag: "🇩🇪" },
    { code: "FR", label: "Français", flag: "🇫🇷" },
  ];

  useEffect(() => {
    if (reduxUser) {
      setCurrentUser(reduxUser);
      return;
    }
    const cookieValue = getCookie("currentUser");
    if (cookieValue) {
      const userObj = JSON.parse(decodeURIComponent(cookieValue));
      dispatch(setUser(userObj));
      setCurrentUser(userObj);
    }
  }, [reduxUser, dispatch]);

  const switchToRegister = () => {
    closeLogin();
    setTimeout(() => openRegister(), 200);
  };

  const switchToLogin = () => {
    closeRegister();
    setTimeout(() => openLogin(), 200);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [conf_password, setConfPass] = useState("");
  const [policy, setPolicy] = useState(false);
  const [isGit, setIsGit] = useState(false);

  const handleLogin = () => {
    if (!email || !password) return alert("Email va parolni kiriting");
    dispatch(loginUser({ email, password }));
    closeLogin();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setPassword("");
    setConfPass("");
    setPolicy(false);
    setIsGit(false);
  };

  const handleRegister = () => {
    if (
      password === conf_password &&
      phone_number.length >= 9 &&
      email !== "" &&
      name !== "" &&
      policy === true
    ) {
      dispatch(
        register({
          name,
          email,
          password,
          phone_number,
          isGit,
        })
      );
      resetForm();
      closeRegister();
    } else {
      alert("Ma'lumotlarni to'g'ri kiriting");
    }
  };

  return (
    <header className="banner">
      <div className="banner__wrap">
        <div className="banner__logo">
          <img src={main_logo} alt="logo" />
          <span>Waynix</span>
        </div>

        <nav className="banner__nav">
          <a href="#">Bosh sahifa</a>
          <button className="nav-btn">
            Kategoriyalar <IconChevronDown size={16} />
          </button>
          <a href="#">Biz haqimizda</a>
          <a href="#">Kontakt</a>
        </nav>

        <div className="banner__actions">
          <div className="lang">
            <button
              className="lang-btn"
              onClick={() => setLangOpen((v) => !v)}
            >
              <IconWorld size={16} />
              <span>
                {lang.flag} {lang.code}
              </span>
              <IconChevronDown size={14} />
            </button>
            {langOpen && (
              <div className="lang-menu">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l);
                      setLangOpen(false);
                    }}
                  >
                    <span>{l.flag}</span>
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {currentUser ? (
            <a className="avatar" href="/profile">
              <img src={currentUser.avatar} alt="avatar" />
            </a>
          ) : (
            <div className="auth-btns">
              <button className="btn-outline" onClick={openLogin}>
                Kirish
              </button>
              <button className="btn-primary" onClick={openRegister}>
                Ro'yxatdan o'tish
              </button>
            </div>
          )}
        </div>
      </div>

      {/* LOGIN MODAL */}
      <Modal
        opened={loginOpened}
        onClose={closeLogin}
        centered
        radius="md"
        padding="xl"
        withCloseButton
        overlayProps={{ backgroundOpacity: 0.4, blur: 4 }}
      >
        <Box>
          <Text ta="center" fw={600} fz="xl" mb="xs">
            Kirish
          </Text>
          <Text ta="center" c="dimmed" fz="sm" mb="lg">
            Waynix platformasiga xush kelibsiz
          </Text>

          <TextInput
            label="Email manzil"
            placeholder="email@example.com"
            icon={<IconMail size={16} />}
            mb="sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            label="Parol"
            placeholder="••••••••"
            icon={<IconLock size={16} />}
            mb="xs"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Anchor href="#" fz="sm" c="blue" ta="right" display="block" mb="lg">
            Parolni unutdingizmi?
          </Anchor>

          <Button fullWidth radius="md" size="md" onClick={handleLogin} color="#f97316">
            Kirish
          </Button>

          <Divider label="yoki" labelPosition="center" my="md" />

          <Button
            fullWidth
            variant="default"
            leftSection={<IconBrandGoogle size={16} />}
            mb="xs"
          >
            Google bilan kirish
          </Button>

          <Button
            fullWidth
            variant="default"
            leftSection={<IconBrandFacebook size={16} />}
          >
            Facebook bilan kirish
          </Button>

          <Text ta="center" mt="lg" fz="sm">
            Hisobingiz yo‘qmi?{" "}
            <Anchor onClick={switchToRegister} style={{ cursor: "pointer" }}>
              Ro‘yxatdan o‘ting
            </Anchor>
          </Text>
        </Box>
      </Modal>

      {/* REGISTER MODAL */}
      <Modal
        opened={registerOpened}
        onClose={closeRegister}
        centered
        radius="md"
        padding="xl"
        withCloseButton
        overlayProps={{ backgroundOpacity: 0.4, blur: 4 }}
      >
        <Box>
          <Text ta="center" fw={600} fz="xl" mb="xs">
            Ro‘yxatdan o‘tish
          </Text>
          <Text ta="center" c="dimmed" fz="sm" mb="lg">
            Waynix platformasiga qo‘shiling
          </Text>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegister();
            }}
          >
            <TextInput
              label="To‘liq ism"
              placeholder="Ism Familiya"
              icon={<IconUser size={16} />}
              mb="sm"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <TextInput
              label="Email manzil"
              placeholder="email@example.com"
              icon={<IconMail size={16} />}
              mb="sm"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput
              label="Telefon raqam"
              placeholder="90 123 45 67"
              icon={<IconPhone size={16} />}
              mb="sm"
              required
              minLength={9}
              maxLength={15}
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <PasswordInput
              label="Parol"
              placeholder="••••••••"
              icon={<IconLock size={16} />}
              mb="sm"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <PasswordInput
              label="Parolni tasdiqlang"
              placeholder="••••••••"
              icon={<IconLock size={16} />}
              mb="md"
              required
              value={conf_password}
              onChange={(e) => setConfPass(e.target.value)}
            />

            <Checkbox
              label="Git sifatida ro'yxatdan o'tish"
              checked={isGit}
              onChange={(event) => setIsGit(event.currentTarget.checked)}
              mb="md"
            />

            <Checkbox
              label="Foydalanish shartlari va maxfiylik siyosatiga roziman"
              checked={policy}
              onChange={(e) => setPolicy(e.currentTarget.checked)}
              mb="lg"
              required
            />

            <Button type="submit" fullWidth radius="md" size="md" color="#f97316">
              Ro‘yxatdan o‘tish
            </Button>
          </form>

          <Divider label="yoki" labelPosition="center" my="md" />

          <Button
            fullWidth
            variant="default"
            leftSection={<IconBrandGoogle size={16} />}
            mb="xs"
          >
            Google bilan ro‘yxatdan o‘tish
          </Button>

          <Button
            fullWidth
            variant="default"
            leftSection={<IconBrandFacebook size={16} />}
          >
            Facebook bilan ro‘yxatdan o‘tish
          </Button>

          <Text ta="center" mt="lg" fz="sm">
            Allaqachon hisobingiz bormi?{" "}
            <Anchor onClick={switchToLogin} style={{ cursor: "pointer" }}>
              Kirish
            </Anchor>
          </Text>
        </Box>
      </Modal>
    </header>
  );
};

export default Banner;
