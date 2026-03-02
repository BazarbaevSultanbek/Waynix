import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../../utils/banner/Banner";
import Footer from "../../utils/footer/Footer";
import "../../utils/styles/DetailPage.scss";
import $api from "../../http/axios";
import { useI18n } from "../../i18n/I18nProvider";
import { translateCatalogDesc } from "../../i18n/catalogText";

const API_ORIGIN =
  import.meta.env.VITE_API_ORIGIN || "https://waynix-server.vercel.app";
const categoryLabel = {
  tours: "Turobyektlar",
  shop: "Savdo markazlari",
  cafe: "Ovqatlanish joylari",
  hotels: "Mehmonxonalar",
  services: "Servislar",
  entertainment: "Entertainment",
  medical: "Tibbiyot",
  government: "Davlat idoralari",
  education: "Ta'lim",
};

const toCardShape = (item) => ({
  id: item._id || item.id,
  name: item.name,
  type: item.type || categoryLabel[item.category] || item.category,
  desc: item.description || item.desc || "",
  fullDescription: item.description || item.fullDescription || "",
  location: item.location || "",
  address: item.location || item.address || "",
  region: item.region || "",
  rating: Number(item.rating || 4.5),
  image: item.images?.[0]
    ? item.images[0].startsWith("http")
      ? item.images[0]
      : `${API_ORIGIN}${item.images[0]}`
    : item.image,
  images: Array.isArray(item.images)
    ? item.images.map((img) =>
        img.startsWith("http") ? img : `${API_ORIGIN}${img}`
      )
    : item.images,
  phone: item.phones?.[0] || item.phone || "",
  hours: item.workingHours || item.hours || "",
  socials: item.socialLinks || item.socials || {},
});

function StarLine({ rating }) {
  const full = Math.round(rating);
  return <span className="stars">{"★".repeat(full)}{"☆".repeat(5 - full)}</span>;
}

export default function DetailPage({ title, data, basePath, categoryKey }) {
  const { t, language } = useI18n();
  const { id } = useParams();
  const [submittedPlaces, setSubmittedPlaces] = useState([]);
  const merged = useMemo(
    () => [...submittedPlaces, ...data].map(toCardShape),
    [submittedPlaces, data]
  );
  const current = useMemo(
    () => merged.find((item) => String(item.id) === String(id)),
    [merged, id]
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const loadPlaces = async () => {
      try {
        const { data: places } = await $api.get("/places/public", {
          params: { category: categoryKey },
        });
        if (isMounted) setSubmittedPlaces((places || []).map(toCardShape));
      } catch {
        if (isMounted) setSubmittedPlaces([]);
      }
    };
    loadPlaces();
    return () => {
      isMounted = false;
    };
  }, [categoryKey]);

  const nearby = useMemo(() => {
    if (!current) return [];
    return merged.filter((item) => item.id !== current.id).slice(0, 3);
  }, [merged, current]);

  if (!current) {
    return (
      <>
        <Banner />
        <section className="detail-page">
          <div className="detail-wrap">
            <div className="detail-not-found">
              <h2>{t("catalog.notFound")}</h2>
              <Link to={basePath}>{t("catalog.back")}</Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const images = current.images?.length ? current.images : [current.image];
  const activeImage = images[activeIndex] || current.image;
  const localizedDesc =
    current?.translations?.desc?.[language] ||
    translateCatalogDesc(current.desc, language);

  return (
    <>
      <Banner />
      <section className="detail-page">
        <div className="detail-wrap">
          <div className="detail-main">
            <div className="detail-title-card">
              <h1>{current.name}</h1>
              <div className="detail-meta-row">
                <span className="detail-type">{current.type}</span>
                <span className="detail-rating">★ {current.rating}</span>
                <span className="detail-location">📍 {current.location}, O'zbekiston</span>
              </div>
            </div>

            <div className="detail-gallery card">
              <img src={activeImage} alt={current.name} className="detail-main-image" />
              <div className="detail-thumbs">
                {images.map((img, index) => (
                  <button
                    key={`${img}-${index}`}
                    type="button"
                    className={`thumb ${activeIndex === index ? "is-active" : ""}`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <img src={img} alt={`${current.name}-${index}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="card">
              <h3>{t("catalog.description")}</h3>
              <p>{localizedDesc || current.fullDescription}</p>
            </div>

            <div className="card info-card">
              <div className="info-item">
                <span className="icon">🕒</span>
                <div>
                  <div className="label">{t("catalog.hours")}</div>
                  <div className="value">{current.hours}</div>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <div className="label">{t("catalog.address")}</div>
                  <div className="value">{current.address}</div>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <div className="label">{t("catalog.phone")}</div>
                  <div className="value link">{current.phone}</div>
                </div>
              </div>

              <div className="social-links">
                <a href={current.socials.website}>{t("catalog.website")}</a>
                <a href={current.socials.instagram}>{t("catalog.instagram")}</a>
                <a href={current.socials.telegram}>{t("catalog.telegram")}</a>
                <a href={current.socials.facebook}>{t("catalog.facebook")}</a>
              </div>
            </div>

            <div className="card review-card">
              <h3>{t("catalog.ratingComments")}</h3>
              <div className="review-stars"><StarLine rating={current.rating} /></div>
              <textarea placeholder={t("catalog.writeComment")} />
              <button className="send-btn" type="button">{t("catalog.send")}</button>

              <div className="comments">
                <h4>{t("catalog.comments")} (3)</h4>
                <div className="comment">
                  <div className="comment-head"><strong>Aziza Karimova</strong><span>{t("catalog.commentAgo2d")}</span></div>
                  <StarLine rating={5} />
                  <p>{t("catalog.commentText1")}</p>
                </div>
                <div className="comment">
                  <div className="comment-head"><strong>Sardor Tursunov</strong><span>{t("catalog.commentAgo1w")}</span></div>
                  <StarLine rating={4} />
                  <p>{t("catalog.commentText2")}</p>
                </div>
                <div className="comment">
                  <div className="comment-head"><strong>Nilufar Rahimova</strong><span>{t("catalog.commentAgo2w")}</span></div>
                  <StarLine rating={5} />
                  <p>{t("catalog.commentText3")}</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="detail-side">
            <div className="card">
              <h3>{t("catalog.nearby")}</h3>
              <div className="nearby-list">
                {nearby.map((item) => (
                  <Link key={item.id} to={`${basePath}/${item.id}`} className="nearby-item">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <strong>{item.name}</strong>
                      <p>{item.type}</p>
                      <span>★ {item.rating}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
}
