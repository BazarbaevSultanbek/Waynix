import { useMemo, useState } from "react";
import {
  IconMapPin,
  IconBookmark,
  IconBookmarkFilled,
  IconClock,
  IconPhone,
  IconWorld,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconMail,
  IconStarFilled,
  IconChevronLeft,
  IconChevronRight,
  IconSend,
} from "@tabler/icons-react";
import Banner from "../utils/banner/Banner";
import Footer from "../utils/footer/Footer";
import "../utils/styles/object.scss";

const place = {
  id: 1,
  title: "Amir Temur maqbarasi (Go'ri Amir)",
  category: "Tarixiy yodgorlik",
  rating: 4.8,
  reviewsCount: 324,
  location: "Samarqand, O'zbekiston",
  description:
    "Go'ri Amir maqbarasi - Amir Temur va uning oila a'zolari dafn etilgan tarixiy yodgorlik. 1404-yilda qurilgan bu arxitektura durdonasi o'z davri me'morchiligining eng yaxshi namunalaridan biri hisoblanadi. Binoning gumbazi va ichki bezagi ajoyib san'at asaridir.",
  schedule: "09:00 - 18:00",
  scheduleDays: "Dushanba-Yakshanba",
  address: "Bibikhonim ko'chasi, 7",
  phone: "+998 66 235 67 89",
  author: "Akmal Karimov",
  authorRole: "Gid va sayohat mutaxassisi",
};

const gallery = [
  "https://uzbektour.uz/wp-content/uploads/2018/12/temur-monument.jpg",
  "https://www.gazeta.uz/media/img/2024/01/ayFRZG17064359363257_l.jpg",
  "https://uzbek-travel.com/images/uz/Landmarks/Tashkent/Amir_Temur_Square/5085743567_ed4d32c36c_b.jpg",
  "https://uzbekistan.travel/storage/app/media/wepb/Maqolalar/Shaxrisabzdagi%20Temur%20haykali/cropped-images/shutterstock_2260835259-0-0-0-0-1742816958.webp",
  "https://lyceum.wiut.uz/images/2025/aprel2025/3/360_F_596856238_dOb5xHzzbo3bJFeXBJACOVFF9RT3VSe3.jpg",
];

const nearbyPlaces = [
  {
    id: 1,
    name: "Registon maydoni",
    type: "Tarixiy majmua",
    rating: 4.9,
    distance: "2.5 km",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Bibi-Xonim masjidi",
    type: "Masjid",
    rating: 4.8,
    distance: "3.1 km",
    image:
      "https://uzbekistan.travel/storage/app/media/Rasmlar/Samarqand/cropped-images/bibi-khanym-mosque-in-samarkand-uzbekistan-0-0-0-0-1738316597.jpg",
  },
  {
    id: 3,
    name: "Shohizinda maqbarasi",
    type: "Maqbara",
    rating: 4.9,
    distance: "4.2 km",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=400&auto=format&fit=crop",
  },
];

const initialComments = [
  {
    id: 1,
    author: "Aziza Karimova",
    rating: 5,
    timeAgo: "2 kun oldin",
    text: "Ajoyib joy! Tarixiy arxitektura va go'zal manzara. Albatta tashrif buyurishni maslahat beraman.",
  },
  {
    id: 2,
    author: "Sardor Tursunov",
    rating: 4,
    timeAgo: "1 hafta oldin",
    text: "Juda yoqdi, lekin dam olish joylari kam. Umumiy taassurot ijobiy.",
  },
  {
    id: 3,
    author: "Nilufar Rahimova",
    rating: 5,
    timeAgo: "2 hafta oldin",
    text: "Oilam bilan borgandik, hammaga yoqdi. Fotosuratlar uchun ajoyib joy!",
  },
];

function Stars({ value, size = 16 }) {
  return (
    <span className="stars-row">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStarFilled
          key={i}
          size={size}
          color={i < value ? "#f6b400" : "#d1d5db"}
        />
      ))}
    </span>
  );
}

