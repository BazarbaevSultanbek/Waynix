import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../../utils/banner/Banner";
import Footer from "../../utils/footer/Footer";
import "../../utils/styles/DetailPage.scss";

function StarLine({ rating }) {
  const full = Math.round(rating);
  return <span className="stars">{"★".repeat(full)}{"☆".repeat(5 - full)}</span>;
}

export default function DetailPage({ title, data, basePath }) {
  const { id } = useParams();
  const current = useMemo(() => data.find((item) => String(item.id) === String(id)), [data, id]);
  const [activeIndex, setActiveIndex] = useState(0);

  const nearby = useMemo(() => {
    if (!current) return [];
    return data.filter((item) => item.id !== current.id).slice(0, 3);
  }, [data, current]);

  if (!current) {
    return (
      <>
        <Banner />
        <section className="detail-page">
          <div className="detail-wrap">
            <div className="detail-not-found">
              <h2>Obyekt topilmadi</h2>
              <Link to={basePath}>Orqaga qaytish</Link>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const images = current.images?.length ? current.images : [current.image];
  const activeImage = images[activeIndex] || current.image;

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
              <h3>Tavsif</h3>
              <p>{current.fullDescription}</p>
            </div>

            <div className="card info-card">
              <div className="info-item">
                <span className="icon">🕒</span>
                <div>
                  <div className="label">Ish vaqti</div>
                  <div className="value">{current.hours}</div>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <div className="label">Manzil</div>
                  <div className="value">{current.address}</div>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <div className="label">Telefon</div>
                  <div className="value link">{current.phone}</div>
                </div>
              </div>

              <div className="social-links">
                <a href={current.socials.website}>Website</a>
                <a href={current.socials.instagram}>Instagram</a>
                <a href={current.socials.telegram}>Telegram</a>
                <a href={current.socials.facebook}>Facebook</a>
              </div>
            </div>

            <div className="card review-card">
              <h3>Baho va sharhlar</h3>
              <div className="review-stars"><StarLine rating={current.rating} /></div>
              <textarea placeholder="Fikringizni yozing..." />
              <button className="send-btn" type="button">Yuborish</button>

              <div className="comments">
                <h4>Sharhlar (3)</h4>
                <div className="comment">
                  <div className="comment-head"><strong>Aziza Karimova</strong><span>2 kun oldin</span></div>
                  <StarLine rating={5} />
                  <p>Ajoyib joy! Tashrif buyurishga arziydi.</p>
                </div>
                <div className="comment">
                  <div className="comment-head"><strong>Sardor Tursunov</strong><span>1 hafta oldin</span></div>
                  <StarLine rating={4} />
                  <p>Umumiy taassurot yaxshi, xizmat ham yaxshi.</p>
                </div>
                <div className="comment">
                  <div className="comment-head"><strong>Nilufar Rahimova</strong><span>2 hafta oldin</span></div>
                  <StarLine rating={5} />
                  <p>Fotolar va manzara juda zo'r chiqadi.</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="detail-side">
            <div className="card">
              <h3>Yaqin atrofdagi joylar</h3>
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
