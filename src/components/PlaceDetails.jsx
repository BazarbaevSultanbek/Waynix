import React from 'react'
import {
  ArrowLeft,
  MapPin,
  Star,
  Bookmark,
  Clock,
  Phone,
  Share2,
  Wifi,
  Coffee,
  Car,
  Utensils,
  Map as MapIcon,
} from 'lucide-react'
import '../utils/styles/place-details.css'

const fallbackImage = 'https://picsum.photos/seed/waynix-place/1200/600'

export default function PlaceDetails({ place, onBack }) {
  if (!place) return null

  const images = place.images?.length ? place.images : [place.image || fallbackImage]
  const rating = place.rating || '4.2'
  const reviewsCount = place.reviewsCount || '120+'
  const city = place.location || 'Nukus shahri'

  return (
    <div className="place-details">
      <div className="place-hero">
        <img src={images[0]} alt={place.name} className="place-hero-image" />
        <button className="place-back" onClick={onBack}>
          <ArrowLeft className="icon-sm" />
        </button>
        <div className="place-hero-dot" />
      </div>

      <div className="place-titlebar">
        <div>
          <p className="place-kicker">Joylashuv tafsilotlari</p>
          <h1 className="place-title">{place.name}</h1>
          <div className="place-location">
            <MapPin className="icon-xs" />
            <span>{city}</span>
          </div>
        </div>
        <div className="place-stats">
          <div className="place-stat">
            <Star className="icon-sm star" />
            <div>
              <div className="place-stat-value">{rating}</div>
              <div className="place-stat-label">Reyting</div>
            </div>
          </div>
          <div className="place-stat">
            <div className="place-stat-value">{reviewsCount}</div>
            <div className="place-stat-label">Sharhlar</div>
          </div>
          <button className="place-bookmark">
            <Bookmark className="icon-sm" />
          </button>
        </div>
      </div>

      <div className="place-grid">
        <div className="place-card">
          <div className="place-card-head">
            <span className="place-card-dot" />
            <h3>Tavsifi</h3>
          </div>
          <p className="place-card-text">
            {place.description || 'Ushbu joy haqida qisqacha maʼlumot. Qoraqalpogʼistonning boy tarixi va madaniyatini oʼzida mujassam etgan ushbu maskan har bir tashrif buyuruvchi uchun unutilmas taassurotlar vaʼda qiladi.'}
          </p>
          <p className="place-card-text muted">
            Bu yerda siz qadimiy anʼanalar va zamonaviy qulayliklarning uygʼunligini koʼrishingiz mumkin.
          </p>
        </div>

        <div className="place-side">
          <div className="place-card place-hours">
            <div className="place-card-head">
              <Clock className="icon-xs" />
              <h3>Ish vaqti</h3>
              <span className="place-open">Ochiq</span>
            </div>
            <div className="place-hours-list">
              <div>
                <span>Dush - Juma</span>
                <strong>09:00 - 18:00</strong>
              </div>
              <div>
                <span>Shanba</span>
                <strong>10:00 - 16:00</strong>
              </div>
              <div>
                <span>Yakshanba</span>
                <strong className="closed">Yopiq</strong>
              </div>
            </div>
          </div>

          <div className="place-offer">
            <div className="place-offer-icon">
              <Star className="icon-sm" />
            </div>
            <div>
              <h4>Maxsus taklif</h4>
              <p>Chegirmalar mavjud</p>
              <button>Batafsil koʼrish</button>
            </div>
          </div>
        </div>
      </div>

      <div className="place-grid">
        <div className="place-card place-contact">
          <div className="place-card-head">
            <Phone className="icon-xs" />
            <h3>Aloqa</h3>
          </div>
          <div className="place-contact-row">
            <span>Telefon</span>
            <strong>{place.phones?.[0] || '+998 90 123 45 67'}</strong>
          </div>
          <div className="place-contact-row">
            <span>Ijtimoiy tarmoqlar</span>
            <div className="place-socials">
              <Share2 className="icon-xs" />
              <Share2 className="icon-xs" />
              <Share2 className="icon-xs" />
            </div>
          </div>
        </div>

        <div className="place-card place-amenities">
          <div className="place-card-head">
            <Star className="icon-xs" />
            <h3>Qulayliklar</h3>
          </div>
          <div className="place-amenities-list">
            <div><Wifi className="icon-xs" /> Bepul Wi‑Fi</div>
            <div><Coffee className="icon-xs" /> Kafe</div>
            <div><Car className="icon-xs" /> Avtoturargoh</div>
            <div><Utensils className="icon-xs" /> Restoran</div>
          </div>
        </div>
      </div>

      <div className="place-grid place-map-section">
        <div className="place-card place-map">
          <div className="place-card-head">
            <MapIcon className="icon-xs" />
            <h3>Xarita</h3>
          </div>
          <div className="place-map-frame">
            <div className="place-map-pin">
              <MapPin className="icon-sm" />
            </div>
          </div>
          <div className="place-map-footer">
            <div>
              <span>Manzil</span>
              <strong>{city}</strong>
            </div>
            <button className="place-map-btn">
              <MapIcon className="icon-xs" />
            </button>
          </div>
        </div>

        <div className="place-card place-nearby">
          <div className="place-card-head">
            <Star className="icon-xs" />
            <h3>Yaqin joylar</h3>
          </div>
          <div className="place-nearby-list">
            {images.slice(0, 4).map((img, idx) => (
              <div key={idx} className="place-nearby-item">
                <img src={img} alt="Nearby" />
                <div>
                  <strong>Yaqin joy nomi {idx + 1}</strong>
                  <span>450m</span>
                </div>
                <div className="place-nearby-rating">
                  <Star className="icon-xs" />
                  4.8
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="place-reviews">
        <div className="place-review-form">
          <h3>Sharh qoldiring</h3>
          <p>Oʼz taassurotlaringiz bilan boʼlishing</p>
          <div className="place-rating-row">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="place-star">★</span>
            ))}
          </div>
          <textarea placeholder="Bu yerga yozing..." />
          <button>Yuborish</button>
        </div>
        <div className="place-review-list">
          <h4>Soʼnggi sharhlar (45)</h4>
          {[1, 2, 3].map((i) => (
            <div key={i} className="place-review-item">
              <div className="place-review-avatar">{i === 1 ? 'A' : i === 2 ? 'S' : 'M'}</div>
              <div>
                <div className="place-review-head">
                  <strong>{i === 1 ? 'Azizbek' : i === 2 ? 'Sardor' : 'Malika'}</strong>
                  <span>2 kun avval</span>
                </div>
                <div className="place-review-stars">★★★★★</div>
                <p>Juda ajoyib joy ekan! Muzey eksponatlari va gidning tushuntirishlari menga juda yoqdi.</p>
              </div>
            </div>
          ))}
          <button className="place-review-more">Barchasini koʼrish</button>
        </div>
      </div>
    </div>
  )
}