const Object = () => {
  const [saved, setSaved] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [comments, setComments] = useState(initialComments);
  const [draft, setDraft] = useState("");
  const [draftRating, setDraftRating] = useState(0);

  const activeSrc = gallery[activeImage];

  const avgRating = useMemo(() => {
    if (!comments.length) return 0;
    const sum = comments.reduce((acc, c) => acc + c.rating, 0);
    return (sum / comments.length).toFixed(1);
  }, [comments]);

  const prevImage = () => {
    setActiveImage((p) => (p === 0 ? gallery.length - 1 : p - 1));
  };

  const nextImage = () => {
    setActiveImage((p) => (p === gallery.length - 1 ? 0 : p + 1));
  };

  const submitComment = () => {
    if (!draft.trim() || draftRating < 1) return;
    const newComment = {
      id: Date.now(),
      author: "Siz",
      rating: draftRating,
      timeAgo: "Hozir",
      text: draft.trim(),
    };
    setComments((prev) => [newComment, ...prev]);
    setDraft("");
    setDraftRating(0);
  };

  return (
    <>
      <Banner />
      <section className="object-page">
        <div className="object-page__wrap">
          <header className="header-card">
            <div>
              <h1>{place.title}</h1>
              <div className="header-meta">
                <span className="pill">{place.category}</span>
                <span className="meta-item">
                  <IconStarFilled size={16} color="#f6b400" /> {place.rating} (
                  {place.reviewsCount} sharh)
                </span>
                <span className="meta-item">
                  <IconMapPin size={16} /> {place.location}
                </span>
              </div>
            </div>

            <button
              className={`save-btn ${saved ? "saved" : ""}`}
              onClick={() => setSaved((s) => !s)}
              aria-label="Saqlash"
              title="Saqlash"
            >
              {saved ? (
                <IconBookmarkFilled size={18} />
              ) : (
                <IconBookmark size={18} />
              )}
            </button>
          </header>

          <section className="gallery-card">
            <div className="main-image-wrap">
              <img src={activeSrc} alt={place.title} className="main-image" />
              <button className="gallery-arrow left" onClick={prevImage}>
                <IconChevronLeft size={18} />
              </button>
              <button className="gallery-arrow right" onClick={nextImage}>
                <IconChevronRight size={18} />
              </button>
            </div>

            <div className="thumbs-col">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  className={`thumb-btn ${activeImage === i ? "active" : ""}`}
                  onClick={() => setActiveImage(i)}
                >
                  <img src={src} alt={`preview-${i + 1}`} />
                </button>
              ))}
            </div>
          </section>

          <div className="content-grid">
            <div className="left-col">
              <div className="card">
                <h3>Tavsif</h3>
                <p>{place.description}</p>
              </div>

              <div className="card contact-card">
                <div className="contact-line">
                  <div>
                    <div className="line-title">
                      <IconClock size={16} /> Ish vaqti
                    </div>
                    <div>{place.schedule}</div>
                    <small>{place.scheduleDays}</small>
                  </div>

                  <div>
                    <div className="line-title">
                      <IconMapPin size={16} /> Manzil
                    </div>
                    <div>{place.address}</div>
                    <small>{place.location}</small>
                  </div>
                </div>

                <div className="phone-line">
                  <IconPhone size={16} /> {place.phone}
                </div>
              </div>

              <div className="card social-grid-card">
                <a href="#" className="social-link-card">
                  <IconWorld size={16} /> <span>Website</span>
                </a>
                <a href="#" className="social-link-card">
                  <IconBrandInstagram size={16} /> <span>Instagram</span>
                </a>
                <a href="#" className="social-link-card">
                  <IconBrandFacebook size={16} /> <span>Facebook</span>
                </a>
                <a href="#" className="social-link-card">
                  <IconBrandYoutube size={16} /> <span>YouTube</span>
                </a>
                <a href="#" className="social-link-card">
                  <IconBrandLinkedin size={16} /> <span>LinkedIn</span>
                </a>
                <a href="#" className="social-link-card">
                  <IconMail size={16} /> <span>Email</span>
                </a>
              </div>

              <div className="card author-card">
                <h3>Avtor</h3>
                <div className="author-row">
                  <div className="avatar">AK</div>
                  <div>
                    <strong>{place.author}</strong>
                    <p>{place.authorRole}</p>
                    <div className="author-links">
                      <a href="#" style={{ color: "#f6339a" }}>
                        <i className="fa-brands fa-instagram"></i> Instagram
                      </a>
                      <a href="#" style={{ color: "#155dfc" }}>
                        <i className="fa-brands fa-telegram"></i>Telegram
                      </a>
                      <a href="#" style={{color: "#0d41b6"}}>
                        <i className="fa-brands fa-linkedin-in"></i>LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="right-col">
              <div className="card map-card">
                <h3>Xarita</h3>
                <div className="map-box">
                  <IconMapPin size={28} />
                  <p>Xarita joylashuvi</p>
                </div>
              </div>

              <div className="card nearby-card-wrap">
                <h3>Yaqin atrofdagi joylar</h3>
                {nearbyPlaces.map((item) => (
                  <a key={item.id} href="#" className="nearby-card">
                    <img src={item.image} alt={item.name} />
                    <div className="nearby-card__body">
                      <strong>{item.name}</strong>
                      <p>{item.type}</p>
                      <div className="nearby-meta">
                        <span>
                          <IconStarFilled size={14} color="#f6b400" />{" "}
                          {item.rating}
                        </span>
                        <span>
                          <IconMapPin size={14} /> {item.distance}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </aside>
          </div>

          <section className="card comments-section">
            <h3>Baho va sharhlar</h3>
            <div className="review-form">
              <div className="rate-line">
                <span>Baho:</span>
                <div className="rate-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setDraftRating(i + 1)}
                      className="rate-btn"
                    >
                      <IconStarFilled
                        size={18}
                        color={i < draftRating ? "#f6b400" : "#d1d5db"}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                placeholder="Fikr-mulohaza yozing..."
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
              <button className="send-btn" onClick={submitComment}>
                <IconSend size={15} /> Yuborish
              </button>
            </div>

            <div className="comments-head">
              <h4>Sharhlar ({comments.length})</h4>
              <span>O'rtacha baho: {avgRating}</span>
            </div>

            <div className="comments-list">
              {comments.map((c) => (
                <div key={c.id} className="comment-item">
                  <div className="comment-head">
                    <strong>{c.author}</strong>
                    <span>{c.timeAgo}</span>
                  </div>
                  <Stars value={c.rating} />
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Object;
