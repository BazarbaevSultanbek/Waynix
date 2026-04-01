/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, ChevronDown, MapPin, Utensils, Bed, Wrench, Music, MoreHorizontal, 
  Bell, Globe, User, Star, Handshake, Store, Users, ShieldCheck,
  Library, Map, Castle, Sparkles, Trees, Pizza, Coffee, Soup, Hotel, 
  Home, Building2, Scissors, Printer, Stethoscope, HeartPulse, Car, 
  CreditCard, Film, Drama, FerrisWheel, Gamepad2, ChevronRight, ArrowLeft,
  Filter, SlidersHorizontal, List, LayoutGrid, LayoutGrid as GridIcon, Info, Bookmark,
  Share2, Heart, Eye, PartyPopper, Tent, ShoppingBag, Shield, Target
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AddPlace from '../pages/AddPlace';
import JoylarHaqida from '../pages/JoylarHaqida';
import Xarita from '../pages/Xarita';
import Takliflar from '../pages/Takliflar';
import Profile from '../pages/Profile';
import PlaceDetails from '../components/PlaceDetails';
import AuthModal from '../components/AuthModal';
import AboutUs from '../pages/AboutUs';
import { LanguageProvider, useLanguage } from '../LanguageContext';
import '../utils/styles/main.css';
import { apiRequest } from '../utils/api';

const news = [
  {
    id: 1,
    title: "Moynoqqa sayohat",
    description: "Orol dengizi qirg'oqlariga unutilmas sayohatni rejalashtiring.",
    image: "https://picsum.photos/seed/muynak/800/400",
    tag: "Sayohat"
  },
  {
    id: 2,
    title: "Yangi restoran ochildi",
    description: "Nukus markazida milliy taomlar restorani o'z ishini boshladi.",
    image: "https://picsum.photos/seed/food/800/400",
    tag: "Oshxona"
  },
  {
    id: 3,
    title: "Akciya: 20% chegirma",
    description: "Barcha mehmonxonalar uchun bahorgi chegirmalar e'lon qilindi.",
    image: "https://picsum.photos/seed/promo/800/400",
    tag: "Chegirma"
  },
  {
    id: 4,
    title: "Muzeyga marhamat",
    description: "Savitskiy muzeyida yangi ko'rgazma ochildi.",
    image: "https://picsum.photos/seed/museum/800/400",
    tag: "Madaniyat"
  },
  {
    id: 5,
    title: "Festival 2026",
    description: "Yozgi musiqa festivaliga chiptalar sotuvda.",
    image: "https://picsum.photos/seed/fest/800/400",
    tag: "Tadbir"
  },
  {
    id: 6,
    title: "Gid xizmati",
    description: "Professional gidlar bilan shaharni o'rganing.",
    image: "https://picsum.photos/seed/guide/800/400",
    tag: "Xizmat"
  }
];

const popularPlaces = [
  {
    id: 1,
    name: "Savitskiy Muzeyi",
    type: "San'at Muzeyi",
    location: "Nukus shahri",
    rating: 4.9,
    image: "https://picsum.photos/seed/savitskiy/400/300"
  },
  {
    id: 2,
    name: "Moynoq Kema Qabristoni",
    type: "Tarixiy Joy",
    location: "Moynoq tumani",
    rating: 4.7,
    image: "https://picsum.photos/seed/ships/400/300"
  },
  {
    id: 3,
    name: "Chilpiq Qal'asi",
    type: "Arxeologik Yodgorlik",
    location: "Nukus yaqinida",
    rating: 4.8,
    image: "https://picsum.photos/seed/chilpik/400/300"
  },
  {
    id: 4,
    name: "Sulton Uvays Bobo",
    type: "Ziyoratgoh",
    location: "Beruniy tumani",
    rating: 4.9,
    image: "https://picsum.photos/seed/ziyorat/400/300"
  },
  {
    id: 5,
    name: "Mizdaxan Kompleksi",
    type: "Tarixiy Majmua",
    location: "Xo'jayli tumani",
    rating: 4.6,
    image: "https://picsum.photos/seed/mizdaxan/400/300"
  },
  {
    id: 6,
    name: "Ustyurt Platosi",
    type: "Tabiat",
    location: "Qo'ng'irot tumani",
    rating: 4.9,
    image: "https://picsum.photos/seed/ustyurt/400/300"
  }
];

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

