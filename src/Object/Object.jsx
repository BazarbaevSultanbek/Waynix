import Banner from "../utils/banner/Banner";
import Footer from "../utils/footer/Footer";
import "../utils/styles/Object.scss";

const Object = () => {
  return (
    <>
      <Banner />
      <section className="object-page">
        <div className="object-page__wrap">
          <div className="object-main">
            <div className="object-hero">
              <div className="object-info">
                <h1>Ayoz qal'a</h1>
                <span className="object-type">Tarixiy joylar</span>

                <div className="object-rating">
                  <span className="stars">★★★★★</span>
                  <span className="rating-value">4.9</span>
                  <span className="rating-count">(25 sharh)</span>
                </div>

                <div className="object-meta">
                  <div className="meta-row">
                    📍 Ellikqala tumani, Qoraqalpog'iston
                  </div>
                  <div className="meta-row">🔖 Saqlash</div>
                </div>
              </div>

              <div className="object-gallery">
                <div className="gallery-main">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
                    alt="Ayoz qal'a"
                  />
                  <button className="gallery-btn left">‹</button>
                  <button className="gallery-btn right">›</button>
                  <span className="gallery-count">1 / 5</span>
                </div>
                <div className="gallery-thumbs">
                  <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400&auto=format&fit=crop"
                    alt=""
                    className="is-active"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400&auto=format&fit=crop"
                    alt=""
                  />
                  <img
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400&auto=format&fit=crop"
                    alt=""
                  />
                  <img
                    src="https://images.unsplash.com/photo-1458842727533-7c9053bfea65?q=80&w=400&auto=format&fit=crop"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="card">
              <h3>Tavsif</h3>
              <p>
                Ayoz qal'a — qadimgi Xorazm davlatining go'zal poytaxti bo'lib,
                miloddan avvalgi IV–III asrlarda qurilgan. Bu noyob arxeologik
                yodgorlik O'rta Osiyodagi eng qadimgi shaharlardan biri
                sanaladi.
              </p>
            </div>

            <div className="card info-card">
              <div className="info-item">
                <div className="icon">🕒</div>
                <div>
                  <div className="label">Ish vaqti</div>
                  <div className="value">09:00 - 22:00</div>
                  <div className="sub">Dush-Shan</div>
                </div>
              </div>
              <div className="info-item">
                <div className="icon">📍</div>
                <div>
                  <div className="label">Manzil</div>
                  <div className="value">Ellikqala ko'chasi, 45-uy</div>
                </div>
              </div>
              <div className="info-item">
                <div className="icon">📞</div>
                <div>
                  <div className="label">Telefon</div>
                  <div className="value link">+998 90 123 45 67</div>
                </div>
              </div>

              <div className="info-links">
                <span>🌐 Website</span>
                <span>📷 Instagram</span>
                <span>📨 Telegram</span>
                <span>👍 Facebook</span>
                <span>▶ YouTube</span>
                <span>✉ Email</span>
                <span>in LinkedIn</span>
              </div>

              <div className="info-footer">
                <span>Qo'shgan:</span>
                <strong>Aziz Karimov</strong>
                <div className="social-mini">📷 ✈️ in</div>
              </div>
            </div>

            <div className="card map-card">
              <h3>Xarita</h3>
              <div className="map-box">
                <span>📍</span>
                <p>Xarita bu yerda</p>
              </div>
            </div>

            <div className="card review-card">
              <h3>Baho va sharh</h3>
              <div className="review-stars">☆☆☆☆☆</div>
              <textarea placeholder="Fikringizni yozing..."></textarea>
              <button className="btn">✉ Yuborish</button>
            </div>

            <div className="card comments-card">
              <h3>Sharhlar</h3>
              <div className="comment">
                <div className="comment-head">
                  <strong>Jamshid Karimov</strong>
                  <span>2024-01-20</span>
                </div>
                <div className="comment-stars">★★★★★</div>
                <p>
                  Hayratlanarli tarixiy joy! Gidning tushuntirishlari juda
                  qiziqarli.
                </p>
              </div>

              <div className="comment">
                <div className="comment-head">
                  <strong>Nilufar Yusupova</strong>
                  <span>2024-01-15</span>
                </div>
                <div className="comment-stars">★★★★★</div>
                <p>O'zbek tarixining qadimiy sahifalarini his qilish mumkin.</p>
              </div>
            </div>
          </div>

          <aside className="object-side">
            <h3>Yaqin turobeklar</h3>

            <div className="side-card">
              <img
                src="https://images.unsplash.com/photo-1458842727533-7c9053bfea65?q=80&w=800&auto=format&fit=crop"
                alt=""
              />
              <span className="side-tag">Muzey</span>
              <span className="side-rate">★ 4.7</span>
              <div className="side-body">
                <strong>Qoraqalpog'iston muzeyi</strong>
                <p>📍 25 km</p>
              </div>
            </div>

            <div className="side-card">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop"
                alt=""
              />
              <span className="side-tag">Arxeologik yodgorlik</span>
              <span className="side-rate">★ 4.5</span>
              <div className="side-body">
                <strong>Guldursun qal'asi</strong>
                <p>📍 18 km</p>
              </div>
            </div>

            <div className="side-card">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop"
                alt=""
              />
              <span className="side-tag">Ekotur joyi</span>
              <span className="side-rate">★ 4.6</span>
              <div className="side-body">
                <strong>Orol dengizi</strong>
                <p>📍 45 km</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Object;
