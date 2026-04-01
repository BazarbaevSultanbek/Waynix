import React, { useState } from 'react'
import {
  Search, MapPin, Star, ArrowLeft, SlidersHorizontal,
  List, LayoutGrid as GridIcon, Info, Bookmark, Map, ChevronDown, ChevronUp, LayoutGrid
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PlaceDetails from '../components/PlaceDetails'

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
    description: "Ushbu joy haqida qisqacha ma'lumot va uning o'ziga xos xususiyatlari haqida qisqacha tasnif. Qoraqalpog'istonning boy tarixi va madaniyatini o'zida mujassam etgan ushbu maskan har bir tashrif buyuruvchi uchun unutilmas taassurotlar va'da qiladi.",
    images: [
      `https://picsum.photos/seed/place${i + (listPage * 10)}/1200/800`,
      `https://picsum.photos/seed/place_alt${i + (listPage * 10)}/1200/800`,
      `https://picsum.photos/seed/place_alt2${i + (listPage * 10)}/1200/800`,
      `https://picsum.photos/seed/place_alt3${i + (listPage * 10)}/1200/800`,
      `https://picsum.photos/seed/place_alt4${i + (listPage * 10)}/1200/800`,
    ],
    rating: (4 + Math.random()).toFixed(1)
  }))
    .filter(place =>
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
          className="w-full"
        >
          <PlaceDetails
            place={selectedPlace}
            onBack={() => setSelectedPlace(null)}
          />
        </motion.div>
      ) : (
        <motion.div
          key="list"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="w-full"
        >
          {/* Explorer Toolbar */}
          <div className="flex flex-col gap-6 mb-10">
            <div className="flex items-center gap-4">
              <button
                onClick={onBack}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500">Joylar haqida</span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">
                  {category.title}
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap items-center gap-2 w-full">
                <div className="relative flex-1 max-w-[300px]">
                  <AnimatePresence mode="wait">
                    {isSearchOpen ? (
                      <motion.div
                        key="search-input"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="relative w-full"
                      >
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-500" />
                        <input
                          autoFocus
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Qidirish..."
                          className="w-full bg-white/5 border border-blue-500/50 rounded-2xl pl-11 pr-4 py-3 text-xs focus:outline-none focus:bg-white/10 transition-all text-white"
                        />
                        <button
                          onClick={() => {
                            setIsSearchOpen(false)
                            setSearchQuery('')
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-widest"
                        >
                          Yopish
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="dropdown"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                      >
                        <button
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between group hover:bg-white/10 transition-all min-w-[200px]"
                        >
                          <div className="flex items-center gap-2">
                            <LayoutGrid className="w-4 h-4 text-blue-500" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white truncate max-w-[120px]">
                              {activeSubCategory || 'Barchasi'}
                            </span>
                          </div>
                          {isDropdownOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                        </button>

                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute top-full left-0 mt-2 w-full bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl backdrop-blur-xl"
                            >
                              <div className="p-2 max-h-[300px] overflow-y-auto no-scrollbar">
                                <button
                                  onClick={() => {
                                    setActiveSubCategory(null)
                                    setIsDropdownOpen(false)
                                  }}
                                  className={`w-full text-left px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-between ${!activeSubCategory ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                >
                                  Barchasi
                                  {!activeSubCategory && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                </button>
                                {category.items.map((item, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => {
                                      setActiveSubCategory(item.name)
                                      setIsDropdownOpen(false)
                                    }}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-between ${activeSubCategory === item.name ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <item.icon className="w-3.5 h-3.5" />
                                      {item.name}
                                    </div>
                                    {activeSubCategory === item.name && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                  </button>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <div className="flex bg-white/5 border border-white/10 rounded-2xl p-1">
                    <button
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                      className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${isSearchOpen ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}
                      title="Qidirish"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setIsMapMode(!isMapMode)}
                      className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${isMapMode ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}
                      title="Xarita"
                    >
                      <Map className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => {
                        setIsSortOpen(!isSortOpen)
                        if (!isSortOpen) setSortBy(sortBy === 'name' ? 'rating' : 'name')
                        else setSortBy(null)
                      }}
                      className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${isSortOpen ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}
                      title="Tartiblash"
                    >
                      <SlidersHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex bg-white/5 border border-white/10 rounded-2xl p-1">
                    <button
                      onClick={() => setViewMode('list')}
                      className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}
                      title="Ro'yxat"
                    >
                      <List className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`w-10 h-10 flex items-center justify-center rounded-xl transition-all ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'}`}
                      title="Grid"
                    >
                      <GridIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isMapMode ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full h-[500px] bg-white/5 border border-white/10 rounded-[32px] mb-12 flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px]" />
              </div>
              <div className="text-center z-10">
                <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-white mb-2">Xarita ko'rinishi</h3>
                <p className="text-gray-500 text-sm">Ushbu hududdagi barcha joylar xaritada ko'rsatilmoqda</p>
                <button
                  onClick={() => setIsMapMode(false)}
                  className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase tracking-widest"
                >
                  Ro'yxatga qaytish
                </button>
              </div>
            </motion.div>
          ) : (
            <div className={`grid gap-4 mb-12 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredPlaces.length > 0 ? filteredPlaces.map((place, idx) => (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  className={`group relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] p-4 flex transition-all hover:bg-white/[0.06] hover:border-white/20 ${viewMode === 'grid' ? 'flex-col' : 'flex-row items-center'}`}
                >
                  <div
                    onClick={() => setSelectedPlace(place)}
                    className={`relative overflow-hidden rounded-2xl shrink-0 cursor-pointer ${viewMode === 'grid' ? 'w-full h-48 mb-4' : 'w-32 h-32 md:w-48 md:h-40'}`}
                  >
                    <img
                      src={place.images[0]}
                      alt={place.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 border border-white/10">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-[10px] font-bold text-white">{place.rating}</span>
                    </div>
                  </div>

                  <div
                    onClick={() => setSelectedPlace(place)}
                    className={`flex-1 cursor-pointer ${viewMode === 'grid' ? '' : 'ml-6'}`}
                  >
                    <div className="flex flex-col h-full justify-center">
                      <h3 className="text-xl font-black uppercase tracking-tighter text-white mb-1 group-hover:text-blue-400 transition-colors">{place.name}</h3>
                      <div className="flex items-center gap-1.5 text-gray-500 mb-3">
                        <MapPin className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">{place.location}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 max-w-xl">
                        {place.description}
                      </p>
                    </div>
                  </div>

                  <div className={`flex shrink-0 ${viewMode === 'grid' ? 'flex-row mt-4 gap-2' : 'flex-col ml-6 gap-2'}`}>
                    <button
                      onClick={() => setSelectedPlace(place)}
                      className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20 hover:scale-110 transition-all active:scale-95"
                      title="Batafsil"
                    >
                      <Info className="w-6 h-6" />
                    </button>
                    <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-gray-400 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all active:scale-95" title="Saqlash">
                      <Bookmark className="w-6 h-6" />
                    </button>
                  </div>
                </motion.div>
              )) : (
                <div className="col-span-full py-20 text-center">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                    <Search className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Hech narsa topilmadi</h3>
                  <p className="text-gray-500 text-sm">Qidiruv so'rovini o'zgartirib ko'ring</p>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-center items-center gap-3 mb-24">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setListPage(page)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className={`w-10 h-10 rounded-full font-bold text-sm transition-all flex items-center justify-center ${listPage === page ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-110' : 'bg-white/5 text-white hover:bg-white/10'}`}
              >
                {page}
              </button>
            ))}
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500">{category.title} bo'yicha mashhurlar</h2>
            </div>
            <div className="overflow-x-auto pb-6 no-scrollbar -mx-6 px-6">
              <div className="flex gap-5 w-max">
                {popularPlaces.slice(0, 4).map((place, idx) => (
                  <motion.div
                    key={place.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="relative w-[220px] bg-[#111] border border-white/10 rounded-3xl overflow-hidden group cursor-pointer shadow-2xl"
                  >
                    <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 border border-white/10">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-[10px] font-bold text-white">{place.rating}</span>
                    </div>
                    <div className="h-[160px] overflow-hidden relative">
                      <img src={place.image} alt={place.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="text-[8px] font-bold uppercase tracking-widest text-blue-500">{place.type}</span>
                        <h3 className="text-sm font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors truncate">{place.name}</h3>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span className="text-[10px] font-medium truncate">{place.location}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