function AppContent() {
  const { language, setLanguage, t } = useLanguage();
  const [currentNews, setCurrentNews] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [directPlaceDetail, setDirectPlaceDetail] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const languages = [
    { code: 'uz', label: 'UZ' },
    { code: 'qr', label: 'QR' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ];

  const categoryExplorerData = [
    {
      id: "turobektlar",
      title: t.categories.turobektlar,
      description: t.categories.turobektlarDesc,
      icon: MapPin,
      colorClass: "cat-icon-blue",
      blobClass: "cat-blob-blue",
      items: [
        { name: language === 'uz' ? "Muzeylar" : language === 'qr' ? "Muzeyler" : language === 'ru' ? "Музеи" : "Museums", icon: Library, colorClass: "item-blue" },
        { name: language === 'uz' ? "Arxeologik joylar" : language === 'qr' ? "Arxeologiyalıq orınlar" : language === 'ru' ? "Археологические места" : "Archaeological Sites", icon: Map, colorClass: "item-yellow" },
        { name: language === 'uz' ? "Tarixiy obidalar" : language === 'qr' ? "Tariyxıy obidalar" : language === 'ru' ? "Исторические памятники" : "Historical Monuments", icon: Castle, colorClass: "item-orange" },
        { name: language === 'uz' ? "Ziyoratgohlar" : language === 'qr' ? "Ziyaratxanalar" : language === 'ru' ? "Святые места" : "Holy Places", icon: Sparkles, colorClass: "item-purple" },
        { name: language === 'uz' ? "Tabiiy maskanlar" : language === 'qr' ? "Tábiyǵıy orınlar" : language === 'ru' ? "Природные места" : "Nature Spots", icon: Trees, colorClass: "item-green" },
      ]
    },
    {
      id: "ovqatlanish",
      title: t.categories.ovqatlanish,
      description: t.categories.ovqatlanishDesc,
      icon: Utensils,
      colorClass: "cat-icon-orange",
      blobClass: "cat-blob-orange",
      items: [
        { name: language === 'uz' ? "Restoranlar" : language === 'qr' ? "Restoranlar" : language === 'ru' ? "Рестораны" : "Restaurants", icon: Utensils, colorClass: "item-red" },
        { name: language === 'uz' ? "Fast food" : language === 'qr' ? "Fast food" : language === 'ru' ? "Фастфуд" : "Fast Food", icon: Pizza, colorClass: "item-orange" },
        { name: language === 'uz' ? "Pizza" : language === 'qr' ? "Pizza" : language === 'ru' ? "Пицца" : "Pizza", icon: Pizza, colorClass: "item-yellow" },
        { name: language === 'uz' ? "Coffee shop" : language === 'qr' ? "Coffee shop" : language === 'ru' ? "Кофейни" : "Coffee Shops", icon: Coffee, colorClass: "item-amber" },
        { name: language === 'uz' ? "Milliy taomlar" : language === 'qr' ? "Milliy awqatlar" : language === 'ru' ? "Национальная кухня" : "National Cuisine", icon: Soup, colorClass: "item-emerald" },
      ]
    },
    {
      id: "tunash",
      title: t.categories.tunash,
      description: t.categories.tunashDesc,
      icon: Bed,
      colorClass: "cat-icon-purple",
      blobClass: "cat-blob-purple",
      items: [
        { name: language === 'uz' ? "Mehmonxonalar" : language === 'qr' ? "Meymanxanalar" : language === 'ru' ? "Отели" : "Hotels", icon: Building2, colorClass: "item-blue" },
        { name: language === 'uz' ? "Hostellar" : language === 'qr' ? "Hosteller" : language === 'ru' ? "Хостелы" : "Hostels", icon: Users, colorClass: "item-indigo" },
        { name: language === 'uz' ? "Ijaraga uylar" : language === 'qr' ? "Ijaraǵa úyler" : language === 'ru' ? "Аренда жилья" : "Rentals", icon: Home, colorClass: "item-purple" },
        { name: language === 'uz' ? "Dam olish maskanlari" : language === 'qr' ? "Tınıǵıw orınları" : language === 'ru' ? "Зоны отдыха" : "Recreation Areas", icon: Trees, colorClass: "item-green" },
        { name: language === 'uz' ? "Yurtalar" : language === 'qr' ? "Yurtalar" : language === 'ru' ? "Юрты" : "Yurts", icon: Tent, colorClass: "item-orange" },
      ]
    },
    {
      id: "xizmatlar",
      title: t.categories.xizmatlar,
      description: t.categories.xizmatlarDesc,
      icon: ShoppingBag,
      colorClass: "cat-icon-emerald",
      blobClass: "cat-blob-emerald",
      items: [
        { name: language === 'uz' ? "Transport" : language === 'qr' ? "Transport" : language === 'ru' ? "Транспорт" : "Transport", icon: Car, colorClass: "item-blue" },
        { name: language === 'uz' ? "Gidlar" : language === 'qr' ? "Gidlar" : language === 'ru' ? "Гиды" : "Guides", icon: Users, colorClass: "item-yellow" },
        { name: language === 'uz' ? "Do'konlar" : language === 'qr' ? "Dúkanlar" : language === 'ru' ? "Магазины" : "Shops", icon: ShoppingBag, colorClass: "item-emerald" },
        { name: language === 'uz' ? "Dorixonalar" : language === 'qr' ? "Dárixanalar" : language === 'ru' ? "Аптеки" : "Pharmacies", icon: Shield, colorClass: "item-red" },
        { name: language === 'uz' ? "Bankomatlar" : language === 'qr' ? "Bankomatlar" : language === 'ru' ? "Банкоматы" : "ATMs", icon: CreditCard, colorClass: "item-blue" },
      ]
    },
    {
      id: "entertainment",
      title: t.categories.entertainment,
      description: t.categories.entertainmentDesc,
      icon: Sparkles,
      colorClass: "cat-icon-pink",
      blobClass: "cat-blob-pink",
      items: [
        { name: language === 'uz' ? "Kinoteatrlar" : language === 'qr' ? "Kinoteatrlar" : language === 'ru' ? "Кинотеатры" : "Cinemas", icon: Film, colorClass: "item-red" },
        { name: language === 'uz' ? "Teatrlar" : language === 'qr' ? "Teatrlar" : language === 'ru' ? "Театры" : "Theaters", icon: Library, colorClass: "item-purple" },
        { name: language === 'uz' ? "Istirohat bog'lari" : language === 'qr' ? "Dem alıw baǵları" : language === 'ru' ? "Парки отдыха" : "Parks", icon: Trees, colorClass: "item-green" },
        { name: language === 'uz' ? "Klublar" : language === 'qr' ? "Klublar" : language === 'ru' ? "Клубы" : "Clubs", icon: Music, colorClass: "item-pink" },
        { name: language === 'uz' ? "Sport" : language === 'qr' ? "Sport" : language === 'ru' ? "Спорт" : "Sport", icon: Target, colorClass: "item-blue" },
      ]
    }
  ];

  const refreshSession = () => {
    apiRequest('/me')
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser(res?.user || null);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setCurrentUser(null);
      });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % news.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    refreshSession();
  }, []);

  const currentCategory = categoryExplorerData.find(c => c.id === activeCategory);
  
  if (currentPage === 'add-place') {
    return <AddPlace onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="main-root">
      {/* Navbar */}
      <nav className="main-nav">
        <div className="main-nav-inner">
          <div className="nav-brand">
            <div className="nav-brand-icon">
              <Globe className="icon-sm icon-white" />
            </div>
            <span className="nav-brand-text">Waynix</span>
          </div>
          
          <div className="nav-links">
            <button 
              onClick={() => {
                setCurrentPage('home');
                setIsDetailView(false);
                setDirectPlaceDetail(null);
              }} 
              className={`nav-link ${currentPage === 'home' && !isDetailView && !directPlaceDetail ? 'nav-link-active' : ''}`}
            >
              {t.nav.home}
            </button>
            <button 
              onClick={() => setCurrentPage('map')}
              className={`nav-link ${currentPage === 'map' ? 'nav-link-active' : ''}`}
            >
              {t.nav.map}
            </button>
            <button 
              onClick={() => setCurrentPage('offers')}
              className={`nav-link ${currentPage === 'offers' ? 'nav-link-active' : ''}`}
            >
              {t.nav.offers}
            </button>
            <button 
              onClick={() => setCurrentPage('about')}
              className={`nav-link ${currentPage === 'about' ? 'nav-link-active' : ''}`}
            >
              {t.nav.about}
            </button>
          </div>

          <div className="nav-actions">
            <div className="lang-switcher">
              <button className="lang-btn">
                {language} <ChevronDown className="icon-xs" />
              </button>
              <div className="lang-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`lang-option ${language === lang.code ? 'lang-option-active' : ''}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            {isLoggedIn ? (
              <button 
                onClick={() => setCurrentPage('profile')}
                className="profile-btn"
              >
                <img src={currentUser?.avatar || "https://picsum.photos/seed/user123/100/100"} alt="Profile" className="profile-img" />
              </button>
            ) : (
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="login-btn"
              >
                Kirish
              </button>
            )}
          </div>
        </div>
      </nav>

      <main className="main-content">
        <AnimatePresence mode="wait">
          {currentPage === 'map' ? (
            <div key="map-page">
              <Xarita 
                onBack={() => setCurrentPage('home')}
                onSelectPlace={(place) => {
                  setDirectPlaceDetail(place);
                  setCurrentPage('home');
                }}
                allPlaces={popularPlaces}
              />
            </div>
          ) : currentPage === 'offers' ? (
            <motion.div
              key="offers-page"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Takliflar />
            </motion.div>
          ) : currentPage === 'profile' ? (
            <motion.div
              key="profile-page"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <Profile 
                user={currentUser}
                onLogout={() => {
                  apiRequest('/logout', { method: 'POST' })
                    .catch(() => {})
                    .finally(() => {
                      setIsLoggedIn(false);
                      setCurrentUser(null);
                      setCurrentPage('home');
                    });
                }}
                onBack={() => setCurrentPage('home')}
                onAddPlace={() => setCurrentPage('add-place')}
              />
            </motion.div>
          ) : currentPage === 'about' ? (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <AboutUs onBack={() => setCurrentPage('home')} />
            </motion.div>
          ) : directPlaceDetail ? (
            <motion.div
              key="direct-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <PlaceDetails 
                place={directPlaceDetail}
                onBack={() => setDirectPlaceDetail(null)}
              />
            </motion.div>
          ) : isDetailView ? (
            <JoylarHaqida 
              category={currentCategory} 
              initialSubCategory={activeSubCategory}
              onBack={() => setIsDetailView(false)}
              popularPlaces={popularPlaces}
            />
          ) : (
            <motion.div
              key="home-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Hero Section */}
              <section className="hero">
                <div className="hero-left">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hero-location"
                  >
                    <div className="hero-dot" />
                    <span className="hero-location-text">{t.hero.location}</span>
                    <ChevronDown className="hero-location-chevron" />
                  </motion.div>

                  <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="hero-title"
                  >
                    <span className="hero-title-1">{t.hero.title1}</span>
                    <span className="hero-title-2">{t.hero.title2}</span>
                    <span className="hero-title-3">{t.hero.title3}</span>
                  </motion.h1>

                  {/* Search Bar */}
                  <div className="hero-search">
                    <div className="hero-search-input-wrap">
                      <Search className="hero-search-icon" />
                      <input 
                        type="text" 
                        placeholder={t.hero.searchPlaceholder} 
                        className="hero-search-input"
                      />
                    </div>
                    <button className="hero-search-btn">
                      {t.hero.searchBtn}
                    </button>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="hero-right">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-image-wrap"
                  >
                    <img 
                      src="https://storage.googleapis.com/static.antigravity.dev/bekn3r42imguiqkktc36it/input_file_0.png" 
                      alt="Waynix Hero" 
                      className="hero-image"
                      referrerPolicy="no-referrer"
                    />
                    {/* Decorative Glow */}
                    <div className="hero-glow" />
                  </motion.div>
                </div>
              </section>

              {/* News & Promotions Slideshow */}
              <section className="news">
                <div className="news-header">
                  <h2 className="news-title">Yangiliklar va Akciyalar</h2>
                  <div className="news-dots">
                    {news.map((_, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setCurrentNews(idx)}
                        className={`news-dot ${idx === currentNews ? 'news-dot-active' : 'news-dot-inactive'}`} 
                      />
                    ))}
                  </div>
                </div>

                <div className="news-slider">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentNews}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      className="news-slide"
                    >
                      <img 
                        src={news[currentNews].image} 
                        alt={news[currentNews].title}
                        className="news-slide-img"
                        referrerPolicy="no-referrer"
                      />
                      <div className="news-slide-content">
                        <div className="news-tags">
                          <span className="news-tag">
                            {news[currentNews].tag}
                          </span>
                          <span className="news-tag-secondary">Hafta yangiligi</span>
                        </div>
                        <h3 className="news-slide-title">{news[currentNews].title}</h3>
                        <p className="news-slide-desc">{news[currentNews].description}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Progress Bar Overlay */}
                  <div className="news-progress">
                    <motion.div 
                      key={currentNews}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="news-progress-bar"
                    />
                  </div>
                </div>
              </section>

              {/* Category Explorer Section */}
              <section className="category">
                <AnimatePresence mode="wait">
                  {!activeCategory ? (
                    <motion.div
                      key="grid"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <div className="category-header">
                        <h2 className="news-title">{t.categories.title}</h2>
                      </div>
                      <div className="category-grid">
                        {categoryExplorerData.map((cat, idx) => (
                          <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx }}
                            whileHover={cat.disabled ? {} : { y: -4, backgroundColor: 'rgba(255, 255, 255, 0.05)', transition: { duration: 0.2 } }}
                            onClick={() => {
                              if (cat.disabled) return;
                              setActiveCategory(cat.id);
                              setActiveSubCategory(null);
                              setIsDetailView(false);
                            }}
                            className={`category-card ${cat.disabled ? 'category-card-disabled' : ''}`}
                          >
                            {/* Decorative Blob */}
                            <div className={`category-blob ${cat.blobClass}`} />
                            
                            {/* Icon Container */}
                            <div className={`category-icon ${cat.colorClass}`}>
                              <cat.icon className="icon-md" />
                            </div>
                            
                            {/* Text Content */}
                            <div className="category-text">
                              <h4 className={`category-title ${cat.disabled ? '' : ''}`}>{cat.title}</h4>
                              <p className="category-desc">
                                {cat.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="subcategories"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="subcategory"
                    >
                      <div className="subcategory-header">
                        <button 
                          onClick={() => setActiveCategory(null)}
                          className="subcategory-back"
                        >
                          <ArrowLeft className="icon-sm" />
                        </button>
                        <div>
                          <div className="subcategory-kicker">
                            <div className="subcategory-dot" />
                            <span className="subcategory-kicker-text">Yo'nalishni tanlang</span>
                          </div>
                          <h2 className="subcategory-title">
                            {currentCategory?.title}
                          </h2>
                        </div>
                      </div>

                      <div className="subcategory-list">
                        {/* "Barchasi" option in subcategory list */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          whileHover={{ x: 4, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                          onClick={() => {
                            setActiveSubCategory(null);
                            setIsDetailView(true);
                          }}
                          className="subcategory-item"
                        >
                          <div className="subcategory-item-left subcat-all-icon">
                            <LayoutGrid className="icon-md" />
                          </div>
                          <div className="subcat-text">
                            <h4 className="subcategory-item-title">Barchasi</h4>
                            <p className="subcategory-item-desc">Kategoriyadagi barcha joylarni ko'rish</p>
                          </div>
                          <div className="subcategory-item-right">
                            <ChevronRight className="subcategory-item-right-icon" />
                          </div>
                        </motion.div>

                        {currentCategory?.items.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * (idx + 1) }}
                            whileHover={{ x: 4, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                            onClick={() => {
                              setActiveSubCategory(item.name);
                              setIsDetailView(true);
                            }}
                            className="subcategory-item"
                          >
                            <div className={`subcategory-item-left ${item.colorClass}`}>
                              <item.icon className="icon-md" />
                            </div>
                            <div className="subcat-text">
                              <h4 className="subcategory-item-title">{item.name}</h4>
                              <p className="subcategory-item-desc">Bo'limdagi barcha ma'lumotlarni ko'rish</p>
                            </div>
                            <div className="subcategory-item-right">
                              <ChevronRight className="subcategory-item-right-icon" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </section>

              {/* Popular Places Section */}
              <section className="popular">
                <div className="popular-header">
                  <h2 className="popular-title">Mashhur joylar</h2>
                  <button className="popular-link">Barchasi</button>
                </div>
                
                <div className="popular-scroll">
                  <div className="popular-row">
                    {popularPlaces.map((place, idx) => (
                      <motion.div
                        key={place.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -8 }}
                        className="popular-card"
                      >
                        {/* Rating Badge */}
                        <div className="popular-rating">
                          <Star className="icon-xs icon-yellow-fill" />
                          <span className="rating-text">{place.rating}</span>
                        </div>

                        {/* Image Container */}
                        <div className="popular-image-wrap">
                          <img 
                            src={place.image} 
                            alt={place.name}
                            className="popular-image"
                            referrerPolicy="no-referrer"
                          />
                          <div className="popular-image-overlay" />
                        </div>

                        {/* Content */}
                        <div className="popular-body">
                          <div className="popular-text">
                            <span className="popular-type">{place.type}</span>
                            <h3 className="popular-name">{place.name}</h3>
                          </div>
                          <div className="popular-location">
                            <MapPin className="icon-xs" />
                            <span className="popular-location-text">{place.location}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    {/* Peek Element to show more exists */}
                    <div className="popular-peek">
                      <div className="popular-peek-bar" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Join Waynix Section - Compact Card Version */}
              <section className="join">
                {/* Subtle Background Glow */}
                <div className="join-glow" />

                <div className="join-header">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="join-icon"
                  >
                    <Handshake className="icon-md icon-black" />
                  </motion.div>
                  <motion.h2 
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="join-title"
                  >
                    Waynixga qo'shiling
                  </motion.h2>
                  <motion.p 
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="join-desc"
                  >
                    Bu yerda har bir ishtirokchi platformaning muhim qismiga aylanadi. Bugun qo'shiling va kelajakdagi imkoniyatlarning bir bo'lagi bo'ling!
                  </motion.p>
                </div>

                <div className="join-grid">
                  {[
                    {
                      icon: Store,
                      title: "Biznes egalari",
                      desc: "Joyingizni joylashtiring va mijozlar oqimini oshiring."
                    },
                    {
                      icon: Users,
                      title: "Foydalanuvchilar",
                      desc: "Yangi joylar qo'shing va ma'lumot kiriting."
                    },
                    {
                      icon: ShieldCheck,
                      title: "Sifat va ishonch",
                      desc: "Barcha joylar hamjamiyat tomonidan baholanadi."
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.02)' }}
                      className="join-card"
                    >
                      <div className="join-card-icon">
                        <item.icon className="icon-sm icon-yellow" />
                      </div>
                      <h4 className="join-card-title">{item.title}</h4>
                      <p className="join-card-desc">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="join-actions">
                  <div className="join-buttons">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCurrentPage('add-place')}
                      className="join-btn-primary"
                    >
                      Qo'shilish
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                      whileTap={{ scale: 0.95 }}
                      className="join-btn-secondary"
                    >
                      Batafsil
                    </motion.button>
                  </div>

                  <div className="join-meta">
                    <div className="join-meta-item">
                      <div className="join-meta-dot-free" />
                      Bepul
                    </div>
                    <div className="join-meta-item">
                      <div className="join-meta-dot-support" />
                      24/7 Support
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={() => {
          refreshSession();
          setIsAuthModalOpen(false);
        }}
      />

      {/* Footer / Bottom Info */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Globe className="icon-sm" />
            <span className="footer-title">Waynix</span>
          </div>
          <p className="footer-copy">
            &copy; 2026 Waynix Platform. Barcha huquqlar himoyalangan.
          </p>
          <div className="footer-links">
            <a href="#" className="footer-link"><User className="icon-sm" /></a>
            <a href="#" className="footer-link"><Bell className="icon-sm" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
