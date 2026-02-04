import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  TextInput,
  PasswordInput,
  Divider,
  Group,
  Text,
  Anchor,
  Box,
  Checkbox,
  Alert,
  Select,
} from "@mantine/core";
import {
  IconMail,
  IconLock,
  IconUser,
  IconPhone,
  IconBrandGoogle,
  IconBrandFacebook,
} from "@tabler/icons-react";

import { useDispatch, useSelector } from "react-redux";
import { loginUser, register, setUser } from "../../store/reducers/userReducer";

import main_logo from "../../images/waynix-logo.png";
import "../../utils/styles/Main.scss";
import { useEffect, useState } from "react";
import getCookie from "../../utils/getCookie";

const Banner = () => {
  const [loginOpened, { open: openLogin, close: closeLogin }] =
    useDisclosure(false);
  const [registerOpened, { open: openRegister, close: closeRegister }] =
    useDisclosure(false);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const switchToRegister = () => {
    closeLogin();
    setTimeout(() => openRegister(), 200);
  };

  const switchToLogin = () => {
    closeRegister();
    setTimeout(() => openLogin(), 200);
  };

  useEffect(() => {
    const cookieValue = getCookie("currentUser");
    if (cookieValue) {
      const userObj = JSON.parse(decodeURIComponent(cookieValue));
      dispatch(setUser(userObj));
    }
  }, []);

  /// Login

  const handleLogin = () => {
    if (!email || !password) return alert("Email va parolni kiriting");
    dispatch(loginUser({ email, password }));
    closeLogin();
  };

  /// Register

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [conf_password, setConfPass] = useState("");
  const [policy, setPolicy] = useState(false);
  const [isGit, setIsGit] = useState(false);

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
        }),
      );

      resetForm();
      closeRegister();
    } else if (password !== conf_password && phone_number.length >= 9) {
      alert("Please check your password again!");
      setPassword("");
      setConfPass("");
    } else if (password !== conf_password && phone_number.length < 9) {
      alert("Invalid number!");
      setPhoneNumber("");
    } else if (
      password === "" ||
      conf_password === "" ||
      phone_number === "" ||
      name === "" ||
      email === ""
    ) {
      alert("Please fill all of the inputs");
    } else if (policy === false) {
      alert("Please accept the policy!");
    }
  };


  return (
    <>
      <div className="main">
        <div className="container">
          <div className="main-menu">
            <div className="main-menu-emmet">
              <div className="main-menu-logo">
                <img src={main_logo} alt="logo" />
                <a href="#" className="main-menu-logo-text">
                  Waynix
                </a>
              </div>

              <div className="main-menu-rev">
                {user ? (
                  <div className="main-menu-profile">
                    <a href="/profile">
                      <img src={user.avatar} alt={user.name || "avatar"} />
                    </a>
                  </div>
                ) : (
                  <div className="main-menu-login">
                    {/* Kirish Button */}
                    <Button
                      onClick={openLogin}
                      radius="md"
                      size="md"
                      variant="gradient"
                      gradient={{ from: "indigo", via: "violet", to: "pink" }}
                      className="main-menu-login-btn"
                    >
                      Kirish
                    </Button>

                    {/* LOGIN MODAL */}
                    <Modal
                      opened={loginOpened}
                      onClose={closeLogin}
                      centered
                      radius="md"
                      padding="xl"
                      withCloseButton
                      overlayProps={{ backgroundOpacity: 0.4, blur: 4 }}
                      scrollAreaComponent=""
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

                        <Anchor
                          href="#"
                          fz="sm"
                          c="blue"
                          ta="right"
                          display="block"
                          mb="lg"
                        >
                          Parolni unutdingizmi?
                        </Anchor>

                        <Button
                          fullWidth
                          radius="md"
                          size="md"
                          variant="gradient"
                          gradient={{
                            from: "indigo",
                            via: "violet",
                            to: "pink",
                          }}
                          onClick={handleLogin}
                        >
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
                          Facebook bilan kirish{" "}
                        </Button>

                        <Text ta="center" mt="lg" fz="sm">
                          Hisobingiz yo‘qmi?{" "}
                          <Anchor
                            fz="sm"
                            c="blue"
                            onClick={switchToRegister}
                            style={{ cursor: "pointer" }}
                          >
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
                      scrollAreaComponent={Box}
                    >
                      <Box>
                        <Text ta="center" fw={600} fz="xl" mb="xs">
                          Ro‘yxatdan o‘tish
                        </Text>
                        <Text ta="center" c="dimmed" fz="sm" mb="lg">
                          Waynix platformasiga qo‘shiling
                        </Text>

                        {/* Form */}
                        <form
                          onSubmit={(e) => {
                            e.preventDefault(); // Prevent page reload
                            handleRegister();
                          }}
                        >
                          {/* Full Name */}
                          <TextInput
                            label="To‘liq ism"
                            placeholder="Ism Familiya"
                            icon={<IconUser size={16} />}
                            mb="sm"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />

                          {/* Email */}
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

                          {/* Phone */}
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

                          {/* Password */}
                          <PasswordInput
                            label="Parol"
                            placeholder="••••••••"
                            icon={<IconLock size={16} />}
                            mb="sm"
                            required
                            // description="Kamida 8 ta belgi, 1 katta harf, 1 kichik harf, 1 raqam va 1 maxsus belgi"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />

                          {/* Confirm Password */}
                          <PasswordInput
                            label="Parolni tasdiqlang"
                            placeholder="••••••••"
                            icon={<IconLock size={16} />}
                            mb="md"
                            required
                            value={conf_password}
                            onChange={(e) => setConfPass(e.target.value)}
                          />

                          {/* Git Checkbox */}
                          <Checkbox
                            label="Git sifatida ro'yxatdan o'tish"
                            checked={isGit}
                            onChange={(event) =>
                              setIsGit(event.currentTarget.checked)
                            }
                            mb="md"
                          />

                          {/* Policy Checkbox */}
                          <Checkbox
                            label={
                              <>
                                Men{" "}
                                <Anchor href="#" c="blue">
                                  foydalanish shartlari
                                </Anchor>{" "}
                                va{" "}
                                <Anchor href="#" c="blue">
                                  maxfiylik siyosatiga
                                </Anchor>{" "}
                                roziman
                              </>
                            }
                            checked={policy}
                            onChange={(e) => setPolicy(e.currentTarget.checked)}
                            mb="lg"
                            required
                          />

                          {/* Register Button */}
                          <Button
                            type="submit" // submit the form
                            fullWidth
                            radius="md"
                            size="md"
                            variant="gradient"
                            gradient={{
                              from: "indigo",
                              via: "violet",
                              to: "pink",
                            }}
                          >
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
                          mb="md"
                        >
                          Facebook bilan ro‘yxatdan o‘tish
                        </Button>

                        <Text ta="center" mt="lg" fz="sm">
                          Allaqachon hisobingiz bormi?{" "}
                          <Anchor
                            fz="sm"
                            c="blue"
                            onClick={switchToLogin}
                            style={{ cursor: "pointer" }}
                          >
                            Kirish
                          </Anchor>
                        </Text>
                      </Box>
                    </Modal>
                  </div>
                )}

                <div className="main-menu-burger">
                  <div className="main-menu-burger-func">
                    <label htmlFor="check">
                      <i className="fa-solid fa-bars"></i>
                    </label>
                    <input type="checkbox" id="check" />

                    <ul className="main-menu-bar-list">
                      <li>
                        <a href="#">Bosh sahifa</a>
                      </li>
                      <li>
                        <a href="#">Kategoriyalar</a>
                      </li>
                      <li>
                        <a href="#">Biz haqimizda</a>
                      </li>
                      <li>
                        <a href="#">Kontakt</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
