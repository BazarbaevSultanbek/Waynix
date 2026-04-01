import React, { useState } from 'react'
import {
  Search,
  MapPin,
  Star,
  ArrowLeft,
  SlidersHorizontal,
  List,
  LayoutGrid as GridIcon,
  Info,
  Bookmark,
  Map,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PlaceDetails from '../components/PlaceDetails'
import '../utils/styles/joylar-haqida.css'

export default function JoylarHaqida({ category, initialSubCategory, onBack, popularPlaces }) {
  const [activeSubCategory, setActiveSubCategory] = useState(initialSubCategory)
  const [listPage, setListPage] = useState(1)
  const [viewMode, setViewMode] = useState('list')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [isMapMode, setIsMapMode] = useState(false)
  const [sortBy, setSortBy] = useState(null)
  const [selectedPlace, setSelectedPlace] = useState(null)

  const filteredPlaces = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: `${activeSubCategory || 'Barchasi'} - Joy ${i + 1}`,
    location: "Nukus shahri, Berdaq ko'chasi",
    description:
      "Ushbu joy haqida qisqacha ma'lumot va uning o'ziga xos xususiyatlari haqida qisqacha tasnif. Qoraqalpog'istonning boy tarixi va madaniyatini o'zida mujassam etgan ushbu maskan har bir tashrif buyuruvchi uchun unutilmas taassurotlar va'da qiladi.",
    images: [
      `https://picsum.photos/seed/place${i + listPage * 10}/1200/800`,
      `https://picsum.photos/seed/place_alt${i + listPage * 10}/1200/800`,
    ],
    rating: (4 + Math.random()).toFixed(1),
  }))
    .filter(
      (place) =>
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      if (sortBy === 'rating') return Number(b.rating) - Number(a.rating)
      return 0
    })

  return (
    <AnimatePresence mode="wait">
      {selectedPlace ? (
        <motion.div
          key="details"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          <PlaceDetails place={selectedPlace} onBack={() => setSelectedPlace(null)} />
        </motion.div>
      ) : (
        <motion.div
          key="list"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <div className="places-toolbar">
            <div className="places-title-row">
              <button onClick={onBack} className="places-back">
                <ArrowLeft className="icon-sm" />
              </button>
              <div>
                <div className="places-kicker">
                  <span className="places-dot" />
                  <span>Joylar haqida</span>
                </div>
                <h2>{category.title}</h2>
              </div>
            </div>

            <div className="places-controls">
              <div className="places-filter">
                {isSearchOpen ? (
                  <div className="places-search">
                    <Search className="icon-xs" />
                    <input
                      autoFocus
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Qidirish..."
                    />
                    <button onClick={() => { setIsSearchOpen(false); setSearchQuery('') }}>Yopish</button>
                  </div>
                ) : (
                  <div className="places-dropdown">
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                      <LayoutGrid className="icon-xs" />
                      <span>{activeSubCategory || 'Barchasi'}</span>
                      {isDropdownOpen ? <ChevronUp className="icon-xs" /> : <ChevronDown className="icon-xs" />}
                    </button>
                    {isDropdownOpen && (
                      <div className="places-dropdown-menu">
                        <button
                          className={!activeSubCategory ? 'active' : ''}
                          onClick={() => { setActiveSubCategory(null); setIsDropdownOpen(false) }}
                        >
                          Barchasi
                        </button>
                        {category.items.map((item, idx) => (
                          <button
                            key={idx}
                            className={activeSubCategory === item.name ? 'active' : ''}
                            onClick={() => { setActiveSubCategory(item.name); setIsDropdownOpen(false) }}
                          >
                            <item.icon className="icon-xs" />
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="places-actions">
                <div className="places-action-group">
                  <button className={isSearchOpen ? 'active' : ''} onClick={() => setIsSearchOpen(!isSearchOpen)}>
                    <Search className="icon-sm" />
                  </button>
                  <button className={isMapMode ? 'active' : ''} onClick={() => setIsMapMode(!isMapMode)}>
                    <Map className="icon-sm" />
                  </button>
                  <button
                    className={isSortOpen ? 'active' : ''}
                    onClick={() => {
                      setIsSortOpen(!isSortOpen)
                      if (!isSortOpen) setSortBy(sortBy === 'name' ? 'rating' : 'name')
                      else setSortBy(null)
                    }}
                  >
                    <SlidersHorizontal className="icon-sm" />
                  </button>
                </div>
                <div className="places-action-group">
                  <button className={viewMode === 'list' ? 'active' : ''} onClick={() => setViewMode('list')}>
                    <List className="icon-sm" />
                  </button>
                  <button className={viewMode === 'grid' ? 'active' : ''} onClick={() => setViewMode('grid')}>
                    <GridIcon className="icon-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {isMapMode ? (
            <motion.div className="places-map" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="places-map-bg" />
              <div className="places-map-content">
                <MapPin className="icon-lg" />
                <h3>Xarita ko'rinishi</h3>
                <p>Ushbu hududdagi barcha joylar xaritada ko'rsatilmoqda</p>
                <button onClick={() => setIsMapMode(false)}>Ro'yxatga qaytish</button>
              </div>
            </motion.div>
          ) : (
            <div className={`places-list ${viewMode === 'grid' ? 'is-grid' : ''}`}>
              {filteredPlaces.length ? (
                filteredPlaces.map((place, idx) => (
                  <motion.div
                    key={place.id}
                    className="places-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="places-card-image" onClick={() => setSelectedPlace(place)}>
                      <img src={place.images[0]} alt={place.name} />
                      <div className="places-card-rating">
                        <Star className="icon-xs" />
                        <span>{place.rating}</span>
                      </div>
                    </div>
                    <div className="places-card-body" onClick={() => setSelectedPlace(place)}>
                      <h3>{place.name}</h3>
                      <div className="places-card-meta">
                        <MapPin className="icon-xs" />
                        <span>{place.location}</span>
                      </div>
                      <p>{place.description}</p>
                    </div>
                    <div className="places-card-actions">
                      <button className="primary" onClick={() => setSelectedPlace(place)}>
                        <Info className="icon-sm" />
                      </button>
                      <button>
                        <Bookmark className="icon-sm" />
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="places-empty">
                  <Search className="icon-lg" />
                  <h3>Hech narsa topilmadi</h3>
                  <p>Qidiruv so'rovini o'zgartirib ko'ring</p>
                </div>
              )}
            </div>
          )}

          <div className="places-pagination">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={listPage === page ? 'active' : ''}
                onClick={() => { setListPage(page); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              >
                {page}
              </button>
            ))}
          </div>

          <div className="places-popular">
            <div className="places-popular-head">
              <h2>{category.title} bo'yicha mashhurlar</h2>
            </div>
            <div className="places-popular-row">
              {popularPlaces.slice(0, 4).map((place, idx) => (
                <motion.div
                  key={place.id}
                  className="places-popular-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="places-popular-rating">
                    <Star className="icon-xs" />
                    <span>{place.rating}</span>
                  </div>
                  <div className="places-popular-image">
                    <img src={place.image} alt={place.name} />
                  </div>
                  <div className="places-popular-body">
                    <span>{place.type}</span>
                    <h3>{place.name}</h3>
                    <div>
                      <MapPin className="icon-xs" />
                      <span>{place.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
