const baseSocials = {
  website: "#",
  instagram: "#",
  telegram: "#",
  facebook: "#",
};

function place(data) {
  return {
    images: data.images || [data.image],
    fullDescription:
      data.fullDescription ||
      `${data.name} haqida batafsil ma'lumot. Ushbu joy ${data.location} hududida joylashgan bo'lib, foydalanuvchilar tomonidan yaxshi baholangan.`,
    address: data.address || `${data.location}, O'zbekiston`,
    phone: data.phone || "+998 90 123 45 67",
    hours: data.hours || "09:00 - 22:00",
    socials: { ...baseSocials, ...(data.socials || {}) },
    ...data,
  };
}

export const tours = [
  place({ id: 1, name: "Ayoz qal'a", type: "Historical places", desc: "Qadimgi Xorazm davlatining poytaxti", location: "Ellikqala tumani", region: "Qoraqalpog'iston", rating: 4.9, popularity: 98, image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 2, name: "Savitsky muzeyi", type: "Museums", desc: "Dunyoga mashhur Avangard san'at kolleksiyasi", location: "Nukus shahri", region: "Qoraqalpog'iston", rating: 4.8, popularity: 96, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 3, name: "Qoraqalpog'iston Davlat muzeyi", type: "Museums", desc: "Boy madaniy meros va san'at asarlari", location: "Nukus shahri", region: "Qoraqalpog'iston", rating: 4.7, popularity: 92, image: "https://images.unsplash.com/photo-1458842727533-7c9053bfea65?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 4, name: "Orol dengizi qirg'og'i", type: "Nature places", desc: "Ekologik sayohat va tabiiy manzara", location: "Moynaq tumani", region: "Qoraqalpog'iston", rating: 4.6, popularity: 87, image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 5, name: "Guldursun qal'asi", type: "Historical places", desc: "O'rta asr mudofaa inshootlari", location: "Qorao'zak tumani", region: "Qoraqalpog'iston", rating: 4.5, popularity: 82, image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 6, name: "Amu Daryo qirg'oq-parki", type: "Parks", desc: "Oila dam olish va tabiat bilan tanishuv", location: "Nukus shahri", region: "Qoraqalpog'iston", rating: 4.4, popularity: 78, image: "https://images.unsplash.com/photo-1470004914212-05527e49370b?q=80&w=1200&auto=format&fit=crop" }),
];

export const shops = [
  place({ id: 1, name: "Chorsu bozori", type: "Bozor", desc: "Mahalliy mahsulotlar va milliy taomlar", location: "Toshkent", region: "Toshkent", rating: 4.8, popularity: 97, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 2, name: "Samarqand Plaza", type: "Mall", desc: "Yirik savdo markazi", location: "Samarqand", region: "Samarqand", rating: 4.7, popularity: 91, image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 3, name: "Mega Planet", type: "Mall", desc: "Brend do'konlar va o'yin-kulgi", location: "Toshkent", region: "Toshkent", rating: 4.6, popularity: 88, image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 4, name: "Makro", type: "Supermarket", desc: "Kundalik xaridlar uchun", location: "Nukus", region: "Qoraqalpog'iston", rating: 4.5, popularity: 85, image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 5, name: "Urgench Markazi", type: "Do'kon", desc: "Hududiy savdo nuqtasi", location: "Urganch", region: "Xorazm", rating: 4.3, popularity: 75, image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 6, name: "Eski shahar bozori", type: "Bozor", desc: "An'anaviy bozor muhiti", location: "Buxoro", region: "Buxoro", rating: 4.4, popularity: 79, image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1200&auto=format&fit=crop" }),
];

export const hotels = [
  place({ id: 1, name: "Hilton Tashkent City", type: "Hotel", desc: "5 yulduzli zamonaviy mehmonxona", location: "Toshkent", region: "Toshkent", rating: 4.9, popularity: 99, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop", price: 1800000 }),
  place({ id: 2, name: "Hyatt Regency Tashkent", type: "Hotel", desc: "Biznes va sayohat uchun qulay", location: "Toshkent", region: "Toshkent", rating: 4.8, popularity: 95, image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop", price: 1600000 }),
  place({ id: 3, name: "Nukus Plaza", type: "Hotel", desc: "Markazga yaqin qulay mehmonxona", location: "Nukus", region: "Qoraqalpog'iston", rating: 4.6, popularity: 86, image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop", price: 900000 }),
  place({ id: 4, name: "Bukhara Boutique", type: "Boutique", desc: "Tarixiy uslubdagi mehmonxona", location: "Buxoro", region: "Buxoro", rating: 4.7, popularity: 89, image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1200&auto=format&fit=crop", price: 1100000 }),
  place({ id: 5, name: "Khiva Inn", type: "Hotel", desc: "Ichan-Qala yaqinida", location: "Xiva", region: "Xorazm", rating: 4.5, popularity: 81, image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f4?q=80&w=1200&auto=format&fit=crop", price: 800000 }),
  place({ id: 6, name: "Samarkand Silk Road", type: "Resort", desc: "Yangi zamonaviy dam olish maskani", location: "Samarqand", region: "Samarqand", rating: 4.8, popularity: 93, image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200&auto=format&fit=crop", price: 1400000 }),
];

export const services = [
  place({ id: 1, name: "Notarius markazi", type: "Notarius", desc: "Hujjatlarni rasmiylashtirish", location: "Toshkent", region: "Toshkent", rating: 4.6, popularity: 84, image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 2, name: "Huquqiy maslahat", type: "Advokat", desc: "Yuridik xizmatlar", location: "Samarqand", region: "Samarqand", rating: 4.5, popularity: 80, image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 3, name: "NBU filial", type: "Bank", desc: "Bank xizmatlari", location: "Nukus", region: "Qoraqalpog'iston", rating: 4.4, popularity: 78, image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 4, name: "Sug'urta uyi", type: "Insurance", desc: "Sug'urta paketlari", location: "Buxoro", region: "Buxoro", rating: 4.2, popularity: 70, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 5, name: "Turistik servis", type: "Service", desc: "Sayohatga oid xizmatlar", location: "Urganch", region: "Xorazm", rating: 4.3, popularity: 74, image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 6, name: "IT xizmat markazi", type: "Service", desc: "Texnik va IT xizmatlar", location: "Toshkent", region: "Toshkent", rating: 4.5, popularity: 82, image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" }),
];

export const entertainment = [
  place({ id: 1, name: "Magic City", type: "Attraction", desc: "Oilaviy ko'ngilochar maskan", location: "Toshkent", region: "Toshkent", rating: 4.8, popularity: 95, image: "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 2, name: "Ekopark", type: "Park", desc: "Yashil hudud va sport", location: "Toshkent", region: "Toshkent", rating: 4.7, popularity: 88, image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 3, name: "Alisher Navoiy teatri", type: "Theater", desc: "Opera va balet namoyishlari", location: "Toshkent", region: "Toshkent", rating: 4.9, popularity: 90, image: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 4, name: "Cinema Hall", type: "Cinema", desc: "Yangi filmlar namoyishi", location: "Samarqand", region: "Samarqand", rating: 4.4, popularity: 76, image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 5, name: "Charvak dam olish zonasi", type: "Resort", desc: "Dam olish va suv sportlari", location: "Bo'stonliq", region: "Toshkent", rating: 4.6, popularity: 84, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 6, name: "Markaziy bog'", type: "Park", desc: "Shahar markazidagi bog'", location: "Nukus", region: "Qoraqalpog'iston", rating: 4.3, popularity: 72, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop" }),
];

export const medical = [
  place({ id: 1, name: "Markaziy shifoxona", type: "Hospital", desc: "Ko'p tarmoqli tibbiy xizmat", location: "Toshkent", region: "Toshkent", rating: 4.6, popularity: 86, image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 2, name: "Oilaviy poliklinika", type: "Polyclinic", desc: "Birlamchi tibbiy yordam", location: "Nukus", region: "Qoraqalpog'iston", rating: 4.4, popularity: 78, image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 3, name: "Dental Plus", type: "Stomatology", desc: "Stomatologik davolash", location: "Samarqand", region: "Samarqand", rating: 4.5, popularity: 80, image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 4, name: "Diagnostika markazi", type: "Diagnostic", desc: "Laboratoriya va UZI", location: "Buxoro", region: "Buxoro", rating: 4.3, popularity: 74, image: "https://images.unsplash.com/photo-1579165466991-467135ad3110?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 5, name: "Tez yordam markazi", type: "Emergency", desc: "24/7 xizmat", location: "Urganch", region: "Xorazm", rating: 4.2, popularity: 70, image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 6, name: "Bolalar shifoxonasi", type: "Hospital", desc: "Pediatriya yo'nalishi", location: "Toshkent", region: "Toshkent", rating: 4.7, popularity: 88, image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop" }),
];

export const government = [
  place({ id: 1, name: "Viloyat hokimligi", type: "Hokimiyat", desc: "Hududiy boshqaruv markazi", location: "Nukus", region: "Qoraqalpog'iston", rating: 4.3, popularity: 75, image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 2, name: "Adliya boshqarmasi", type: "Vazirlik", desc: "Huquqiy xizmatlar", location: "Toshkent", region: "Toshkent", rating: 4.2, popularity: 69, image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 3, name: "Shahar sudi", type: "Sud", desc: "Fuqarolik va jinoyat ishlari", location: "Samarqand", region: "Samarqand", rating: 4.1, popularity: 66, image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 4, name: "Prokuratura", type: "Prokuratura", desc: "Nazorat va tekshiruv ishlari", location: "Buxoro", region: "Buxoro", rating: 4.0, popularity: 63, image: "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 5, name: "DXM", type: "Service", desc: "Davlat xizmatlari markazi", location: "Urganch", region: "Xorazm", rating: 4.4, popularity: 79, image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 6, name: "Soliq boshqarmasi", type: "Vazirlik", desc: "Soliq xizmatlari", location: "Toshkent", region: "Toshkent", rating: 4.2, popularity: 72, image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop" }),
];

export const education = [
  place({ id: 1, name: "1-sonli maktab", type: "Maktab", desc: "Umumiy o'rta ta'lim", location: "Nukus", region: "Qoraqalpog'iston", rating: 4.5, popularity: 82, image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 2, name: "Prezident maktabi", type: "Maktab", desc: "Iqtidorli o'quvchilar uchun", location: "Toshkent", region: "Toshkent", rating: 4.9, popularity: 96, image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 3, name: "Xususiy bog'cha", type: "Bog'cha", desc: "Maktabgacha ta'lim", location: "Samarqand", region: "Samarqand", rating: 4.4, popularity: 77, image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 4, name: "Akademik litsey", type: "Litsey", desc: "Ixtisoslashtirilgan ta'lim", location: "Buxoro", region: "Buxoro", rating: 4.6, popularity: 84, image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 5, name: "Kasb-hunar maktabi", type: "Kollej", desc: "Amaliy kasbiy tayyorlov", location: "Urganch", region: "Xorazm", rating: 4.3, popularity: 73, image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 6, name: "Universitet kampusi", type: "Universitet", desc: "Oliy ta'lim markazi", location: "Toshkent", region: "Toshkent", rating: 4.8, popularity: 92, image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop" }),
];

export const cafes = [
  place({ id: 1, name: "Evos", type: "Fast Food", desc: "Mashhur fast food tarmog'i", location: "Toshkent", region: "Toshkent", rating: 4.4, popularity: 86, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 2, name: "Bon!", type: "Cafe", desc: "Kofe va desertlar", location: "Toshkent", region: "Toshkent", rating: 4.6, popularity: 82, image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 3, name: "Afsona restoran", type: "Restaurant", desc: "Milliy va yevropa taomlari", location: "Samarqand", region: "Samarqand", rating: 4.7, popularity: 88, image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 4, name: "Oqtepa lavash", type: "Fast Food", desc: "Tez va mazali lavash", location: "Nukus", region: "Qoraqalpog'iston", rating: 4.3, popularity: 75, image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 5, name: "Sky cafe", type: "Cafe", desc: "Shahar manzarali cafe", location: "Buxoro", region: "Buxoro", rating: 4.5, popularity: 78, image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop" }),
  place({ id: 6, name: "Family restaurant", type: "Restaurant", desc: "Oilaviy restoran", location: "Urganch", region: "Xorazm", rating: 4.4, popularity: 74, image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1200&auto=format&fit=crop" }),
];
