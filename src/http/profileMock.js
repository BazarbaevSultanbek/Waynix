export const profileMock = {
  about:
    "O'zbekiston va Markaziy Osiyo bo'ylab sayohat qiluvchi. Yashirin go'zalliklar va mahalliy tajribalar bilan bo'lishishni yaxshi ko'raman.",
  joinedAt: "Mart 2024",
};

export const mockPlaces = [
  { id: 1, name: "Chorsu Bozori", location: "Toshkent, Eski Shahar", status: "Faol" },
  { id: 2, name: "Minor Masjidi", location: "Toshkent, Sebzor", status: "Faol" },
  { id: 3, name: "Chimyon Tog'lari Kurort", location: "Toshkent viloyati, Bo'stonliq", status: "Ko'rib chiqilmoqda" },
  { id: 4, name: "Amir Temur Muzeyi", location: "Toshkent, Amir Temur ko'chasi", status: "Faol" },
  { id: 5, name: "Samarqand Plazasi", location: "Samarqand, Shahar Markazi", status: "Rad etilgan" },
];

export const mockSaved = [
  { id: 1, name: "Registon Maydoni", city: "Samarqand", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, name: "Buxoro Eski Shahri", city: "Buxoro", image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, name: "Charvak Ko'li", city: "Toshkent viloyati", image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, name: "Shohizinda", city: "Samarqand", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop" },
  { id: 5, name: "Xiva Ichan Qal'a", city: "Xiva", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop" },
  { id: 6, name: "Broadway Ko'chasi", city: "Toshkent", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop" },
];

export const mockComments = [
  {
    id: 1,
    place: "Registon Maydoni",
    location: "Samarqand",
    rating: 5,
    text: "Ajoyib arxitektura! O'zbekistonda albatta ko'rish kerak bo'lgan joy.",
    date: "28 Dekabr, 2025",
  },
  {
    id: 2,
    place: "Chorsu Bozori",
    location: "Toshkent",
    rating: 4,
    text: "Ajoyib mahalliy bozor, yangi mahsulotlar va an'anaviy buyumlar.",
    date: "15 Dekabr, 2025",
  },
  {
    id: 3,
    place: "Charvak Ko'li",
    location: "Toshkent viloyati",
    rating: 5,
    text: "Go'zal tog' manzarasi va tiniq suv. Yoz sayohati uchun tavsiya qilaman.",
    date: "30 Noyabr, 2025",
  },
];
