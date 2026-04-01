import React, { useEffect, useMemo, useState } from 'react'
import { ChevronRight, Sparkles, Star, Utensils, Hotel, Wrench, ShoppingBag, MapPin } from 'lucide-react'
import { apiRequest, API_BASE } from '../utils/api'
import '../utils/styles/offers.css'

const ASSET_BASE = API_BASE.replace(/\/api\/?$/, '')

const resolveImage = (src, fallbackSeed = 'waynix') => {
  if (!src) return `https://picsum.photos/seed/${fallbackSeed}/640/360`
  if (src.startsWith('http')) return src
  if (src.startsWith('//')) return `https:${src}`
  const clean = src.startsWith('/') ? src : `/${src}`
  return `${ASSET_BASE}${clean}`
}

const CATEGORY_CONFIG = [
  { key: 'all', label: 'Barchasi', icon: Sparkles },
  { key: 'cafe', label: 'Restoranlar', icon: Utensils },
  { key: 'hotels', label: 'Mehmonxonalar', icon: Hotel },
  { key: 'services', label: 'Xizmatlar', icon: Wrench },
  { key: 'shop', label: "Do'konlar", icon: ShoppingBag },
  { key: 'tours', label: 'Muzeylar', icon: MapPin },
  { key: 'entertainment', label: "Ko'ngilochar", icon: Sparkles },
  { key: 'medical', label: 'Tibbiyot', icon: Sparkles },
  { key: 'government', label: 'Davlat', icon: Sparkles },
  { key: 'education', label: "Ta'lim", icon: Sparkles },
]

const getCategoryLabel = (key) => {
  const item = CATEGORY_CONFIG.find((cat) => cat.key === key)
  return item ? item.label : 'Boshqa'
}

export default function Takliflar() {
  const [places, setPlaces] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    let alive = true
    setLoading(true)
    apiRequest('/places/public')
      .then((data) => {
        if (!alive) return
        setPlaces(Array.isArray(data) ? data : [])
      })
      .catch(() => {
        if (!alive) return
        setPlaces([])
      })
      .finally(() => {
        if (!alive) return
        setLoading(false)
      })
    return () => {
      alive = false
    }
  }, [])

  const filteredPlaces = useMemo(() => {
    if (activeCategory === 'all') return places
    return places.filter((place) => place.category === activeCategory)
  }, [places, activeCategory])

  const groupedPlaces = useMemo(() => {
    const groups = {}
    filteredPlaces.forEach((place) => {
      const key = place.category || 'other'
      if (!groups[key]) groups[key] = []
      groups[key].push(place)
    })
    return groups
  }, [filteredPlaces])

  const topPicks = filteredPlaces.slice(0, 8)

  return (
    <div className="offers-root">
      <section className="offers-hero">
        <div className="offers-hero-left">
          <p className="offers-subtitle">Yangiliklar va takliflar</p>
          <h1 className="offers-title">
            Eng so'nggi <span>e'lonlar</span>
          </h1>
        </div>
        <div className="offers-tabs">
          {CATEGORY_CONFIG.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.key
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`offers-tab ${isActive ? 'is-active' : ''}`}
              >
                <Icon className="offers-tab-icon" />
                {cat.label}
              </button>
            )
          })}
        </div>
      </section>

      <section className="offers-premium">
        <div className="offers-premium-head">
          <div className="offers-premium-title">
            <Star className="offers-premium-icon" />
            <h2>Eng saralari to'plami</h2>
          </div>
          <button className="offers-link">
            Barchasi <ChevronRight className="offers-link-icon" />
          </button>
        </div>
        {loading ? (
          <div className="offers-empty">Ma'lumotlar yuklanmoqda...</div>
        ) : (
          <div className="offers-premium-grid">
            {topPicks.map((place, idx) => (
              <div className="offers-card" key={place._id || place.id || idx}>
                <div className="offers-card-image">
                  <img src={resolveImage(place.images?.[0], `premium-${idx}`)} alt={place.name} />
                </div>
                <div className="offers-card-body">
                  <p className="offers-card-title">{place.name}</p>
                  <p className="offers-card-meta">{getCategoryLabel(place.category)}</p>
                </div>
              </div>
            ))}
            {!loading && topPicks.length === 0 && (
              <div className="offers-empty">Hozircha takliflar yo'q</div>
            )}
          </div>
        )}
      </section>

      <div className="offers-list">
        {Object.entries(groupedPlaces).map(([categoryKey, items]) => (
          <section key={categoryKey} className="offers-row">
            <div className="offers-row-head">
              <div className="offers-row-pill">{getCategoryLabel(categoryKey)}</div>
              <button className="offers-link" onClick={() => setActiveCategory(categoryKey)}>
                Barchasi <ChevronRight className="offers-link-icon" />
              </button>
            </div>
            <div className="offers-row-grid">
              {items.slice(0, 8).map((place, idx) => (
                <div className="offers-card" key={place._id || place.id || idx}>
                  <div className="offers-card-image">
                    <img
                      src={resolveImage(place.images?.[0], `cat-${categoryKey}-${idx}`)}
                      alt={place.name}
                    />
                  </div>
                  <div className="offers-card-body">
                    <p className="offers-card-title">{place.name}</p>
                    <p className="offers-card-meta">{place.location || 'Nukus'}</p>
                  </div>
                </div>
              ))}
              {items.length === 0 && <div className="offers-empty">Hozircha ma'lumot yo'q</div>}
            </div>
          </section>
        ))}
        {!loading && Object.keys(groupedPlaces).length === 0 && (
          <div className="offers-empty">Hozircha takliflar mavjud emas.</div>
        )}
      </div>
    </div>
  )
}
