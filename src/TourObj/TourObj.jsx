import { useMemo, useState } from "react";
import Banner from "../Main/components/Banner";
import "../utils/styles/TourObj.scss";
import Footer from "../Main/components/Footer";

const tourList = [
  {
    id: 1,
    name: "Ayoz qal'a",
    type: "Historical places",
    desc: "Qadimgi Xorazm davlatining poytaxti",
    location: "Ellikqala tumani",
    rating: 4.9,
    popularity: 98,
    region: "Qoraqalpog'iston",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Qoraqalpog'iston Davlat muzeyi",
    type: "Museums",
    desc: "Boy madaniy meros va san'at asarlari",
    location: "Nukus shahri",
    rating: 4.7,
    popularity: 90,
    region: "Qoraqalpog'iston",
    image:
      "https://images.unsplash.com/photo-1458842727533-7c9053bfea65?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Orol dengizi qirg'og'i",
    type: "Nature places",
    desc: "Ekologik sayohat va tabiiy manzara",
    location: "Moynaq tumani",
    rating: 4.6,
    popularity: 85,
    region: "Qoraqalpog'iston",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Guldursun qal'asi",
    type: "Historical places",
    desc: "O'rta asr mudofaa inshootlari",
    location: "Qorao'zak tumani",
    rating: 4.5,
    popularity: 80,
    region: "Qoraqalpog'iston",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Savitsky muzeyi",
    type: "Museums",
    desc: "Dunyoga mashhur Avangard san'at kolleksiyasi",
    location: "Nukus shahri",
    rating: 4.8,
    popularity: 95,
    region: "Qoraqalpog'iston",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Amu Daryo qirg'oq-parki",
    type: "Parks",
    desc: "Oila dam olish va tabiat bilan tanishuv",
    location: "Nukus shahri",
    rating: 4.4,
    popularity: 78,
    region: "Qoraqalpog'iston",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
];

const categories = [
  "All",
  "Parks",
  "Historical places",
  "Museums",
  "Nature places",
  "Attention places",
];

const popularList = [
  {
    id: 1,
    name: "Ayoz qal'a",
    type: "Historical places",
    desc: "Qadimgi Xorazm davlatining poytaxti",
    location: "Ellikqala tumani",
    rating: 4.9,
    popularity: 98,
    region: "Qoraqalpog'iston",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Qoraqalpog'iston Davlat muzeyi",
    type: "Museums",
    desc: "Boy madaniy meros va san'at asarlari",
    location: "Nukus shahri",
    rating: 4.7,
    popularity: 90,
    region: "Qoraqalpog'iston",
    image:
      "https://images.unsplash.com/photo-1458842727533-7c9053bfea65?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Orol dengizi qirg'og'i",
    type: "Nature places",
    desc: "Ekologik sayohat va tabiiy manzara",
    location: "Moynaq tumani",
    rating: 4.6,
    popularity: 85,
    region: "Qoraqalpog'iston",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Guldursun qal'asi",
    type: "Historical places",
    desc: "O'rta asr mudofaa inshootlari",
    location: "Qorao'zak tumani",
    rating: 4.5,
    popularity: 80,
    region: "Qoraqalpog'iston",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Savitsky muzeyi",
    type: "Museums",
    desc: "Dunyoga mashhur Avangard san'at kolleksiyasi",
    location: "Nukus shahri",
    rating: 4.8,
    popularity: 95,
    region: "Qoraqalpog'iston",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Amu Daryo qirg'oq-parki",
    type: "Parks",
    desc: "Oila dam olish va tabiat bilan tanishuv",
    location: "Nukus shahri",
    rating: 4.4,
    popularity: 78,
    region: "Qoraqalpog'iston",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
  },
];

const sortOptions = ["Hudud", "Mashhurlik", "Nomi"];

const TourObjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Mashhurlik");
  const [viewMode, setViewMode] = useState("list");
  const [page, setPage] = useState(1);

  const itemsPerPage = 5;

  const filtered = useMemo(() => {
    if (selectedCategory === "All") return tourList;
    return tourList.filter((item) => item.type === selectedCategory);
  }, [selectedCategory]);

  const sorted = useMemo(() => {
    const data = [...filtered];
    if (selectedSort === "Nomi") {
      data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (selectedSort === "Mashhurlik") {
      data.sort((a, b) => b.popularity - a.popularity);
    } else if (selectedSort === "Hudud") {
      data.sort((a, b) => a.region.localeCompare(b.region));
    }
    return data;
  }, [filtered, selectedSort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / itemsPerPage));

  const paged = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return sorted.slice(start, start + itemsPerPage);
  }, [sorted, page]);

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
  };

  return (
    <>
    <Banner />
      <section className="tour-objects">
        <div className="tour-objects__wrap">
          <div className="tour-objects__header">
            <h2 className="tour-objects__title">Turobeklar</h2>

            <div className="tour-objects__filters">
              <div className="filter-group">
                <button className="filter-pill">{selectedCategory}</button>
                <div className="filter-menu">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`filter-item ${
                        selectedCategory === cat ? "is-active" : ""
                      }`}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setPage(1);
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <button className="filter-pill">{selectedSort}</button>
                <div className="filter-menu">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt}
                      className={`filter-item ${
                        selectedSort === opt ? "is-active" : ""
                      }`}
                      onClick={() => {
                        setSelectedSort(opt);
                        setPage(1);
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === "list" ? "is-active" : ""}`}
                  onClick={() => setViewMode("list")}
                >
                  List
                </button>
                <button
                  className={`view-btn ${viewMode === "grid" ? "is-active" : ""}`}
                  onClick={() => setViewMode("grid")}
                >
                  Grid
                </button>
              </div>
            </div>
          </div>

          <div className={`tour-objects__list ${viewMode}`}>
            {paged.map((item) => (
              <article className="tour-card" key={item.id}>
                <div className="tour-card__media">
                  <img src={item.image} alt={item.name} />
                  <span className="tour-card__rating">★ {item.rating}</span>
                </div>

                <div className="tour-card__body">
                  <h3 className="tour-card__name">{item.name}</h3>
                  <p className="tour-card__tag">{item.type}</p>
                  <p className="tour-card__desc">{item.desc}</p>
                  <p className="tour-card__place">Joylashuv: {item.location}</p>
                </div>

                <div className="tour-card__action">
                  <button className="tour-card__btn">Batafsil</button>
                </div>
              </article>
            ))}
          </div>

          <div className="tour-objects__pagination">
            <button className="page-btn" onClick={() => goToPage(page - 1)}>
              ‹
            </button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  className={`page-btn ${p === page ? "is-active" : ""}`}
                  onClick={() => goToPage(p)}
                >
                  {p}
                </button>
              );
            })}
            <button className="page-btn" onClick={() => goToPage(page + 1)}>
              ›
            </button>
          </div>
        </div>
      </section>
      <section className="popular-tour">
        <div className="popular-tour__wrap">
          <div className="popular-tour__head">
            <h3 className="popular-tour__title">Mashhur turobeklar</h3>
            <div className="popular-tour__nav">
              <button className="round-btn">‹</button>
              <button className="round-btn">›</button>
            </div>
          </div>

          <div className="popular-tour__grid">
            {popularList.map((item) => (
              <article className="popular-card" key={item.id}>
                <div className="popular-card__media">
                  <img src={item.image} alt={item.name} />
                  <span className="popular-card__rating">★ {item.rating}</span>
                </div>
                <div className="popular-card__body">
                  <p className="popular-card__tag">{item.type}</p>
                  <h4 className="popular-card__name">{item.name}</h4>
                  <p className="popular-card__desc">{item.desc}</p>
                  <div className="popular-card__bottom">
                    <span className="popular-card__place">{item.location}</span>
                    <button className="popular-card__link">Batafsil →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TourObjects;
