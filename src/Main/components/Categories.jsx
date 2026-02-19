import { Link } from "react-router-dom";

const cards = [
  { title: "Turobektlar", desc: "Tarixiy, madaniy, parklar...", to: "/tours", bg: "#eef6ff", iconBg: "#2b7fff", icon: "🏛" },
  { title: "Ovqatlanish joylari", desc: "Restoranlar, kafelar, fast food...", to: "/cafe", bg: "#fff8ed", iconBg: "#ff6900", icon: "🍴" },
  { title: "Turar joylar", desc: "Mehmonxonalar, hostellar, ijaraga uylar...", to: "/hotels", bg: "#faf5ff", iconBg: "#7c3aed", icon: "🛏" },
  { title: "Savdo markazlari", desc: "Supermarketlar, do'konlar, bozorlar...", to: "/shop", bg: "#f0fdf4", iconBg: "#00c951", icon: "🛍" },
  { title: "Xizmatlar", desc: "Notarius, advokat, banklar...", to: "/services", bg: "#eef2ff", iconBg: "#155dfc", icon: "🛠" },
  { title: "Ko'ngil ochar va dam olish", desc: "Parklar, attraksionlar, kino/teatr...", to: "/entertainment", bg: "#fdf1f8", iconBg: "#ec003f", icon: "🎡" },
  { title: "Ta'lim", desc: "Maktablar, bog'chalar, litseylar...", to: "/education", bg: "#f0fdfa", iconBg: "#00abb0", icon: "🎓" },
  { title: "Davlat binolari", desc: "Hokimiyat, vazirliklar, sud, prokuratura...", to: "/government", bg: "#fffbea", iconBg: "#fc8100", icon: "🏢" },
  { title: "Tibbiyot", desc: "Shifoxona, poliklinika, stomatologiya...", to: "/medical", bg: "#fef2f3", iconBg: "#f31e55", icon: "🩺" },
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
            {cards.map((card) => (
              <Link
                key={card.title}
                className="Categories-main-group-card"
                style={{ background: card.bg, textDecoration: "none" }}
                to={card.to}
              >
                <div className="Categories-group-card-icon">
                  <span style={{ background: card.iconBg, color: "#fff", fontSize: "20px" }}>{card.icon}</span>
                </div>
                <div className="Categories-group-card-text">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
