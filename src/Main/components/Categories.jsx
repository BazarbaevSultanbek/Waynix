import { Link } from "react-router";
import {
  IconBuildingCommunity,
  IconToolsKitchen2,
  IconBed,
  IconShoppingBag,
  IconTool,
  IconConfetti,
  IconSchool,
  IconBuildingBank,
  IconStethoscope,
} from "@tabler/icons-react";
import "../main.scss";

const categories = [
  {
    title: "Turobektlar",
    desc: "Tarixiy, madaniy, parklar...",
    to: "/tours",
    bg: "#eef6ff",
    iconBg: "#2b7fff",
    glow: "rgba(43, 127, 255, 0.45)",
    icon: <IconBuildingCommunity size={26} />,
  },
  {
    title: "Ovqatlanish joylari",
    desc: "Restoranlar, kafelar, fast food...",
    to: "/cafe",
    bg: "#fff8ed",
    iconBg: "#ff6900",
    glow: "rgba(255, 122, 0, 0.45)",
    icon: <IconToolsKitchen2 size={26} />,
  },
  {
    title: "Turar joylar",
    desc: "Mehmonxonalar, hostellar, ijaraga uylar...",
    to: "/hotels",
    bg: "#faf5ff",
    iconBg: "#a855f7",
    glow: "rgba(168, 85, 247, 0.45)",
    icon: <IconBed size={26} />,
  },
  {
    title: "Savdo markazlari",
    desc: "Supermarketlar, do'konlar, bozorlar...",
    to: "/shop",
    bg: "#f0fdf4",
    iconBg: "#00c951",
    glow: "rgba(34, 197, 94, 0.45)",
    icon: <IconShoppingBag size={26} />,
  },
  {
    title: "Xizmatlar",
    desc: "Notarius, advokat, banklar...",
    to: "/services",
    bg: "#eef2ff",
    iconBg: "#155dfc",
    glow: "rgba(99, 102, 241, 0.45)",
    icon: <IconTool size={26} />,
  },
  {
    title: "Ko'ngil ochar va dam olish",
    desc: "Parklar, attraksionlar, kino/teatr...",
    to: "/entertainment",
    bg: "#fdf1f8",
    iconBg: "#ec003f",
    glow: "rgba(236, 72, 153, 0.45)",
    icon: <IconConfetti size={26} />,
  },
  {
    title: "Ta'lim",
    desc: "Maktablar, bog'chalar, litseylar...",
    to: "/education",
    bg: "#f0fdfa",
    iconBg: "#00abb0",
    glow: "rgba(20, 184, 166, 0.45)",
    icon: <IconSchool size={26} />,
  },
  {
    title: "Davlat binolari",
    desc: "Hokimiyat, vazirliklar, sud, prokuratura...",
    to: "/government",
    bg: "#fffbea",
    iconBg: "#fc8100",
    glow: "rgba(234, 179, 8, 0.45)",
    icon: <IconBuildingBank size={26} />,
  },
  {
    title: "Tibbiyot",
    desc: "Shifoxona, poliklinika, stomatologiya...",
    to: "/medical",
    bg: "#fef2f3",
    iconBg: "#f31e55",
    glow: "rgba(239, 68, 68, 0.45)",
    icon: <IconStethoscope size={26} />,
  },
];

export default function Categories() {
  return (
    <div className="Categories">
      <div className="container">
        <div className="Categories-main">
          <div className="Categories-main-head">
            <h1>Kategoriyalar</h1>
            <p>Ajoyib joylarni kashf eting</p>
          </div>

          <section className="Categories-main-group">
            {categories.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="Categories-main-group-card"
                style={{
                  "--card-bg": item.bg,
                  "--icon-bg": item.iconBg,
                  "--icon-glow": item.glow,
                }}
              >
                <div className="Categories-group-card-icon">
                  <span>{item.icon}</span>
                </div>
                <div className="Categories-group-card-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
