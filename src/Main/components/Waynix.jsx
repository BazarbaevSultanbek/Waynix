import { useMemo, useState } from "react";
import { Button, Select } from "@mantine/core";
import { IconSearch, IconMapPin, IconX } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router";

const places = [
  {
    id: 1,
    name: "Ayoz qal'a",
    category: "Turobektlar",
    location: "Nukus",
    rating: 4.9,
    page: "/tours",
  },
  {
    id: 2,
    name: "Qoraqalpog'iston Davlat muzeyi",
    category: "Turobektlar",
    location: "Nukus",
    rating: 4.7,
    page: "/tours",
  },
  {
    id: 3,
    name: "Savitsky muzeyi",
    category: "Turobektlar",
    location: "Nukus",
    rating: 4.8,
    page: "/tours",
  },
  {
    id: 4,
    name: "Hilton Tashkent City",
    category: "Turar joylar",
    location: "Toshkent",
    rating: 4.8,
    page: "/hotels",
  },
  {
    id: 5,
    name: "City Palace Hotel",
    category: "Turar joylar",
    location: "Toshkent",
    rating: 4.5,
    page: "/hotels",
  },
  {
    id: 6,
    name: "Evos",
    category: "Ovqatlanish joylari",
    location: "Toshkent",
    rating: 4.4,
    page: "/cafe",
  },
  {
    id: 7,
    name: "Oqtepa Lavash",
    category: "Ovqatlanish joylari",
    location: "Toshkent",
    rating: 4.3,
    page: "/cafe",
  },
  {
    id: 8,
    name: "Samarqand Plaza",
    category: "Savdo markazlari",
    location: "Samarqand",
    rating: 4.4,
    page: "/shop",
  },
  {
    id: 9,
    name: "Chorsu bozori",
    category: "Savdo markazlari",
    location: "Toshkent",
    rating: 4.7,
    page: "/shop",
  },
  {
    id: 10,
    name: "NBU bank",
    category: "Xizmatlar",
    location: "Toshkent",
    rating: 4.2,
    page: "/services",
  },
  {
    id: 11,
    name: "Notarius #1",
    category: "Xizmatlar",
    location: "Nukus",
    rating: 4.1,
    page: "/services",
  },
  {
    id: 12,
    name: "Magic City",
    category: "Ko'ngil ochar va dam olish",
    location: "Toshkent",
    rating: 4.8,
    page: "/entertainment",
  },
  {
    id: 13,
    name: "1-sonli Maktab",
    category: "Ta'lim",
    location: "Nukus",
    rating: 4.2,
    page: "/education",
  },
  {
    id: 14,
    name: "Urganch davlat universiteti",
    category: "Ta'lim",
    location: "Urganch",
    rating: 4.6,
    page: "/education",
  },
  {
    id: 15,
    name: "Hokimiyat",
    category: "Davlat binolari",
    location: "Toshkent",
    rating: 4.0,
    page: "/government",
  },
  {
    id: 16,
    name: "Markaziy poliklinika",
    category: "Tibbiyot",
    location: "Nukus",
    rating: 4.3,
    page: "/medical",
  },
];

const categoryOptions = [
  { value: "all", label: "Barcha kategoriyalar" },
  { value: "Turobektlar", label: "Turobektlar" },
  { value: "Ovqatlanish joylari", label: "Ovqatlanish joylari" },
  { value: "Turar joylar", label: "Turar joylar" },
  { value: "Savdo markazlari", label: "Savdo markazlari" },
  { value: "Xizmatlar", label: "Xizmatlar" },
  { value: "Ko'ngil ochar va dam olish", label: "Ko'ngil ochar va dam olish" },
  { value: "Ta'lim", label: "Ta'lim" },
  { value: "Davlat binolari", label: "Davlat binolari" },
  { value: "Tibbiyot", label: "Tibbiyot" },
];

const ratingOptions = [
  { value: "0", label: "Reyting: hammasi" },
  { value: "5", label: "5 yulduzli" },
  { value: "4", label: "4+ yulduzli" },
  { value: "3", label: "3+ yulduzli" },
  { value: "2", label: "2+ yulduzli" },
];

const Waynix = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState("all");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("0");
  const [searched, setSearched] = useState(false);

  const isSearchReady =
    location.trim() !== "" || category !== "all" || rating !== "0";

  const results = useMemo(() => {
    if (!isSearchReady) return [];

    const q = location.trim().toLowerCase();
    const minRating = Number(rating || 0);

    return places.filter((p) => {
      const byCategory = category === "all" || p.category === category;
      const byRating = p.rating >= minRating;
      const byText =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);

      return byCategory && byRating && byText;
    });
  }, [category, location, rating, isSearchReady]);

  const handleSearch = () => {
    if (!isSearchReady) {
      setSearched(false);
      return;
    }

    setSearched(true);

    const q = location.trim().toLowerCase();
    if (!q) return;

    const exact = results.find((r) => r.name.toLowerCase() === q);
    if (exact) navigate(exact.page);
  };

  const clearSearch = () => {
    setCategory("all");
    setLocation("");
    setRating("0");
    setSearched(false);
  };

  return (
    <div className="Waynix">
      <div className="container">
        <div className="Waynix-main">
          <div className="Waynix-main-center">
            <h1>Waynix</h1>
            <p>One easy way...</p>
          </div>

          <nav className="Waynix-main-action">
            <section className="Waynix-main-action-categories">
              <Select
                label="Kategoriya"
                placeholder="Kategoriya tanlang"
                data={categoryOptions}
                value={category}
                onChange={(v) => {
                  setCategory(v || "all");
                  setSearched(false);
                }}
              />
            </section>

            <section className="Waynix-main-action-location">
              <p>Joy</p>
              <input
                type="text"
                id="location_search"
                placeholder="Joy yoki nom kiriting..."
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setSearched(false);
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <label htmlFor="location_search">
                <IconMapPin size={16} />
              </label>
            </section>

            <section className="Waynix-main-action-rates">
              <Select
                label="Reyting"
                placeholder="Reyting"
                data={ratingOptions}
                value={rating}
                onChange={(v) => {
                  setRating(v || "0");
                  setSearched(false);
                }}
              />
            </section>

            <Button
              size="lg"
              radius="xl"
              variant="gradient"
              gradient={{ from: "indigo", via: "violet", to: "pink" }}
              leftSection={<IconSearch size={18} />}
              className="waynix-gradient-button"
              onClick={handleSearch}
              disabled={!isSearchReady}
            >
              Izlash
            </Button>
          </nav>

          {searched && (
            <div className="Waynix-search-results">
              <div className="Waynix-search-results-head">
                <button
                  type="button"
                  className="result-close-btn"
                  onClick={() => setSearched(false)}
                >
                  <IconX size={16} />
                  Yopish
                </button>
              </div>

              {results.length ? (
                results.map((item) => (
                  <Link
                    key={item.id}
                    to={item.page}
                    className="Waynix-search-card"
                  >
                    <h4>{item.name}</h4>
                    <p>
                      {item.category} • {item.location} • ⭐ {item.rating}
                    </p>
                  </Link>
                ))
              ) : (
                <div className="Waynix-empty">Mos joy topilmadi.</div>
              )}
            </div>
          )}

          <div className="Waynix-main-text">
            <p>
              Sayohat <br />
              qilishning eng oson yo'li
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waynix;
