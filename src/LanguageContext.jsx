import React, { createContext, useContext, useMemo, useState } from 'react'

const LanguageContext = createContext(null)

const translations = {
  uz: {
    nav: { home: 'Bosh sahifa', map: 'Xarita', offers: 'Takliflar', about: 'Biz haqimizda' },
    hero: {
      location: 'Qoraqalpogʻiston',
      title1: 'Kashf eting',
      title2: 'Yangi joylarni',
      title3: 'Waynix bilan',
      searchPlaceholder: 'Joy, restoran, xizmat...',
      searchBtn: 'Qidirish'
    },
    categories: {
      title: 'Kategoriyalar',
      turobektlar: 'Sayohat joylari',
      turobektlarDesc: 'Tarix, madaniyat va tabiat',
      ovqatlanish: 'Ovqatlanish',
      ovqatlanishDesc: 'Restoran, fast food va kafe',
      tunash: 'Tunash',
      tunashDesc: 'Mehmonxona va turar joylar',
      xizmatlar: 'Xizmatlar',
      xizmatlarDesc: 'Transport va servislar',
      entertainment: 'Ko‘ngilochar',
      entertainmentDesc: 'Tadbirlar va dam olish'
    },
    about: {
      platform: 'Platforma',
      mission: 'Bizning missiya',
      desc: 'Waynix — Qoraqalpogʻistondagi joylar, xizmatlar va tadbirlarni topish uchun zamonaviy platforma.',
      contact: 'Aloqa',
      stats: {
        users: 'Foydalanuvchilar',
        places: 'Joylar',
        regions: 'Hududlar',
        reviews: 'Baholar'
      }
    },
    profile: {
      user: 'Foydalanuvchi',
      business: 'Biznes',
      activity: 'Faollik',
      info: 'Maʼlumot',
      settings: 'Sozlamalar',
      edit: 'Profilni tahrirlash',
      security: 'Xavfsizlik',
      saved: 'Saqlanganlar',
      privileges: 'Imtiyozlar',
      lang: 'Til',
      exit: 'Chiqish',
      myPlaces: 'Mening joylarim',
      dashboard: 'Boshqaruv paneli',
      addPlace: 'Joy qoʻshish'
    }
  },
  qr: {
    nav: { home: 'Bas bet', map: 'Xarita', offers: 'Taklifler', about: 'Biz haqqında' },
    hero: {
      location: 'Qaraqalpaqstan',
      title1: 'Ashıń',
      title2: 'Jańa orınlardı',
      title3: 'Waynix penen',
      searchPlaceholder: 'Orın, restoran, xızmet...',
      searchBtn: 'Izlew'
    },
    categories: {
      title: 'Kategoriya',
      turobektlar: 'Sayahat orınları',
      turobektlarDesc: 'Tariyx, madeniyet, tabiǵat',
      ovqatlanish: 'Awqatlanıw',
      ovqatlanishDesc: 'Restoran, fast food, kafe',
      tunash: 'Túnap qalıw',
      tunashDesc: 'Meymanxana, turar joy',
      xizmatlar: 'Xızmetler',
      xizmatlarDesc: 'Transport hám servis',
      entertainment: 'Kóńil ashar',
      entertainmentDesc: 'Tadbirler hám dem alıw'
    },
    about: {
      platform: 'Platforma',
      mission: 'Bizdiń missiya',
      desc: 'Waynix — Qaraqalpaqstandaǵı orınlar, xızmetler hám tadbirlerdi tabıw ushın platforma.',
      contact: 'Baylanıs',
      stats: {
        users: 'Paydalanıwshılar',
        places: 'Orınlar',
        regions: 'Aumaqlar',
        reviews: 'Bahalar'
      }
    },
    profile: {
      user: 'Paydalanıwshı',
      business: 'Biznes',
      activity: 'Faollıq',
      info: 'Maʼlumot',
      settings: 'Sozlamalar',
      edit: 'Profilni tahrirlew',
      security: 'Qáwipsizlik',
      saved: 'Saqlanǵanlar',
      privileges: 'Imtiyozlar',
      lang: 'Til',
      exit: 'Shıǵıw',
      myPlaces: 'Meniń orınlarım',
      dashboard: 'Básqarıw paneli',
      addPlace: 'Orın qosıw'
    }
  },
  ru: {
    nav: { home: 'Главная', map: 'Карта', offers: 'Предложения', about: 'О нас' },
    hero: {
      location: 'Каракалпакстан',
      title1: 'Откройте',
      title2: 'Новые места',
      title3: 'С Waynix',
      searchPlaceholder: 'Место, ресторан, сервис...',
      searchBtn: 'Поиск'
    },
    categories: {
      title: 'Категории',
      turobektlar: 'Туризм',
      turobektlarDesc: 'История, культура, природа',
      ovqatlanish: 'Питание',
      ovqatlanishDesc: 'Рестораны, фастфуд, кафе',
      tunash: 'Проживание',
      tunashDesc: 'Отели и жильё',
      xizmatlar: 'Услуги',
      xizmatlarDesc: 'Транспорт и сервисы',
      entertainment: 'Развлечения',
      entertainmentDesc: 'События и отдых'
    },
    about: {
      platform: 'Платформа',
      mission: 'Наша миссия',
      desc: 'Waynix — платформа для поиска мест, сервисов и событий в Каракалпакстане.',
      contact: 'Контакты',
      stats: {
        users: 'Пользователи',
        places: 'Места',
        regions: 'Регионы',
        reviews: 'Отзывы'
      }
    },
    profile: {
      user: 'Пользователь',
      business: 'Бизнес',
      activity: 'Активность',
      info: 'Информация',
      settings: 'Настройки',
      edit: 'Редактировать профиль',
      security: 'Безопасность',
      saved: 'Сохраненные',
      privileges: 'Привилегии',
      lang: 'Язык',
      exit: 'Выйти',
      myPlaces: 'Мои места',
      dashboard: 'Панель управления',
      addPlace: 'Добавить место'
    }
  },
  en: {
    nav: { home: 'Home', map: 'Map', offers: 'Offers', about: 'About' },
    hero: {
      location: 'Karakalpakstan',
      title1: 'Discover',
      title2: 'New Places',
      title3: 'With Waynix',
      searchPlaceholder: 'Place, restaurant, service...',
      searchBtn: 'Search'
    },
    categories: {
      title: 'Categories',
      turobektlar: 'Tourism',
      turobektlarDesc: 'History, culture, nature',
      ovqatlanish: 'Food',
      ovqatlanishDesc: 'Restaurants, fast food, cafes',
      tunash: 'Stay',
      tunashDesc: 'Hotels and rentals',
      xizmatlar: 'Services',
      xizmatlarDesc: 'Transport and services',
      entertainment: 'Entertainment',
      entertainmentDesc: 'Events and leisure'
    },
    about: {
      platform: 'Platform',
      mission: 'Our mission',
      desc: 'Waynix is a modern platform to discover places, services, and events across Karakalpakstan.',
      contact: 'Contact',
      stats: {
        users: 'Users',
        places: 'Places',
        regions: 'Regions',
        reviews: 'Reviews'
      }
    },
    profile: {
      user: 'User',
      business: 'Business',
      activity: 'Activity',
      info: 'Info',
      settings: 'Settings',
      edit: 'Edit profile',
      security: 'Security',
      saved: 'Saved',
      privileges: 'Privileges',
      lang: 'Language',
      exit: 'Logout',
      myPlaces: 'My places',
      dashboard: 'Dashboard',
      addPlace: 'Add place'
    }
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('uz')

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      t: translations[language] || translations.uz
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
